"use client";

import Logo from "@/src/components/Logo";
import styles from "./index.module.css";
import React from "react";
import Link from "next/link";
import Input from "@/src/components/Input";
import Button from "@/src/components/Button";

function SignUp() {
  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form}>
        <div className={styles.form_header}>
          <Logo />
          <div className={styles.form_text_header}>
            <h1 className={styles.form_text_title}>Criar uma nova conta</h1>
            <h4 className={styles.form_text_subtitle}>
              Preencha os campos abaixo para continuar!
            </h4>
          </div>
        </div>
        <div className={styles.form_inputs}>
          <div className={styles.form_input_group}>
            <Input
              type="text"
              label="Nome"
              name="name"
              placeholder="Insira seu nome"
            />
            <Input
              type="lastname"
              label="Sobrenome"
              name="lastname"
              placeholder="Insira seu sobrenome"
            />
          </div>
          <Input
            type="email"
            label="E-mail"
            name="email"
            placeholder="Insira seu email"
          />
          <div className={styles.form_input_group}>
            <Input
              type="password"
              label="Senha"
              name="password"
              min={6}
              placeholder="Insira sua senha"
            />
            <Input
              type="password"
              label="Repita sua senha"
              name="password_repeat"
              min={6}
              placeholder="Insira sua senha novamente"
            />
          </div>
        </div>
        <div className={styles.form_submit}>
          <Button type="submit">Sign Up</Button>
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
