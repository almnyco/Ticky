"use client";

import Logo from "@/src/components/Logo";
import styles from "./index.module.css";
import React from "react";
import Link from "next/link";
import Input from "@/src/components/Input";
import Button from "@/src/components/Button";

function SignIn() {
  return (
    <div className={styles.form_wrapper}>
      {/* <div className={styles.container}> */}
      <form className={styles.form}>
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
            type="email"
            label="E-mail"
            name="email"
            placeholder="Insira seu e-mail"
          />
          <Input
            type="password"
            label="Senha"
            name="password"
            placeholder="Insira sua senha"
          />
          <Link href="/forgotpassword" className={styles.form_text}>
            <span>Esqueci minha senha</span>
          </Link>
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
      {/* </div> */}
    </div>
  );
}

export default SignIn;
