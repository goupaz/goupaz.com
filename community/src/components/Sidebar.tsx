import React from "react"
import styled from "styled-components"
import CountUp from "react-countup"

import { Copy } from "./Copy"
import { countriesWithNumOfDevsObj } from "../util/UsersDataCleanup"

const countryNamesAndNumOfDevsArr = Object.entries(
  countriesWithNumOfDevsObj
).sort((a: any, b: any) => b[1] - a[1])

type Props = {
  persons: any[]
}

export const Sidebar = ({ persons }: Props) => {
  return (
    <SidebarWrapper>
      <Copy display="body" color="grey2" center>
        <Copy type="div" display="display" color="grey2">
          <CountUp end={persons.length} delay={1} />
        </Copy>
        <Copy type="div" display="label" color="grey2">
          Total Profiles
        </Copy>
      </Copy>
      <br />
      <Copy display="body" color="grey2" center>
        <Copy type="div" display="display" color="grey2">
          <CountUp end={countryNamesAndNumOfDevsArr.length} delay={1} />
        </Copy>
        <Copy type="div" display="label" color="grey2">
          Total Countries
        </Copy>
      </Copy>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  width: 200px;
  flex-shrink: 0;

  ${(props) => props.theme.screen.mobile} {
    display: flex;
    padding: 20px;
    width: 100%;
    justify-content: space-around;
  }
`
