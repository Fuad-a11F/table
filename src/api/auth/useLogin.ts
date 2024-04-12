import { useMutation } from "@tanstack/react-query";
import { login } from "../index";

export const useLoginUser = () => {
  return useMutation({ mutationFn: login });
};
