import { useQuery } from "@tanstack/react-query";
import { authInstanceAxios, publicInstanceAxios } from "..//config/axiosInstance";
import { checkPropTypes } from "prop-types";

export const useGET = ({ url, queryKey, withAuth = false, enabled }) => {
  const fetch = async () => {
    const axiosInstance = withAuth ? authInstanceAxios : publicInstanceAxios;
    const response = await axiosInstance.get(url);
    return response?.data;
  };

  const {
    data,
    isFetching,
    isLoading,
    isError,
    isSuccess,
    refetch,
    isRefetching,
    isLoadingError,
    isRefetchError,
  } = useQuery({ queryKey: queryKey, queryFn: fetch });
  return {
    data,
    isFetching,
    isLoading,
    isError,
    isSuccess,
    refetch,
    isRefetching,
    isLoadingError,
    isRefetchError,
  };
};

