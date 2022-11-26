import { HomeRouter, AdminRouter, CustomerRouter } from "../routes";

export const APPS = [
  {
    subdomain: "www",
    app: HomeRouter,
    main: true,
  },
  {
    subdomain: "admin",
    app: AdminRouter,
    main: false,
  },
  {
    subdomain: "customer",
    app: CustomerRouter,
    main: false,
  },
];
