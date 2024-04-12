import { useMutation } from "@tanstack/react-query";
import { registration } from "../index";

export const useRegistrationUser = () => {
  return useMutation({ mutationFn: registration });
};
