import React from "react"
import { Copy } from "./Copy"
import { styled, css, theme } from "../theme"
// @ts-ignore
import Color from "color"
import { ReactComponent as Spinner } from "../assets/spinner.svg"

type SolidColors = keyof typeof theme.colors

type Props = {
  children?: React.ReactNode
  icon?: React.ElementType<any>
  fullWidth?: boolean
  loading?: boolean
  mode?: "contained" | "outline" | "text"
  tiny?: boolean
  color?: SolidColors
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const darkText = ["snow1", "snow2", "snow3", "snow4"]

export const Button = ({
  children,
  loading,
  mode = "contained",
  icon: Icon,
  tiny,
  color = "white",
  ...props
}: Props) => {
  const darkContent = darkText.includes(color)
  return (
    <ButtonStyled
      loading={loading}
      mode={mode}
      withIcon={!!Icon}
      tiny={tiny}
      color={color}
      {...props}
    >
      {loading && (
        <Loading>
          <Spinner />
        </Loading>
      )}
      {Icon && (
        <IconWrapper color={darkContent ? "grey1" : "white"}>
          <Icon className="icon-button" />
        </IconWrapper>
      )}
      {children && (
        <Copy
          type="span"
          display="label"
          color={darkContent ? "grey1" : "white"}
        >
          {children}
        </Copy>
      )}
    </ButtonStyled>
  )
}

const Loading = styled.div`
  border-radius: ${(props) => props.theme.common.radius};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  fill: ${(props) => props.theme.colors.white};
`

export const buttonStyle = css<{
  fullWidth?: boolean
  tiny?: boolean
  withIcon?: boolean
}>`
  background-color: transparent;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  position: relative;
  font-weight: bold;
  font-size: 14px;
  border: none;
  padding: 10px 15px;
  height: 44px;
  border-radius: ${(props) => props.theme.common.radius};
  border: none;
  transition: all 200ms ease-in-out;
  box-shadow: 0 0 0px 0px rgba(115, 118, 250, 0);
  user-select: none;
  cursor: pointer;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};

  ${(props) => props.tiny && tinyStyle}
  ${(props) => props.withIcon && withIconStyle}

  &:focus,
  &:hover,
  &:active {
    outline: none;
  }
`

const ButtonStyled = styled.button<{
  color?: SolidColors
  fullWidth?: boolean
  loading?: boolean
  mode: "contained" | "outline" | "text"
  tiny?: boolean
  withIcon: boolean
}>`
  ${buttonStyle}
  background-color: ${(props) =>
    props.color && props.theme.colors[props.color]};

  color: ${(props) => props.theme.colors.white};

  ${(props) =>
    props.loading &&
    css`
      pointer-events: none;
    `}

  &:hover, &:focus {
    box-shadow: 0 0 0px 3px
      ${(props) =>
        props.color && Color(props.theme.colors[props.color]).alpha(0.4)};
  }

  &:active {
    background-color: ${(props) =>
      props.color &&
      Color(props.theme.colors[props.color]).alpha(1).darken(0.1)};
    box-shadow: 0 0 0px
      ${(props) =>
        props.color && Color(props.theme.colors[props.color]).alpha(0.4)};
    color: rgba(255, 255, 255, 0.5);
  }

  ${(props) => props.mode === "text" && textStyle}
  ${Loading} {
    background-color: ${(props) =>
      props.color && props.theme.colors[props.color]};

    svg {
      fill: ${(props) =>
        darkText.includes(props.color as string)
          ? props.theme.colors.grey1
          : props.theme.colors.white};
    }
  }
`

const textStyle = css`
  background-color: transparent;
  color: ${(props) => props.theme.colors.grey2};

  &:focus {
    box-shadow: none;
  }

  &:hover {
    box-shadow: none;
  }

  &:active {
    box-shadow: none;
    background-color: transparent;
  }
`

const tinyStyle = css`
  height: 30px;
`

const withIconStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 14px;

  span {
    margin-left: 5px;
  }
`

const IconWrapper = styled.div<{ color?: SolidColors }>`
  width: 20px;
  height: 20px;
  padding: 1px;

  svg.icon-button {
    width: 100%;
    height: 100%;
    margin: auto;
    stroke: ${(props) => props.color && props.theme.colors[props.color]};
  }
`
