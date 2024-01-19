import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-hot-toast';
import { authInstanceAxios, publicInstanceAxios } from "..//config/axiosInstance";


export const usePATCH = (url, withAuth = true, storeCallback = undefined) => {
    const { mutate, isPending, isError, isSuccess, data, error } = useMutation({
        mutationFn: async (values) => {
            const axiosInstance = withAuth ? authInstanceAxios : publicInstanceAxios
            const response = await axiosInstance.patch(url, values)
            return response?.data
        },
        onSuccess: (returnedData) => {
            console.log(returnedData);
            toast.success('Success')

            // storeCallback && storeCallback(returnedData)
        },
        onError: (err) => {

            // (err?.data?.message instanceof Array) ? toast.error(err?.data?.message[0]) : toast.error(err?.data?.message)
            console.log(err);

        }
    });

    return {
        mutate,
        isPending,
        isError,
        isSuccess,
        data,
        error
    };
};
