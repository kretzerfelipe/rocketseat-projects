import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/svg/logo";
import { HeaderContainer } from "./styles";
import { Timer, Scroll } from 'phosphor-react'

export default function Header() {
  return (
    <HeaderContainer>
      <span>
        <Logo size={24} />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}