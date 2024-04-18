import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button, Grid } from "@mui/material";
import useTrainingStore from "../store/useTrainingStore";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import ContextMenu from "../../../component/contextMenu/ContextMenu.tsx";
import useTablesStore from "../store.ts";

const TrainingProgram = () => {
  const {
    trainingData,
    tableTrainingColumn,
    addTrainingData,
    updateSelectedTrainingData,
    selectedTrainingData,
    isButtonDisabled,
  } = useTrainingStore();

  const { setTrainingTable } = useTablesStore();

  const ref = useRef();

  const [x, setX] = useState(10);
  const [y, setY] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

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
    filter: true,
    flex: 1,
  };

  const onSelectionChange = () => {
    const selectedRows = ref.current!.api.getSelectedRows();

    updateSelectedTrainingData(selectedRows);
  };

  useEffect(() => {
    setTrainingTable(ref.current);
  }, [setTrainingTable]);

  return (
    <>
      <div>
        <div
          className="ag-theme-alpine-dark"
          style={{ height: 500, width: "100%" }}
        >
          <AgGridReact
            rowData={trainingData}
            columnDefs={tableTrainingColumn}
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
            ref={ref}
            onSelectionChanged={onSelectionChange}
            // onRowSelected={(e) => console.log(e.data)}
            // onCellClicked={(e) => console.log(e.data)}
            // onCellValueChanged={() => alert("dsf")}
            // onRowClicked={(e) => console.log(e.data)}
            // onRowSelected={(e) => console.log(e.data)}
            onCellContextMenu={(e) => {
              setX(e.event!.clientX);
              setY(e.event!.clientY);
              selectedTrainingData.length > 0 && setIsOpen(true);
            }}
            // onSelectionChanged={(e) => console.log(e)}
          />
        </div>

        <Grid container justifyContent="center" gap={2}>
          <Grid item>
            <Button
              variant="contained"
              sx={{ mt: 4 }}
              onClick={addTrainingData}
              disabled={isButtonDisabled}
            >
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

      {isOpen && (
        <ContextMenu x={x} y={y} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </>
  );
};

export default TrainingProgram;
