"use client";

import React, { useState } from "react";
import Link from "next/link";
// import styles from "./index.module.css";
import styles from "@/src/styles/auth.page.module.css";

import Logo from "@/src/components/Logo";
import Input from "@/src/components/Input";
import Button from "@/src/components/Button";
import { CreateUserBase } from "@/src/lib/user/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthProvider from "@/src/providers/AuthProvider";

interface FormData {
  name: string;
  email: string;
  lastname: string;
  password: string;
  password_repeat: string;
}

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(CreateUserBase),
    mode: "onBlur",
  });
  const [error, setError] = useState(undefined);
  const { signup } = AuthProvider();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setError(undefined);

    const res = await signup(data);

    if (res?.error) {
      if (res?.error) setError(res?.error);
      return;
    }
  };

  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_header}>
        <Logo />
        <div className={styles.form_text_header}>
          <h1 className={styles.form_text_title}>Criar uma nova conta</h1>
          <h4 className={styles.form_text_subtitle}>
            Preencha os campos abaixo para continuar!
          </h4>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form_inputs}>
          <div className={styles.form_input_group}>
            <Input
              type="text"
              label="Nome"
              placeholder="Insira seu nome"
              error={errors.name?.message}
              {...register("name", { required: true })}
            />
            <Input
              type="lastname"
              label="Sobrenome"
              error={errors.lastname?.message}
              placeholder="Insira seu sobrenome"
              {...register("lastname", { required: true })}
            />
          </div>
          <Input
            type="email"
            label="E-mail"
            fullWidth
            error={errors.email?.message}
            placeholder="Insira seu email"
            {...register("email", { required: true })}
          />
          <div className={styles.form_input_group}>
            <Input
              type="password"
              label="Senha"
              min={6}
              error={errors.password?.message}
              placeholder="Insira sua senha"
              {...register("password", { required: true })}
            />
            <Input
              type="password"
              label="Repita sua senha"
              min={6}
              error={errors.password_repeat?.message}
              placeholder="Insira sua senha novamente"
              {...register("password_repeat", { required: true })}
            />
          </div>

          {error && <p className={styles.form_error}>{error}</p>}
        </div>
        <div className={styles.form_submit}>
          <Button type="submit" isLoading={isSubmitting}>
            Sign Up
          </Button>
          <p className={styles.form_text}>Ou</p>
          <p className={styles.form_text}>
            Já possuí uma conta?{" "}
            <Link href="/signin" className={styles.form_text}>
              <span>Clique para acessar</span>
            </Link>
          </p>
        </div>
      </form>
      {/* <div className={styles.carousel} /> */}
    </div>
  );
}

export default SignUp;
