import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    coverage: {
      reporter: ["text", "json", "html"],
    },
    // setupFiles: ["./vitest.setup.ts"],
    // deps: {
    //   inline: [
    //     "@testing-library/react-hooks",
    //     // Add other problematic packages as needed
    //   ],
    // },

    // // Add testTransformMode here
    // testTransformMode: {
    //   web: ["**/*.{js,jsx,ts,tsx}"],
    // },
    // // Optional: exclude directories you don't want to test
    // exclude: ["**/node_modules/**", "**/dist/**", "**/.{git,cache}/**"],
  },
});
