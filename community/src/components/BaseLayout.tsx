import React from "react"
import { styled, createGlobalStyle } from "../theme"

type Props = {}

export const BaseLayout = ({ children }: any) => {
  return (
    <Wrapper>
      <Global />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  min-height: calc(100vh - 130px);
`

const Global = createGlobalStyle`
  body {
    overflow-anchor: none;
  }

 a {
    color: ${(props: any) => props.theme.colors.grey1};
  }
`
