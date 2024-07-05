"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import {
  Button,
  Input,
  Loader,
  Notification,
  TextArea,
  Typography,
} from "src/components";
import { FormEventHandler, useState } from "react";
type Values = "name" | "email" | "message";
const isEmail = (value: string) =>
  new RegExp(
    "^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$"
  ).test(value);
export default function Contact() {
  const [data, setData] = useState<{
    name: string;
    email: string;
    message?: string;
  }>({ email: "", name: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [errors, setErrors] = useState<Record<Values, string>>({
    email: "",
    name: "",
    message: "",
  });
  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    
    if (!data?.name || !data?.email || Object.values(errors).some((error) => !!error)){
      return
    }
    setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setSnackbar(true);
        setData({email: '', name: ''})
      }, 2000);
  };

  const validateFields = ({ name, value }: { name: Values; value: string }) => {
    if (name == "name" && !value) {
      setErrors((prev) => ({
        ...prev,
        [name]: "El campo nombre es requerido",
      }));
      return;
    }
    if (name == "email") {
      if (!value) {
        setErrors((prev) => ({
          ...prev,
          [name]: "El campo email es requerido",
        }));
        return;
      }
      if (!isEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          [name]: "El campo email no es válido",
        }));
        return;
      }
    }
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const onChange = ({ name, value }: { name: Values; value: string }) => {
    setData((prev) => ({ ...prev, [name]: value }));
    validateFields({ name, value });
  };
  return (
    <div className={`${styles.container_2} fade_in`}>
      <form className={styles.form} onSubmit={submit}>
        <Typography variant="title_xl">
          <span className={styles.logo}>WG</span> comunícate conmigo
        </Typography>
        <Input
          value={data.name}
          onChange={({ target: { name, value } }) => {
            onChange({ name, value });
          }}
          label="Nombre *"
          placeholder="Nombre"
          name="name"
        />
        <Typography variant="error">
          <i>{errors.name}</i>
        </Typography>
        <Input
          value={data.email}
          onChange={({ target: { name, value } }) => {
            onChange({ name, value });
          }}
          label="Correo electrónico *"
          type="email"
          placeholder="Correo electrónico"
          name="email"
        />
        <Typography variant="error">
          <i>{errors.email}</i>
        </Typography>
        <TextArea
          value={data.message}
          onChange={({ target: { name, value } }) => {
            onChange({ name, value });
          }}
          rows={5}
          label="Mensaje"
          placeholder="Mensaje"
          name="message"
        />
        <Button className={styles.submit} type="submit">
          {!!isLoading && <Loader />}
          {!isLoading && "Enviar"}
        </Button>
      </form>

      <Image
        className={styles.form_image}
        src="/form.png"
        alt="imagen de formulario"
        width={1000}
        height={1000}
      />
      <Notification
        open={snackbar}
        message="El correo fue enviado exitosamente."
        close={() => {
          setSnackbar(false);
        }}
      />
    </div>
  );
}
