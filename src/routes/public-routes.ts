import { RoutesInterface } from "../models/routes/routes-interface";
import Main from "../modules/main/Main";
import { MAIN_PAGE, TABLE_PAGE } from "./all-routes";
import Table from "../modules/table/Table";

export const publicRoutes: RoutesInterface[] = [
  { route: MAIN_PAGE, component: Main },
  { route: TABLE_PAGE, component: Table },
];
