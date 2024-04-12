import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { Typography } from "@mui/joy";
import { useRegistrationUser } from "../../../api/auth/useRegistration";

export interface FormData {
  email: string;
  login: string;
  password: string;
}

const CoachRegistration = ({ setState }) => {
  const { control, handleSubmit } = useForm<FormData>();
  const { mutate } = useRegistrationUser();

  const formSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    mutate();
  };

  return (
    <>
      <Typography level="h5" component={"h2"} sx={{ mb: 1 }}>
        Регистрация
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

        <Button onClick={() => setState(false)}>
          Уже есть аккаунт - войдите
        </Button>

        <Button type={"submit"} variant="contained">
          Создать
        </Button>
      </form>
    </>
  );
};

export default CoachRegistration;
