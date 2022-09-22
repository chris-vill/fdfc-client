import * as _ from "utils";

const axios = _.createAxios();

const api = {
  postLogin: async (payload: PostLoginPayload) => {
    try {
      const { data } = await axios.post("/login", payload);

      return data;
    } catch (error) {
      console.error("Something went wrong: ", error);
    }
  },
  postRegister: async (payload: PostRegisterPayload) => {
    try {
      const { data } = await axios.post("/register", payload);

      return data;
    } catch (error) {
      console.error("Something went wrong: ", error);
    }
  },
  putAdditionalInfo: async (payload: PutAdditionalInfoPayload) => {
    try {
      const { data } = await axios.put("/additional-info", payload);

      return data;
    } catch (error) {
      console.error("Something went wrong: ", error);
    }
  },
  putContactInfo: async (payload: PutContactInfoPayload) => {
    try {
      const { data } = await axios.put("/contact-info", payload);

      return data;
    } catch (error) {
      console.error("Something went wrong: ", error);
    }
  },
  putLocationInfo: async (payload: PutLocationInfoPayload) => {
    try {
      const { data } = await axios.put("/location-info", payload);

      return data;
    } catch (error) {
      console.error("Something went wrong: ", error);
    }
  },
};

export { api };

type PostLoginPayload = {
  username: string;
  password: string;
};

type PostRegisterPayload = {
  username: string;
  password: string;
};

type PutAdditionalInfoPayload = {
  id: number;
  civil_status: string;
  occupation: string;
};

type PutContactInfoPayload = {
  id: number;
  mobile: string;
  landline: string;
  email_address: string;
};

type PutLocationInfoPayload = {
  id: number;
  address_permanent: string;
  address_temporary: string;
};

