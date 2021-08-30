import React, { Component, useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import axios from "axios";

export const Table = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      //   console.log(data.data.slice(0, 10));
      setdata(data.data.slice(0, 10));
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  //   console.log(data);
  //   const data = [
  //     { name: "rishabh", age: 22 },
  //     { name: "gaur", age: 21 },
  //     { name: "prince", age: 23 },
  //     { name: "sikka", age: 22 },
  //   ];
  //   getData();
  //   console.log(data2);

  const column = [
    { headerName: "ID", field: "id", checkboxSelection: true },
    { headerName: "Title", field: "title" },
    { headerName: "Body", field: "body" },
  ];

  const defaultColDef = {
    sortable: true,
    flex: 1,
    floatingfilter: true,
    filter: true,
    editable: true,
  };
  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: 1000 }}>
      <AgGridReact
        rowData={data}
        columnDefs={column}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};
