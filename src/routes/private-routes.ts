import { RoutesInterface } from "../models/routes/routes-interface";
import { LOGIN_PAGE } from "./all-routes";
import Auth from "../modules/auth/Auth";

export const privateRoutes: RoutesInterface[] = [
  { route: LOGIN_PAGE, component: Auth },
];
