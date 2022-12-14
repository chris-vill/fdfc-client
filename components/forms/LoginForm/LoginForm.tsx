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
  const info = useStore((state) => state.info);
  const currentStep = useStore((state) => state.currentStep);
  const furthestStep = useStore((state) => state.furthestStep);
  const setInfo = useStore((state) => state.setInfo);
  const setCurrentStep = useStore((state) => state.setCurrentStep);
  const setFurthestStep = useStore((state) => state.setFurthestStep);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const router = useRouter();
  const methods = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });

  const { handleSubmit } = methods;

  const onLogin: SubmitHandler<LoginSchema> = async (formData) => {
    const response = await api.postLogin(formData);
    const { registration_status } = response;

    if (!!Object.keys(response).length) {
      const newCurrentStep =
        registration_status === "finished" ? 0 : parseInt(registration_status.replace("step", ""));

      setInfo(response);
      setCurrentStep(newCurrentStep);
      setFurthestStep(newCurrentStep);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      if (furthestStep === 0) {
        router.push("/inside");
      } else {
        router.push("/" + info.registration_status);
      }
    }
  }, [currentStep, furthestStep, info, isLoggedIn, router]);

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
            <Button
              btnType="secondary"
              label="Register"
              onClick={(ev) => {
                ev.preventDefault();
                router.push("/registration");
              }}
            />
            <Button
              btnType="primary"
              label="Login"
              onClick={(ev) => {
                ev.preventDefault();
                handleSubmit(onLogin)();
              }}
            />
          </SC.Buttons>
        </SC.Container>
      </FormProvider>
    </>
  );
}

export { LoginForm };

