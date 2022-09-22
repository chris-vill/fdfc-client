import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";

import * as SC from "./LocationInfoForm.styles";
import { Button, Input } from "components";
import { api, useStore } from "core";

const loginSchema = yup.object({
  address_permanent: yup.string().required("Required"),
  address_temporary: yup.string().required("Required"),
});

type LoginSchema = yup.InferType<typeof loginSchema>;

function LocationInfoForm() {
  const currentStep = useStore((state) => state.currentStep);
  const info = useStore((state) => state.info);
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
    const response = await api.putLocationInfo({
      ...formData,
      id: info.id as number,
    });
    const { registration_status } = response;

    if (!!Object.keys(response).length) {
      const newCurrentStep =
        registration_status === "finished" ? 0 : parseInt(registration_status.replace("step", ""));

      setInfo({
        ...response,
        registration_status: "step3",
      });

      setCurrentStep(newCurrentStep);
      setFurthestStep(newCurrentStep);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      if (currentStep === 0) {
        router.push("/inside");
      } else if (currentStep !== 2) {
        router.push("/step" + currentStep);
      }
    } else {
      router.push("/");
    }
  }, [currentStep, router, isLoggedIn]);

  return (
    <>
      <FormProvider {...methods}>
        <SC.Container>
          <SC.Label>Location Info (2 / 3)</SC.Label>
          <SC.Fields>
            <Input label="Permanent Address" name="address_permanent" type="text" />
            <Input label="Temporary Address" name="address_temporary" type="text" />
          </SC.Fields>
          <SC.Buttons>
            <Button
              btnType="secondary"
              label="Back"
              onClick={(ev) => {
                ev.preventDefault();
                setCurrentStep(1);
              }}
            />
            <Button
              btnType="primary"
              label="Submit"
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

export { LocationInfoForm };

