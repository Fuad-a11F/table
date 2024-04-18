import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import useTrainingStore from "../../../modules/main/store/useTrainingStore.ts";
import useTablesStore from "../../../modules/main/store.ts";
import {useState} from "react";
import * as XLSX from 'xlsx'

interface FormData {
  foodTable: boolean;
  trainingTable: boolean;
}

const Export = () => {
  const { control, handleSubmit } = useForm<FormData>();
const [data, setData] = useState<any>()
  const { deleteAllData, trainingData } = useTrainingStore();
  const { foodTable, trainingTable } = useTablesStore();

  const onSubmit = (data) => {
    // Выбираем формат экспорта (CSV, Excel и т. д.)
    const exportParams = {
      fileName: "exportedData", // Имя файла
      sheetName: "Sheet1", // Имя листа (только для Excel)
    };

    console.log(trainingTable.api);

    trainingTable?.api.exportDataAsCsv(exportParams);
    foodTable?.api.exportDataAsCsv(exportParams);

    // gridOptions.api.exportDataAsExcel(exportParams); // для экспорта в Excel
    // gridOptions.api.exportDataAsExcelCustom(exportParams); // для дополнительных настроек Excel
    // gridOptions.api.exportDataAsPdf(exportParams); // для экспорта в PDF
    // gridOptions.api.exportDataAsJson(exportParams); // для экспорта в JSON
  };

  const handleFielUpload = (e) => {
      const reader = new FileReader()
      reader.readAsBinaryString(e.target.files[0])
      reader.onload  = (e) => {
          const data = e.target.result
          const workBook = XLSX.read(data, {type: 'binary'})
          const sheetName = workBook.SheetNames[0]
          const sheet = workBook.Sheets[sheetName]
          const parsedData = XLSX.utils.sheet_to_json(sheet)
          setData(parsedData)
      }
  };

  return (
    <Card sx={{ p: 2, mt: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Controller
            control={control}
            name="foodTable"
            defaultValue=""
            render={({ field }) => {
              return (
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Таблица питания"
                  {...field}
                />
              );
            }}
          />
          <Controller
            control={control}
            name="trainingTable"
            defaultValue=""
            render={({ field }) => {
              return (
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Таблица тренировок"
                  {...field}
                />
              );
            }}
          />
        </FormGroup>

        <Button variant="contained" type={"submit"} sx={{ mt: 2 }}>
          Экспортировать таблицы
        </Button>
      </form>

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        disabled={trainingData.length === 0}
        onClick={deleteAllData}
      >
        Удалить все
      </Button>

        <input type="file" accept={'.xlsx, .xls'} onChange={handleFielUpload}/>

      <Button variant="contained" sx={{ mt: 2 }} onClick={clearAllTables}>
        Загрузить свою таблицу
      </Button>
    </Card>
  );
};

export default Export;
