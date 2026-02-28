import type { Config } from "@react-router/dev/config";

const basename = process.env.BASENAME_URL!;

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  basename,
  ssr: false,
  appDirectory: "./src/app",
} satisfies Config;
