import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";

import * as SC from "./ContactInfoForm.styles";
import { Button, Input } from "components";
import { api, useStore } from "core";

const schema = yup.object({
  mobile: yup.string().required("Required"),
  landline: yup.string().required("Required"),
  email_address: yup.string().required("Required"),
});

type Schema = yup.InferType<typeof schema>;

function ContactInfoForm() {
  const currentStep = useStore((state) => state.currentStep);
  const info = useStore((state) => state.info);
  const setInfo = useStore((state) => state.setInfo);
  const setCurrentStep = useStore((state) => state.setCurrentStep);
  const setFurthestStep = useStore((state) => state.setFurthestStep);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const router = useRouter();
  const methods = useForm<Schema>({
    resolver: yupResolver(schema),
  });

  const { handleSubmit, formState } = methods;

  const onLogin: SubmitHandler<Schema> = async (formData) => {
    const response = await api.putContactInfo({
      ...formData,
      id: info.id as number,
    });
    const { registration_status } = response;

    if (!!Object.keys(response).length) {
      const newCurrentStep =
        registration_status === "finished" ? 0 : parseInt(registration_status.replace("step", ""));

      setInfo({
        ...response,
        registration_status: "finished",
      });
      setCurrentStep(newCurrentStep);
      setFurthestStep(newCurrentStep);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      if (currentStep === 0) {
        router.push("/inside");
      } else if (currentStep !== 3) {
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
          <SC.Label>Contact Info (3 / 3)</SC.Label>
          <SC.Fields>
            <Input label="Mobile" name="mobile" type="text" />
            <Input label="Landline" name="landline" type="text" />
            <Input label="Email Address" name="email_address" type="text" />
          </SC.Fields>
          <SC.Buttons>
            <Button
              btnType="secondary"
              label="Back"
              onClick={(ev) => {
                ev.preventDefault();
                setCurrentStep(2);
              }}
            />
            <Button
              type="submit"
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

export { ContactInfoForm };

