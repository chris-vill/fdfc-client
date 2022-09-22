import create from "zustand";

const useStore = create<UserStore>((set) => ({
  info: {},
  isLoggedIn: false,
  currentStep: -1,
  furthestStep: -1,
  setInfo: (newInfo) =>
    set({
      info: newInfo,
      isLoggedIn: true,
    }),
  setCurrentStep: (currentStep) =>
    set({
      currentStep,
    }),
  setFurthestStep: (furthestStep) =>
    set({
      furthestStep,
    }),
  clear: () =>
    set({
      info: {},
      isLoggedIn: false,
    }),
}));

export { useStore };

type UserStore = {
  info: UserInfo;
  isLoggedIn: boolean;
  currentStep: number;
  furthestStep: number;
  setInfo: (newInfo: UserInfo) => void;
  setCurrentStep: (currentStep: number) => void;
  setFurthestStep: (furthestStep: number) => void;
  clear: () => void;
};

type UserInfo = {
  id?: number;
  registration_status?: "step1" | "step2" | "step3" | "finished";
  address_permanent?: string;
  address_temporary?: string;
  occupation?: string;
  civil_status?: string;
  mobile?: string;
  landline?: number;
  email_address?: string;
};

