import axios from "axios";

export const storeTransaction = async (payload: any) => {
  await axios.post(`${import.meta.env.VITE_API_URL}/transaction`, payload, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const fetchReferralCode = async (address: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/get-referral?address=${address}`
  );

  return response.data;
};

export const fetchBalance = async (address: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/${address}/balance`
  );

  return response.data?.data;
};

export const storeReferralTransaction = async (payload: any) => {
  const referralId = localStorage.getItem("ref");
  if (referralId?.length === 6) {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/referral-transaction`,
      { ...payload, ref_address: referralId },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    localStorage.removeItem("ref");
  }
};
