import { index, route } from "@react-router/dev/routes";
import type { RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/games/:id", "./routes/game.tsx"),
  route("/stats", "./routes/stats.tsx"),
  route("/privacy-policy", "./routes/privacy-policy.tsx"),
] satisfies RouteConfig;
