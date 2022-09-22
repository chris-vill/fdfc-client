import create from "zustand";

const useStore = create<UserStore>((set) => ({
  info: {},
  isLoggedIn: false,
  setInfo: (newInfo) =>
    set({
      info: newInfo,
      isLoggedIn: true,
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
  setInfo: (newInfo: UserInfo) => void;
  clear: () => void;
};

type UserInfo = {
  id?: number;
  address_permanent?: string;
  address_temporary?: string;
  occupation?: string;
  civil_status?: string;
  mobile?: string;
  landline?: number;
  email_address?: string;
};

