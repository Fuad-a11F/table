import { Button, Card, Grid, TextField } from "@mui/material";

const AIForm = () => {
  return (
    <Card sx={{ p: 2, mt: 2 }}>
      <TextField
        id="filled-multiline-flexible"
        label="Введите вопрос"
        multiline
        rows={4}
        variant="filled"
        sx={{ width: "100%" }}
      />

      <Grid container justifyContent="flex-end">
        <Grid item>
          <Button variant="contained" sx={{ mt: 2 }}>
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AIForm;
