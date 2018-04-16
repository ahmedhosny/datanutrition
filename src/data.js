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
    missing: "%",
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
