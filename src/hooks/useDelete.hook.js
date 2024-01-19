import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { authInstanceAxios, publicInstanceAxios } from "../config/axiosInstance";

export const useDelete = (url, withAuth = true, storeCallback = undefined) => {
  const { mutate, isPending, isError, isSuccess, data, error } = useMutation({
    mutationFn: async (values) => {
      const axiosInstance = withAuth ? authInstanceAxios : publicInstanceAxios;
      const response = await axiosInstance.delete(url, { data: values });
      return response;
    },
    onSuccess: (returnedData) => {
      toast.success(returnedData?.data?.message || "Deleted successfully");
      // storeCallback && storeCallback(returnedData);
    },
    onError: (err) => {
      // toast.error(err?.data?.message);
      console.log(err);

    },
  });

  return {
    mutate,
    isPending,
    isError,
    isSuccess,
    data,
    error,
  };
};
