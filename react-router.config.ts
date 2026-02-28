import type { Config } from "@react-router/dev/config";
import { games } from "./src/entities/game/model/games";

const basename = process.env.BASENAME_URL!;

const gameIDs = games.map((g) => g.id);

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  basename,
  ssr: false,
  appDirectory: "./src/app",
  prerender: ["/", "/privacy-policy", "/stats", ...gameIDs.map((id) => `/games/${id}`)],
} satisfies Config;
