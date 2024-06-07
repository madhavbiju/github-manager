import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Outlet } from "react-router";
import { HeaderSimple } from "./components/Header/Header";
import { NavbarSearch } from "./components/Navbar/Navbar";
import RepoRoles from "./pages/RepoRoles/RepoRoles";
import { BasicAppShell } from "./pages/Home/Home";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <BasicAppShell />
    </MantineProvider>
  );
}
