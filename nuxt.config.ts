// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module"],
  primevue: {
    usePrimeVue: true,
    autoImport: true,
    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: undefined,
          cssLayer: false,
        },
      },
    },
  },

  css: ["primeicons/primeicons.css", "primeflex/primeflex.css"],
});
