import Papa from "papaparse";
import sample from "./sample";

export function getStats() {
  Papa.parse(sample, {
    complete: function(results) {
      console.log("Finished:", results.data);
    }
  });
}
