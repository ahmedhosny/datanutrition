const data = {
  title: "ProPublica’s Dollars for Docs Data",
  metadata: {
    filename: "201612v1-docdollars-product_payments",
    format: "csv",
    url: "https://projects.propublica.org/docdollars/",
    domain: "healthcare",
    keywords: "Physicians, drugs, medicine, pharmaceutical, transactions",
    type: "tabular",
    rows: 500,
    columns: 18,
    missing: "5.2%",
    license: "cc",
    released: "JAN 2017",
    range: { from: "AUG 2013", to: "DEC 2015" },
    description:
      "This is the data used in ProPublica’s Dollars for Docs news application. It is primarily based on CMS’s Open Payments data, but we have added a few features. ProPublica has standardized drug, device and manufacturer names, and made a flattened table (product_payments) that allows for easier aggregating payments associated with each drug/device. In [1], one payment record can be attributed to up to five different drugs or medical devices. This table flattens the payments out so that each drug/device related to each payment gets its own line."
  },
  provenance: {
    source: {
      name: "U.S. Centers for Medicare & Medicaid Services",
      url: "https://www.cms.gov/OpenPayments/",
      email: "openpayments@cms.hhs.gov"
    },
    author: {
      name: "Propublica",
      url: "https://www.propublica.org/datastore/",
      email: "data.store@propublica.org"
    }
  },
  variables: {
    id:
      "A unique ID number for this payment & product combination. This is assigned by ProPublica for internal use",
    applicable_manufacturer_or_applicable_gpo_making_payment_id:
      "ID of the applicable manufacturer or submitting applicable GPO making the payment or other transfer of value",
    date_of_payment:
      "If a singular payment, then this is the actual date the payment was issued; if a series of payments or an aggregated set of payments, this is the date of the first payment to the covered recipient in this program year",
    general_transaction_id:
      "System-assigned identifier to the general transaction at the time of submission",
    program_year:
      "The calendar year for which the payment is reported in Open Payments",
    product_name:
      "Derived from the 'name_of_associated_covered_drug_or_biologicalX' field (for drugs) or 'name_of_associated_covered_device_or_medical_supplyX' field (for medical devices). Where possible,multiple versions of the same product are converted to the same product_name (i.e. records for 'Zorvolex 65mg' and 'Zorvolex 35mg' will be converted to 'Zorvolex'). The original value is contained in original_product_name",
    original_product_name:
      "A copy of the original name_of_associated_covered_drug_or_biologicalX' field (for drugs) or 'name_of_associated_covered_device_or_medical_supplyX' field (for medical devices)",
    product_ndc:
      "If the product is a drug, this a copy of the original 'ndc_of_associated_covered_drug_or_biologicalX' field",
    product_is_drug:
      "'t' if the product is a drug (contained in a 'name_of_associated_covered_drug_or_biologicalX' field). 'f' if the product is a medical device (contained in a 'name_of_associated_covered_device_or_medical_supplyX' field)",
    payment_has_many:
      "'t' if the original payment record included data on more than one drug or device, i.e. 'name_of_associated_covered_drug_or_biological1' and 'name_of_associated_covered_drug_or_biological2', 'name_of_associated_covered_device_or_medical_supply1' and 'name_of_associated_covered_device_or_medical_supply2', etc.",
    teaching_hospital_id:
      "Open Payments system-generated unique identifier of the teaching hospital receiving the payment or other transfer of value",
    physician_profile_id:
      "ID of the physician receiving the payment or other transfer of value",
    recipient_state:
      "The state or territory abbreviation of the primary business address of the physician or teaching hospital or non-covered recipient entity receiving the payment or other transfer of value if the primary business address is in the United States",
    applicable_manufacturer_or_applicable_gpo_making_payment_name:
      "Textual proper name of the applicable manufacturer or applicable GPO making the payment or other transfer of value. This field has been standardized to eliminate different names attributable solely to punctuation",
    teaching_hospital_ccn:
      "A unique identifying number (CMS Certification Number) of the Teaching Hospital receiving the payment or other transfer of value",
    product_slug:
      "Used internally at ProPublica for web display on the Dollars for Docs app. You can pull up the corresponding Dollars for Docs page for a product by appending product_slug to https://projects.propublica.org/docdollars/products/, i.e. https://projects.propublica.org/docdollars/products/device-dental-cabinetry",
    total_amount_of_payment_usdollars:
      "U.S. dollar amount of payment or other transfer of value to recipient (manufacturer must convert to dollar currency if necessary)",
    number_of_payments_included_in_total_amount:
      "The number of discrete payments being reported in the 'Total Amount of Payment' data element"
  },
  statistics: {
    ordinal: [
      {
        name: "id",
        type: "number",
        count: 500,
        uniqueEntries: "488 including missing",
        mostFrequent: "missing value (13)",
        leastFrequent: "multiple detected",
        missing: "2.60%"
      },
      {
        name: "applicable_manufacturer_or_applicable_gpo_making_payment_id",
        type: "number",
        count: 500,
        uniqueEntries: "4",
        mostFrequent: "100000000232 (417)",
        leastFrequent: "multiple detected",
        missing: "0%"
      },
      {
        name: "date_of_payment",
        type: "date",
        count: 500,
        uniqueEntries: "213 including missing",
        mostFrequent: "missing value (27)",
        leastFrequent: "multiple detected",
        missing: "5.40%"
      },
      {
        name: "general_transaction_id",
        type: "number",
        count: 500,
        uniqueEntries: "467 including missing",
        mostFrequent: "missing value (34)",
        leastFrequent: "multiple detected",
        missing: "6.80%"
      },
      {
        name: "program_year",
        type: "number",
        count: 500,
        uniqueEntries: "2 including missing",
        mostFrequent: "2014 (495)",
        leastFrequent: "missing value (5)",
        missing: "1.00%"
      }
    ],
    nominal: [
      {
        name: "product_name",
        type: "string",
        count: 500,
        uniqueEntries: "16 including missing",
        mostFrequent: "Xarelto (200)",
        leastFrequent: "Aciphex (1)",
        missing: "3.20%"
      },
      {
        name: "original_product_name",
        type: "string",
        count: 500,
        uniqueEntries: "15",
        mostFrequent: "Xarelto (212)",
        leastFrequent: "Aciphex (1)",
        missing: "0%"
      },
      {
        name: "product_ndc",
        type: "number",
        count: 500,
        uniqueEntries: "21 including missing",
        mostFrequent: "5045857810 (201)",
        leastFrequent: "multiple detected",
        missing: "5.00%"
      },
      {
        name: "product_is_drug",
        type: "boolean",
        count: 500,
        uniqueEntries: "2 including missing",
        mostFrequent: "t (492)",
        leastFrequent: "missing value (8)",
        missing: "1.60%"
      },
      {
        name: "payment_has_many",
        type: "boolean",
        count: 500,
        uniqueEntries: "3 including missing",
        mostFrequent: "f (267)",
        leastFrequent: "missing value (29)",
        missing: "5.80%"
      },
      {
        name: "teaching_hospital_id",
        type: "number",
        count: 500,
        uniqueEntries: "2 including missing",
        mostFrequent: "0 (464)",
        leastFrequent: "missing value (36)",
        missing: "7.20%"
      },
      {
        name: "physician_profile_id",
        type: "number",
        count: 500,
        uniqueEntries: "230 including missing",
        mostFrequent: "missing value (32)",
        leastFrequent: "multiple detected",
        missing: "6.40%"
      },
      {
        name: "recipient_state",
        type: "string",
        count: 500,
        uniqueEntries: "40",
        mostFrequent: "CA (56)",
        leastFrequent: "multiple detected",
        missing: "0%"
      },
      {
        name: "applicable_manufacturer_or_applicable_gpo_making_payment_name",
        type: "string",
        count: 500,
        uniqueEntries: "5 including missing",
        mostFrequent: "Janssen Pharmaceuticals, Inc (386)",
        leastFrequent: "multiple detected",
        missing: "7.00%"
      },
      {
        name: "teaching_hospital_ccn",
        type: "number",
        count: 500,
        uniqueEntries: "2 including missing",
        mostFrequent: "0 (481)",
        leastFrequent: "missing value (19)",
        missing: "3.80%"
      },
      {
        name: "product_slug",
        type: "string",
        count: 500,
        uniqueEntries: "15 including missing",
        mostFrequent: "drug-xarelto (196)",
        leastFrequent: "drug-aciphex (1)",
        missing: "8.20%"
      }
    ],
    continuous: [
      {
        name: "total_amount_of_payment_usdollars",
        type: "number",
        count: 500,
        min: 0.14,
        median: "14.00",
        max: 5000,
        mean: "134.21",
        standardDeviation: "501.99",
        missing: "9.40%",
        zeros: "0%"
      }
    ],
    discrete: [
      {
        name: "number_of_payments_included_in_total_amount",
        type: "number",
        count: 500,
        min: 1,
        median: "1.00",
        max: 1,
        mean: "1.00",
        standardDeviation: "0.00",
        missing: "4.80%",
        zeros: "0%"
      }
    ]
  },
  probabilistic: {
    eliquis: {
      CA: 0.102,
      NY: 0.074,
      TX: 0.062,
      OH: 0.06,
      FL: 0.054,
      PA: 0.052,
      NC: 0.044,
      IL: 0.042,
      MI: 0.042,
      AL: 0.036,
      GA: 0.032,
      VA: 0.03,
      AZ: 0.026,
      IN: 0.024,
      MD: 0.024,
      NJ: 0.02,
      OK: 0.02,
      MA: 0.02,
      KY: 0.02,
      SC: 0.018,
      MO: 0.016,
      TN: 0.016,
      AR: 0.014,
      CO: 0.014,
      LA: 0.014,
      CT: 0.014,
      WA: 0.01,
      WV: 0.01,
      KS: 0.01,
      MS: 0.01,
      HI: 0.008,
      OR: 0.008,
      NM: 0.006,
      NV: 0.006,
      PR: 0.006,
      MT: 0.004,
      AK: 0.004,
      UT: 0.004,
      WI: 0.004,
      IA: 0.004,
      ME: 0.004,
      VT: 0.002,
      MN: 0.002,
      ID: 0.002,
      NE: 0.002,
      DC: 0.002,
      SD: 0.002
    },
    enbrel: {
      CA: 0.098,
      TX: 0.07,
      FL: 0.07,
      NY: 0.068,
      OH: 0.068,
      IL: 0.046,
      NJ: 0.042,
      PA: 0.042,
      IN: 0.036,
      TN: 0.03,
      WA: 0.026,
      OK: 0.024,
      AZ: 0.024,
      MI: 0.024,
      GA: 0.022,
      NC: 0.022,
      LA: 0.02,
      SC: 0.02,
      MD: 0.02,
      MA: 0.018,
      WV: 0.018,
      VA: 0.018,
      AL: 0.018,
      MS: 0.018,
      MO: 0.012,
      KY: 0.012,
      NM: 0.012,
      CT: 0.01,
      KS: 0.01,
      CO: 0.008,
      AR: 0.008,
      IA: 0.008,
      RI: 0.006,
      DC: 0.006,
      WI: 0.006,
      NH: 0.004,
      NV: 0.004,
      DE: 0.004,
      HI: 0.004,
      PR: 0.004,
      UT: 0.004,
      ID: 0.002,
      VT: 0.002,
      AK: 0.002,
      MT: 0.002,
      ME: 0.002,
      NE: 0.002,
      MN: 0.002,
      SD: 0.002
    },
    invokana: {
      CA: 0.12,
      TX: 0.082,
      FL: 0.068,
      NY: 0.066,
      PA: 0.05,
      OH: 0.048,
      NJ: 0.044,
      MI: 0.042,
      IL: 0.042,
      NC: 0.03,
      VA: 0.026,
      TN: 0.026,
      LA: 0.024,
      KY: 0.022,
      MO: 0.022,
      MA: 0.02,
      IN: 0.02,
      CT: 0.02,
      MD: 0.02,
      SC: 0.02,
      AL: 0.016,
      GA: 0.016,
      WI: 0.014,
      AZ: 0.014,
      AR: 0.014,
      KS: 0.012,
      CO: 0.01,
      OK: 0.01,
      WA: 0.01,
      MS: 0.008,
      HI: 0.008,
      IA: 0.006,
      WV: 0.006,
      PR: 0.006,
      NV: 0.006,
      ID: 0.004,
      DC: 0.004,
      DE: 0.004,
      UT: 0.004,
      NE: 0.004,
      RI: 0.002,
      NM: 0.002,
      OR: 0.002,
      NH: 0.002,
      MN: 0.002,
      ME: 0.002
    },
    xarelto: {
      CA: 0.122,
      TX: 0.084,
      NY: 0.07,
      NJ: 0.06,
      OH: 0.054,
      FL: 0.042,
      MI: 0.036,
      IL: 0.034,
      PA: 0.034,
      MD: 0.03,
      SC: 0.028,
      VA: 0.026,
      GA: 0.024,
      TN: 0.024,
      NC: 0.024,
      MO: 0.024,
      AZ: 0.022,
      OK: 0.02,
      MA: 0.02,
      CT: 0.018,
      IN: 0.018,
      WA: 0.016,
      KY: 0.016,
      AL: 0.014,
      HI: 0.014,
      ME: 0.01,
      KS: 0.01,
      DE: 0.01,
      LA: 0.01,
      AR: 0.008,
      WI: 0.008,
      CO: 0.008,
      OR: 0.008,
      MS: 0.006,
      IA: 0.006,
      NH: 0.006,
      WV: 0.006,
      UT: 0.006,
      DC: 0.004,
      WY: 0.004,
      NV: 0.004,
      ND: 0.004,
      RI: 0.004,
      PR: 0.004
    }
  },
  groundtruth: {
    // total_spend
    total_amount_of_payment_usdollars: {
      total_population: 0.133329,
      White_alone: 0.207917,
      Black_or_African_American_alone: -0.033454,
      American_Indian_and_Alaska_Native_alone: 0.003296,
      Asian_alone: 0.066814,
      Native_Hawaiian_and_Other_Pacific_Islander_alone: 0.019523,
      Some_Other_Race_alone: -0.004408,
      Two_or_More_Races: 0.109671,
      Hispanic_or_Latino: 0.006774,
      Urban: 0.143797,
      Rural: -0.117904,
      White_alone_fraction: 0.058516,
      Black_or_African_American_alone_fraction: -0.06152,
      American_Indian_and_Alaska_Native_alone_fraction: -0.064703,
      Asian_alone_fraction: 0.049566,
      Native_Hawaiian_and_Other_Pacific_Islander_alone_fraction: -0.033035,
      Some_Other_Race_alone_fraction: -0.087694,
      Two_or_More_Races_fraction: -0.014509,
      Hispanic_or_Latino_fraction: -0.086743,
      Urban_fraction: 0.16001,
      Rural_fraction: -0.16001
    },
    spend_per_person: {
      total_population: -0.103503,
      White_alone: -0.080727,
      Black_or_African_American_alone: -0.060158,
      American_Indian_and_Alaska_Native_alone: -0.096261,
      Asian_alone: -0.049087,
      Native_Hawaiian_and_Other_Pacific_Islander_alone: -0.053541,
      Some_Other_Race_alone: -0.08251,
      Two_or_More_Races: -0.101051,
      Hispanic_or_Latino: -0.085147,
      Urban: -0.095544,
      Rural: -0.053595,
      White_alone_fraction: 0.080405,
      Black_or_African_American_alone_fraction: -0.016709,
      American_Indian_and_Alaska_Native_alone_fraction: -0.029631,
      Asian_alone_fraction: -0.001635,
      Native_Hawaiian_and_Other_Pacific_Islander_alone_fraction: -0.054046,
      Some_Other_Race_alone_fraction: -0.097512,
      Two_or_More_Races_fraction: -0.092412,
      Hispanic_or_Latino_fraction: -0.100949,
      Urban_fraction: 0.011048,
      Rural_fraction: -0.011048
    }
  }

  // Caution	Do not sum the total_amount field. CMS does not split totals per drug or medical device. Instead, this table is useful for counting how many payments were attributed to a singular drug or device or which doctors were associated with which products.
  // Other warning maybe?
  // doi	some dummy id
  // references (other datasets rferenced in this label)	[1] some dummy id
  // citations (other labels where this dataset was referenced)	some dummy list
  // rational	we need to be maybe a bit more specific with the question?
  // consent	we need to be maybe a bit more specific with the question?
  // collection	?
  // entry type (or maybe a better name?)	human (ok?)
  // includes PII 	no (but what are our guidelines here?)
};
export default data;
