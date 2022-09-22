import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";

import * as SC from "./AdditionalInfoForm.styles";
import { Button, Input } from "components";
import { api, useStore } from "core";

const loginSchema = yup.object({
  civil_status: yup.string().required("Required"),
  occupation: yup.string().required("Required"),
});

type LoginSchema = yup.InferType<typeof loginSchema>;

function AdditionalInfoForm() {
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

  const onSubmit: SubmitHandler<LoginSchema> = async (formData) => {
    const response = await api.putAdditionalInfo({
      ...formData,
      id: info.id as number,
    });
    const { registration_status } = response;

    if (!!response) {
      const newCurrentStep =
        registration_status === "finished" ? 0 : parseInt(registration_status.replace("step", ""));

      setInfo({
        ...response,
        registration_status: "step2",
      });
      setCurrentStep(newCurrentStep);
      setFurthestStep(newCurrentStep);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      if (currentStep === 0) {
        router.push("/inside");
      } else if (currentStep !== 1) {
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
          <SC.Label>Additional Info (1 / 3)</SC.Label>
          <SC.Fields>
            <Input label="Civil Status" name="civil_status" type="text" />
            <Input label="Occupation" name="occupation" type="text" />
          </SC.Fields>
          <SC.Buttons>
            <Button
              btnType="primary"
              label="Submit"
              onClick={(ev) => {
                ev.preventDefault();
                handleSubmit(onSubmit)();
              }}
            />
          </SC.Buttons>
        </SC.Container>
      </FormProvider>
    </>
  );
}

export { AdditionalInfoForm };

