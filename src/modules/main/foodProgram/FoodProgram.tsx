import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";

const FoodProgram = () => {
  const [rowData] = useState([]);

  const [colDefs] = useState([
    { field: "make", headerName: "Упражнение" },
    { field: "model", headerName: "Отягощение", width: 164 },
    { field: "model", headerName: "Кол-во подходов", width: 164 },
    { field: "price", headerName: "Кол-во повторений", width: 164 },
    {
      field: "electric",
      headerName: "Время отдыха",
      editable: true,
      width: 164,
    },
  ]);

  return (
    <div
      className="ag-theme-alpine-dark"
      style={{ height: 500, width: "100%" }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        // onRowSelected={(e) => console.log(e.data)}
        // onCellClicked={(e) => console.log(e.data)}
        rowSelection={"multiple"}
        // onCellValueChanged={() => alert("dsf")}
        // onRowClicked={(e) => console.log(e.data)}
        // onRowSelected={(e) => console.log(e.data)}
        onSelectionChanged={(e) => console.log(e)}
      />
    </div>
  );
};

export default FoodProgram;
