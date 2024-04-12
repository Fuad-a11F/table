import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button, Grid } from "@mui/material";
import useTrainingStore from "../store/useTrainingStore";
import "./style.css";

const TrainingProgram = () => {
  const { trainingData, tableTrainingColumn, addTrainingData } =
    useTrainingStore();

  console.log(trainingData);
  const groupRowAggNodes = (nodes) => {
    const result = {};

    nodes.forEach((node) => {
      if (node.group) {
        result[node.key] = {
          element: node.key,
          count: node.allChildren.length,
        };
      }
    });

    return result;
  };
  const defaultColDef = {
    sortable: true,
    filter: true,
    flex: 1,
  };
  return (
    <div>
      <div
        className="ag-theme-alpine-dark"
        style={{ height: 500, width: "100%" }}
      >
        <AgGridReact
          rowData={trainingData}
          columnDefs={[
            { headerName: "Element", field: "make" },
            { headerName: "Count", field: "count" },
          ]}
          // groupRowAggNodes={groupRowAggNodes}
          defaultColDef={defaultColDef}
          rowSelection={"multiple"}
          autoGroupColumnDef={{
            headerName: "Element",
            field: "element",
            cellRenderer: "agGroupCellRenderer",
            cellRendererParams: {
              checkbox: true,
            },
          }}
          // onRowSelected={(e) => console.log(e.data)}
          // onCellClicked={(e) => console.log(e.data)}
          // onCellValueChanged={() => alert("dsf")}
          // onRowClicked={(e) => console.log(e.data)}
          // onRowSelected={(e) => console.log(e.data)}
          onCellContextMenu={(e) => console.log(e.data)}
          // onSelectionChanged={(e) => console.log(e)}
        />
      </div>

      <Grid container justifyContent="center" gap={2}>
        <Grid item>
          <Button variant="contained" sx={{ mt: 4 }} onClick={addTrainingData}>
            Добавить
          </Button>
        </Grid>

        <Grid item>
          <Button variant="contained" disabled={true} sx={{ mt: 4 }}>
            Объединить в суперсерию
          </Button>
        </Grid>

        <Grid item>
          <Button variant="contained" disabled={true} sx={{ mt: 4 }}>
            Объединить в одно упражнение
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default TrainingProgram;
