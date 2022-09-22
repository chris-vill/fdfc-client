import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";

import * as SC from "./LoginForm.styles";
import { Button, Input } from "components";
import { api, useStore } from "core";

const loginSchema = yup.object({
  username: yup.string().required("Required"),
  password: yup.string().required("Required"),
});

type LoginSchema = yup.InferType<typeof loginSchema>;

function LoginForm() {
  const setInfo = useStore((state) => state.setInfo);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const router = useRouter();
  const methods = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });

  const { handleSubmit } = methods;

  const onLogin: SubmitHandler<LoginSchema> = async (formData) => {
    const response = await api.postLogin(formData);

    if (!!Object.keys(response).length) {
      setInfo(response);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/inside");
    }
  }, [router, isLoggedIn]);

  return (
    <>
      <FormProvider {...methods}>
        <SC.Container>
          <SC.Label>Login</SC.Label>
          <SC.Fields>
            <Input label="Username" name="username" type="text" />
            <Input label="Password" name="password" type="password" />
          </SC.Fields>
          <SC.Buttons>
            <Button btnType="secondary" label="Register" />
            <Button btnType="primary" label="Login" onClick={handleSubmit(onLogin)} />
          </SC.Buttons>
        </SC.Container>
      </FormProvider>
    </>
  );
}

export { LoginForm };

