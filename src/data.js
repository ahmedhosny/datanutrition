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
        stats: []
      },
      {
        name: "applicable_manufacturer_or_applicable_gpo_making_payment_id",
        type: "number",
        stats: []
      },
      {
        name: "date_of_payment",
        type: "date",
        stats: []
      },
      {
        name: "general_transaction_id",
        type: "number",
        stats: []
      },
      {
        name: "program_year",
        type: "number",
        stats: []
      }
    ],
    nominal: {},
    continuous: {},
    discrete: {}
  }

  //   product_name: {
  //     description:
  //       "Derived from the 'name_of_associated_covered_drug_or_biologicalX' field (for drugs) or 'name_of_associated_covered_device_or_medical_supplyX' field (for medical devices). Where possible,multiple versions of the same product are converted to the same product_name (i.e. records for 'Zorvolex 65mg' and 'Zorvolex 35mg' will be converted to 'Zorvolex'). The original value is contained in original_product_name",
  //     type: "nominal"
  //   },
  //   original_product_name: {
  //     description:
  //       "A copy of the original name_of_associated_covered_drug_or_biologicalX' field (for drugs) or 'name_of_associated_covered_device_or_medical_supplyX' field (for medical devices)",
  //     type: "nominal"
  //   },
  //   product_ndc: {
  //     description:
  //       "If the product is a drug, this a copy of the original 'ndc_of_associated_covered_drug_or_biologicalX' field",
  //     type: "nominal"
  //   },
  //   product_is_drug: {
  //     description:
  //       "'t' if the product is a drug (contained in a 'name_of_associated_covered_drug_or_biologicalX' field). 'f' if the product is a medical device (contained in a 'name_of_associated_covered_device_or_medical_supplyX' field)",
  //     type: "nominal"
  //   },
  //   payment_has_many: {
  //     description:
  //       "'t' if the original payment record included data on more than one drug or device, i.e. 'name_of_associated_covered_drug_or_biological1' and 'name_of_associated_covered_drug_or_biological2', 'name_of_associated_covered_device_or_medical_supply1' and 'name_of_associated_covered_device_or_medical_supply2', etc.",
  //     type: "nominal"
  //   },
  //   teaching_hospital_id: {
  //     description:
  //       "Open Payments system-generated unique identifier of the teaching hospital receiving the payment or other transfer of value",
  //     type: "nominal"
  //   },
  //   physician_profile_id: {
  //     description:
  //       "ID of the physician receiving the payment or other transfer of value",
  //     type: "nominal"
  //   },
  //   recipient_state: {
  //     description:
  //       "The state or territory abbreviation of the primary business address of the physician or teaching hospital or non-covered recipient entity receiving the payment or other transfer of value if the primary business address is in the United States",
  //     type: "nominal"
  //   },
  //   applicable_manufacturer_or_applicable_gpo_making_payment_name: {
  //     description:
  //       "Textual proper name of the applicable manufacturer or applicable GPO making the payment or other transfer of value. This field has been standardized to eliminate different names attributable solely to punctuation",
  //     type: "nominal"
  //   },
  //   teaching_hospital_ccn: {
  //     description:
  //       "A unique identifying number (CMS Certification Number) of the Teaching Hospital receiving the payment or other transfer of value",
  //     type: "nominal"
  //   },
  //   product_slug: {
  //     description:
  //       "Used internally at ProPublica for web display on the Dollars for Docs app. You can pull up the corresponding Dollars for Docs page for a product by appending product_slug to https://projects.propublica.org/docdollars/products/, i.e. https://projects.propublica.org/docdollars/products/device-dental-cabinetry",
  //     type: "nominal"
  //   },
  //   total_amount_of_payment_usdollars: {
  //     description:
  //       "U.S. dollar amount of payment or other transfer of value to recipient (manufacturer must convert to dollar currency if necessary)",
  //     type: "continuous"
  //   },
  //   number_of_payments_included_in_total_amount: {
  //     description:
  //       "The number of discrete payments being reported in the 'Total Amount of Payment' data element",
  //     type: "discrete"
  //   }
  // }

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
