const data = {
  title: "ProPublica’s Dollars for Docs Data",
  metadata: {
    filename: "201612v1-docdollars-product_payments",
    format: "csv",
    url: "www.google.com",
    domain: "healthcare",
    keywords: "Physicians, drugs, medicine, pharmaceutical, transactions",
    type: "tabular",
    rows: 32838247,
    columns: 18,
    missing: "%",
    license: "cc"
  }

  // Source	Centers for Medicare and Medicaid Services
  // Source contact info (maybe better distinction between source and author?)	" U.S. Centers for Medicare &
  // Medicaid Services. 7500 Security Boulevard, Baltimore, MD 21244"
  // Source email	openpayments@cms.hhs.gov
  // Source website	https://www.cms.gov/OpenPayments/
  // Author	Propublica
  // Author contact info	"ProPublica
  // 155 Avenue of the Americas
  // 13th Floor
  // New York, NY 10013"
  // author email	data.store@propublica.org
  // release date	January 2017
  // Dates Covered	August 2013 to December 2015
  // Description	This is the data used in ProPublica’s Dollars for Docs news application. It is primarily based on CMS’s Open Payments data, but we have added a few features. ProPublica has standardized drug, device and manufacturer names, and made a flattened table (product_payments) that allows for easier aggregating payments associated with each drug/device. In [1], one payment record can be attributed to up to five different drugs or medical devices. This table flattens the payments out so that each drug/device related to each payment gets its own line.
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
