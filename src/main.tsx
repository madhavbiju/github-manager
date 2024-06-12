import ReactDOM from "react-dom/client";
import AppRouter from "./Routes.tsx";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <AppRouter />
  </MantineProvider>
);
