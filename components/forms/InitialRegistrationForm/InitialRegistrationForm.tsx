import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";

import * as SC from "./InitialRegistrationForm.styles";
import { Button, Input } from "components";
import { api, useStore } from "core";

const loginSchema = yup.object({
  username: yup.string().required("Required"),
  password: yup.string().required("Required"),
});

type LoginSchema = yup.InferType<typeof loginSchema>;

function InitialRegistrationForm() {
  const info = useStore((state) => state.info);
  const setInfo = useStore((state) => state.setInfo);
  const furthestStep = useStore((state) => state.furthestStep);
  const setCurrentStep = useStore((state) => state.setCurrentStep);
  const setFurthestStep = useStore((state) => state.setFurthestStep);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const router = useRouter();
  const methods = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });

  const { handleSubmit } = methods;

  const onLogin: SubmitHandler<LoginSchema> = async (formData) => {
    const response = await api.postRegister(formData);
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
      router.push("/step1");
    }
  }, [router, isLoggedIn]);

  return (
    <>
      <FormProvider {...methods}>
        <SC.Container>
          <SC.Label>Initial Registration</SC.Label>
          <SC.Fields>
            <Input label="Username" name="username" type="text" />
            <Input label="Password" name="password" type="password" />
          </SC.Fields>
          <SC.Buttons>
            <Button btnType="secondary" label="Cancel" />
            <Button btnType="primary" label="Submit" onClick={handleSubmit(onLogin)} />
          </SC.Buttons>
        </SC.Container>
      </FormProvider>
    </>
  );
}

export { InitialRegistrationForm };

