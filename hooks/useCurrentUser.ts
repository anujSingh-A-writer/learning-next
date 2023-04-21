import { ME } from "@/constants/endpoints";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR(ME, fetcher);

  return { data, error, isLoading, mutate };
};

export default useCurrentUser;
