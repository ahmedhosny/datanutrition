import React, { Component } from "react";
import { makeData } from "./utils";
import ReactTable from "react-table";
import "react-table/react-table.css";
import glamorous from "glamorous";
import Typo from "./Typo";
import Line from "./Line";
import _ from "lodash";

class Table extends Component {
  constructor() {
    super();
  }
  render() {
    const { title, data } = this.props;
    const GReactTable = glamorous(ReactTable)({
      border: "0px !important"
    });
    let columns = [];
    _.forEach(data[0], function(value, key) {
      columns.push({
        Header: key,
        accessor: key
      });
    });
    return (
      <div>
        <Typo content={title} size={3} />
        <Line thickness={3} />
        <GReactTable
          data={data}
          showPagination={false}
          showPaginationTop={false}
          showPaginationBottom={false}
          columns={columns}
          defaultPageSize={data.length}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
export default Table;
