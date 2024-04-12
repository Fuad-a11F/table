import {
  Button,
  Card,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

export interface FormData {
  roomName: string;
}

const Online = () => {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card sx={{ p: 2 }}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography>Онлайн</Typography>
        </Grid>

        <Grid item>
          <Typography>Онлайн</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      <Grid container justifyContent="flex-start">
        <Grid item>
          <Typography>Создайте комнату для онлайн работы</Typography>
        </Grid>
      </Grid>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
          <Grid item>
            <Controller
              control={control}
              name="roomName"
              defaultValue=""
              rules={{ required: true }}
              render={({ field, formState: { errors } }) => {
                return (
                  <TextField
                    sx={{ width: "24.9ch" }}
                    label="Введите название"
                    variant="outlined"
                    error={errors?.roomName}
                    {...field}
                  />
                );
              }}
            />
          </Grid>

          <Grid item>
            <Button variant="contained" type={"submit"} sx={{ height: "100%" }}>
              Ок
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default Online;
