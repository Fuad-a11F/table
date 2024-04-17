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
  isShow: boolean;
}

const Online = () => {
  const { control, handleSubmit, watch, setValue } = useForm<FormData>();

  const isShow = watch("isShow");
  const roomName = watch("roomName");

  const onSubmit = (data) => {
    setValue("isShow", true);
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

      {!isShow && (
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
              <Button
                variant="contained"
                type={"submit"}
                sx={{ height: "100%" }}
              >
                Ок
              </Button>
            </Grid>
          </Grid>
        </form>
      )}

      {isShow && (
        <Grid
          container
          justifyContent="flex-end"
          sx={{ margin: "2.4ch 0", color: "green" }}
        >
          <Grid item>
            <Typography>Комната {roomName} успешно создана!</Typography>
          </Grid>
        </Grid>
      )}
    </Card>
  );
};

export default Online;
