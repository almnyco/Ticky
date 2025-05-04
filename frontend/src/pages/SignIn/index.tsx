"use client";

import React from "react";
import Link from "next/link";
import styles from "./index.module.css";
import Logo from "@/src/components/Logo";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/src/components/Input";
import Button from "@/src/components/Button";
import AuthProvider from "@/src/providers/AuthProvider";

interface FormData {
  email: string;
  password: string;
}

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const { signin } = AuthProvider();

  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState(undefined);
  const [fieldErrors, setFieldError] = React.useState<{
    email?: string[] | undefined;
    password?: string[] | undefined;
  }>({
    email: undefined,
    password: undefined,
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setFieldError({ email: undefined, password: undefined });
    setError(undefined);

    const res = await signin(data.email, data.password);

    if (res?.errors || res?.error) {
      if (res?.errors) setFieldError(res.errors);
      if (res?.error) setError(res?.error);
      return;
    }
  };

  return (
    <div className={styles.form_wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.form_header}>
          <Logo />
          <div className={styles.form_text_header}>
            <h1 className={styles.form_text_title}>Olá, seja bem-vindo!</h1>
            <h4 className={styles.form_text_subtitle}>
              Insira seus dados abaixo para continuar!
            </h4>
          </div>
        </div>
        <div className={styles.form_inputs}>
          <Input
            id="email"
            type="email"
            label="E-mail"
            // name="email"
            // onChange={(e) =>
            //   setCredentials({ ...credentials, email: e.target.value })
            // }
            // value={credentials.email}
            // errors={fieldErrors?.email}
            {...register("email", { required: true })}
            placeholder="Insira seu e-mail"
          />
          <Input
            id="password"
            label="Senha"
            type="password"
            // name="password"
            // onChange={(e) =>
            //   setCredentials({ ...credentials, password: e.target.value })
            // }
            // value={credentials.password}
            // errors={fieldErrors.password}
            {...register("password", { required: true })}
            placeholder="Insira sua senha"
          />
          <Link href="/forgotpassword" className={styles.form_text}>
            <span>Esqueci minha senha</span>
          </Link>

          {error && <p className={styles.form_error}>{error}</p>}
        </div>
        <div className={styles.form_submit}>
          <Button type="submit">Sign In</Button>
          <p className={styles.form_text}>Ou</p>
          <p className={styles.form_text}>
            Ainda nao possui uma conta?{" "}
            <Link href="/signup" className={styles.form_text}>
              <span>Criar uma nova</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
