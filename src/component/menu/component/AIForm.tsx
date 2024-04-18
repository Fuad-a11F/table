import { Button, Card, Grid, TextField } from "@mui/material";
import OpenAI from "openai";

const AIForm = () => {
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
  }

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
          <Button variant="contained" onClick={main} sx={{ mt: 2 }}>
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AIForm;
