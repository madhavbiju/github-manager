import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AppRouter from "./Routes.tsx";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <AppRouter />
  </MantineProvider>
);
