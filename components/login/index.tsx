"use client";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormField } from "../text-field";
import { useSubmit } from "@/hooks/useSubmit";

export function Login() {
  const { submit } = useSubmit();
  const { control, handleSubmit } = useForm({
    defaultValues: { uname: "", pass: "" },
  });

  return (
    <Stack alignItems={"center"} padding={3}>
      <Paper
        component="form"
        onSubmit={handleSubmit(submit)}
        elevation={12}
        className="flex min-w-[500px] max-w-[600px] flex-col gap-3 p-8"
      >
        <Typography variant="h4" mb={2} role="header">
          Login
        </Typography>
        <FormField
          control={control}
          name="uname"
          rules={{ required: true }}
          type="text"
          autoFocus
          label="User Name"
          fullWidth
        />
        <FormField
          control={control}
          name="pass"
          rules={{
            required: true,
          }}
          type="password"
          label="Password"
          fullWidth
        />
        <Button variant="contained" type="submit">
          submit
        </Button>
      </Paper>
    </Stack>
  );
}
