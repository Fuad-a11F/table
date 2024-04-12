import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

interface FormData {
  foodTable: boolean;
  trainingTable: boolean;
}

const Export = () => {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data) => {
    console.log(data);
  };

  const clearAllTables = () => {};

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

      <Button variant="contained" sx={{ mt: 2 }} onClick={clearAllTables}>
        Удалить все
      </Button>
    </Card>
  );
};

export default Export;
