import Logo from "@/src/components/Logo";
import styles from "./index.module.css";
import React from "react";
import Link from "next/link";
import Input from "@/src/components/Input";

function SignIn() {
  return (
    <div className={styles.container_wrapper}>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.form_header}>
            <Logo />
            <div>
              <h1>Olá, seja bem-vindo!</h1>
              <h4>Insira seus dados abaixo para continuar!</h4>
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
            <Link href="/forgotpassword">Esqueci minha senha</Link>
          </div>
          <div className={styles.form_submit}>
            <button type="submit">Sign In</button>
            or
            <br />
            Não tem uma conta?
            <Link href="/forgotpassword">Criar uma nova</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
