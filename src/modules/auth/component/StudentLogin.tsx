import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";

interface FormData {
  login: string;
  roomName: string;
}

const StudentLogin = () => {
  const { control, handleSubmit } = useForm<FormData>();

  const formSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Typography level="h5" component={"h2"} sx={{ mb: 1 }}>
        Логин для ученика
      </Typography>

      <form onSubmit={handleSubmit(formSubmit)}>
        <Controller
          control={control}
          name="login"
          defaultValue=""
          rules={{ required: true }}
          render={({ field, formState: { errors } }) => {
            return (
              <div>
                <TextField
                  label="Введите логин"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  error={errors?.login}
                  {...field}
                />
              </div>
            );
          }}
        />

        <Controller
          control={control}
          name="email"
          defaultValue=""
          rules={{ required: true }}
          render={({ field, formState: { errors } }) => {
            return (
              <div>
                <TextField
                  label="Введите название комнаты"
                  variant="outlined"
                  error={errors?.roomName}
                  sx={{ width: "100%" }}
                  {...field}
                />
              </div>
            );
          }}
        />

        <Button type={"submit"} variant="contained">
          Создать
        </Button>
      </form>
    </>
  );
};

export default StudentLogin;
