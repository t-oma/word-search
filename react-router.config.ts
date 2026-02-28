import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  basename: process.env.BASENAME_URL!,
  ssr: false,
  appDirectory: "./src/app",
} satisfies Config;
