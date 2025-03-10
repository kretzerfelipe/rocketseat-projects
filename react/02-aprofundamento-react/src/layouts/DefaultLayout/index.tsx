import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import Header from "../../components/header/Index";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}