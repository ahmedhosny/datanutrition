import Papa from "papaparse";
import data from "../data";
import _ from "lodash";

// const url =
//   "https://raw.githubusercontent.com/ahmedhosny/datanutrition/master/src/utils/sample.csv";
const url =
  "https://raw.githubusercontent.com/ahmedhosny/datanutrition/master/src/utils/sample_missing.csv";

// all csv is parsed as string
export function getStats() {
  Papa.parse(url, {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
      const noOfRows = results.data.length;
      const transposed = Object.assign(
        ...Object.keys(results.data[0]).map(key => ({
          [key]: results.data.map(o => o[key])
        }))
      );
      const stats = getOrdinalNominal(data, transposed, noOfRows);
      console.log(stats);
    }
  });
}

/**
 * Temporary to bind ordinal and nominal
 */
let ordinalNominal = data.statistics.ordinal.concat(data.statistics.nominal);

/**
 * Gets ordinal statistics
 * @param  {Object} data       data from my json
 * @param  {array} trasnposed  transposed from csv of actual data
 * @param  {number} noOfRows     number of rows.
 */
function getOrdinalNominal(data, trasnposed, noOfRows) {
  let stats = [];
  ordinalNominal.map((m, index) => {
    const column = trasnposed[m.name];
    const count = _.countBy(column);
    const uniqueEntries = _.uniq(column).length;
    const uniqueEntriesString = getUnique(column, count);
    console.log(count);
    const obj = {
      name: m.name,
      count: column.length,
      uniqueEntries: uniqueEntriesString,
      mostFrequent: getFreq(count, noOfRows, uniqueEntries, true),
      leastFrequent: getFreq(count, noOfRows, uniqueEntries, false),
      missing: getMissing(count, noOfRows)
    };
    stats.push(obj);
  });
  return stats;
}

/**
 * Calculate the freq of the most and least entires
 * @param  {object} count    count from lodash
 * @param  {number} noOfRows number of entires
 * @param  {number} unique   number of unique entires
 * @param  {bool} which      true for most freq, false for least freq
 * @return {string}          most or least frequent
 */
function getFreq(count, noOfRows, unique, which) {
  let freq = Object.keys(count).reduce(function(a, b) {
    if (which) {
      return count[a] > count[b] ? a : b;
    } else {
      return count[a] < count[b] ? a : b;
    }
  });
  //
  // check if freq is undefined
  //
  const freqMissing = freq === "" ? "missing value" : freq;
  //
  //if the entire column is made up all unique entries
  //
  if (noOfRows === unique) {
    return "--";
  } else if (unique === 1) {
    //
    // if entire column is made up of the same value
    // most frequent makes sense here - but least frequent is empty
    //
    return which ? freqMissing + " (" + count[freq].toString() + ")" : "--";
  } else {
    //
    // if there is something in between
    // need to check if this is the absolute most/least frequent or there are
    // others - if so return "--"
    // regardless of most or least frequent
    //
    const edges = _.countBy(Object.values(count), function(item) {
      return item === count[freq];
    });
    return edges.true === 1
      ? freqMissing + " (" + count[freq].toString() + ")"
      : "multiple detected";
  }
}
/**
 * Calculate missing percentage
 * @param  {object} count    count from lodash
 * @param  {number} noOfRows number of entires
 * @return {string}          [either 0% or the actual %
 */
function getMissing(count, noOfRows) {
  return count[""] === undefined
    ? "0%"
    : parseFloat(count[""] / noOfRows * 100)
        .toFixed(2)
        .toString() + "%";
}

/**
 * Calculate number of unique values
 * @param  {array} column column of a variable
 * @param  {object} count    count from lodash
 * @return {string}    number of unique
 */
function getUnique(column, count) {
  return count[""] === undefined
    ? _.uniq(column).length.toString()
    : _.uniq(column).length.toString() + " including missing";
}
