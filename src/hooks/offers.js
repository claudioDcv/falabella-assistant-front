import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useOffers = () => {
  const { data, error } = useSWR("http://localhost:3000/mock.json", fetcher);

  return {
    data,
    isError: error,
    isLoading: !error && !data,
  };
};
