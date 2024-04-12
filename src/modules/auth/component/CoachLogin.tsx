import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { Typography } from "@mui/joy";

export interface FormData {
  email: string;
  password: string;
}

const CoachLogin = ({ setState }) => {
  const { control, handleSubmit } = useForm<FormData>();

  const formSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Typography level="h5" component={"h2"} sx={{ mb: 1 }}>
        Логин
      </Typography>

      <form onSubmit={handleSubmit(formSubmit)}>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          rules={{ required: true }}
          render={({ field, formState: { errors } }) => {
            return (
              <div>
                <TextField
                  label="Введите почту"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  error={errors?.email}
                  {...field}
                />
              </div>
            );
          }}
        />

        <Controller
          control={control}
          name="password"
          defaultValue=""
          rules={{ required: true }}
          render={({ field, formState: { errors } }) => {
            return (
              <div>
                <TextField
                  label="Введите пароль"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  error={errors?.password}
                  {...field}
                />
              </div>
            );
          }}
        />

        <Button onClick={() => setState(true)}>
          Если нет аккаунта - создайте
        </Button>

        <Button type={"submit"} variant="contained">
          Создать
        </Button>
      </form>
    </>
  );
};

export default CoachLogin;
