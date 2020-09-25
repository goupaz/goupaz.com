import React from "react"
import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import { ReactComponent as LogoSvg } from "../assets/logo.svg"
import { ReactComponent as MapSvg } from "../assets/map.svg"

import "../styles/SearchBarDesktopView.scss"
import { SearchBox } from "./SearchBox"
import { Copy } from "./Copy"

export const Navbar = () => {
  const { pathname } = useLocation()
  return (
    <NavWrapper>
      <Container>
        <Link to="/">
          <Logo />
        </Link>

        <Menu>
          <Copy display="body" color="grey1">
            <a href="https://goupaz.com/">Back to goupaz.com</a>
          </Copy>
        </Menu>

        <SearchBox />
        <Link to="/map">
          <MapIcon active={pathname.includes("/map")} />
        </Link>
      </Container>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  padding: 15px 20px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index: 999999;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100vw;
    margin-left: -50vw;
    left: 50%;
    top: 0;
    z-index: -1;
    background-color: white;
    border-bottom: 1px solid ${(props) => props.theme.colors.snow2};
  }

  ${(props) => props.theme.screen.mobile} {
    background-color: white;
    border-bottom: 1px solid ${(props) => props.theme.colors.snow3};

    &:before {
      display: none;
    }
  }
`

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

const Menu = styled.div`
  display: flex;
  padding: 10px;
  margin-left: 10px;

  a {
    text-decoration: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.snow3};
  }

  ${(props) => props.theme.screen.mobile} {
    margin-left: auto;
  }
`

const Logo = styled(LogoSvg)`
  width: 240px;
  height: 24px;
  margin-top: 6px;
`

const MapIcon = styled(MapSvg)<any>`
  fill: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.grey2};
  padding: 10px 20px;

  &:hover {
    fill: ${(props) => props.theme.colors.primary};
  }
`
