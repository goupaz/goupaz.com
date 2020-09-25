import React from "react"
import { styled, css, theme } from "../theme"

type DisplayTypes =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "detail"
  | "small"
  | "label"
type SolidColors = keyof typeof theme.colors

type Props = {
  display: DisplayTypes
  type?: string
  color?: SolidColors
  children: any
  style?: any
  className?: string
  bold?: boolean | null
  center?: boolean | null
  href?: string
  target?: string
}

export const Copy = ({
  display,
  type,
  color,
  bold,
  center,
  children,
  ...rest
}: Props) => {
  return (
    <InitialCopy
      display={display}
      type={type}
      color={color}
      bold={bold}
      center={center}
      {...rest}
    >
      {children}
    </InitialCopy>
  )
}

const InitialCopy = styled(({ type, bold, ...props }: Props) =>
  React.createElement(type || "span", props)
)`
  font-family: ${(props) => props.theme.fonts.fontFamily};

  ${(props) => props.display === "display" && display};
  ${(props) => props.display === "h1" && h1}
  ${(props) => props.display === "h2" && h2}
  ${(props) => props.display === "h3" && h3}
  ${(props) => props.display === "body" && body}
  ${(props) => props.display === "detail" && detail}
  ${(props) => props.display === "label" && label}
  ${(props) => props.display === "small" && small}
  
  color: ${(props) => props.theme.colors[props.color || "grey1"]};
  text-decoration: none;
  ${(props) => props.bold && bold}
  ${(props) => props.center && center}
`

const bold = css`
  font-weight: bold;
`

const center = css`
  text-align: center;
`

const display = css`
  font-weight: bold;
  font-size: 50px;
`

const h1 = css`
  font-weight: bold;
  font-size: 40px;
`

const h2 = css`
  font-weight: 500;
  font-size: 30px;
  letter-spacing: -0.02em;
  margin: 0;
`

const h3 = css`
  font-weight: 500;
  font-size: 20px;
  margin: 0;
  letter-spacing: -0.02em;
`

const body = css`
  font-weight: normal;
  font-size: 14px;
  letter-spacing: -0.02em;
`

const detail = css`
  font-weight: 500;
  font-size: 9px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
`

const label = css`
  font-weight: bold;
  font-size: 14px;
  letter-spacing: -0.02em;
`

const small = css`
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 0.02em;
`
