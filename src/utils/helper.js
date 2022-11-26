import { Apps } from "./constant";

export const getApp = () => {
  console.log(window.location.hostname);
  const subDomain = getSubdomain(window.location.hostname);

  const main = Apps?.find((app) => app.main);

  if (!main) throw new Error("Must have main app");

  if (subDomain === "") return main.app;

  const app = Apps?.find((app) => subDomain === app.subdomain);

  if (!app) return main.app;

  return app.app;
};

const getSubdomain = ({ location }) => {
  const locationParts = location?.split(".");

  let sliceTill = -2;

  const isLocalHost = locationParts?.slice(-1)[0] === "localhost";

  if (isLocalHost) sliceTill = -1;

  return locationParts?.slice(0, sliceTill.join(""));
};
