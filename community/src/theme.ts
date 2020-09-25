import baseStyled, {
  ThemedStyledInterface,
  css as styledCss,
  createGlobalStyle as styledCreateGlobalStyle,
} from "styled-components"

export const theme = {
  fonts: {
    fontFamily: `"Roboto", sans-serif`,
  },
  colors: {
    primaryLight: "#055092",
    primary: "#055092",
    primaryDark: "#055092",
    secondaryLight: "#ffca28",
    secondary: "#ffc107",
    secondaryDark: "#ffb300",
    white: "#FFFFFF",
    grey1: "#858FAD",
    grey2: "#525C7A",
    grey3: "#292E3D",
    snow1: "#F8F9FB",
    snow2: "#edf0f5",
    snow3: "#E7EAF1",
    snow4: "#BFC4D4",
    critical: "#F74545",
    criticalWeak: "#FDEDED",
    warning: "#F8AE4F",
    warningWeak: "#fff5e6",
    success: "#36CB70",
    successWeak: "#D8FFE7",
  },
  shadows: {
    dp4: `0px 100px 80px rgba(82, 92, 122, 0.07), 0px 30.1471px 24.1177px rgba(82, 92, 122, 0.0456112), 0px 12.5216px 10.0172px rgba(82, 92, 122, 0.035), 0px 4.5288px 3.62304px rgba(82, 92, 122, 0.0243888)`,
  },
  common: {
    radius: "4px",
  },
  screen: {
    desktop: `@media (max-width: 1400px)`,
    tablet: `@media (max-width: 1024px)`,
    mobile: "@media (max-width: 768px)",
  },
}

export type Theme = typeof theme
export const styled = baseStyled as ThemedStyledInterface<Theme>
export const css = styledCss
export const createGlobalStyle = styledCreateGlobalStyle
