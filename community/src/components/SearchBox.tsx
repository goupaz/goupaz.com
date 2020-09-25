import React from "react"
import { useStore } from "effector-react"

import { ReactComponent as SearchIconSvg } from "../assets/search.svg"
import { $search, setSearch } from "../store"
import { styled, css } from "../theme"

export const SearchBox = ({ onlyMobile }: any) => {
  const search = useStore($search)
  return (
    <SearchBoxWrapper onlyMobile={onlyMobile}>
      <SearchIcon />
      <SearchInput
        type="search"
        placeholder={`Search by name, role or location`}
        onChange={setSearch}
        aria-label="Search for developers by name, role or location"
        value={search}
      />
      <Tooltip>Search for developers by name, role or location</Tooltip>
    </SearchBoxWrapper>
  )
}

const SearchBoxWrapper = styled.div<any>`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;

  ${(props) =>
    props.onlyMobile &&
    css`
      display: none;

      ${props.theme.screen.mobile} {
        display: block;
        padding: 0;
      }
    `}

  ${(props) =>
    !props.onlyMobile &&
    css`
      ${props.theme.screen.mobile} {
        display: none;
      }
    `}
`

const SearchIcon = styled(SearchIconSvg)`
  fill: ${(props) => props.theme.colors.grey1};
  width: 24px;
  height: 24px;
  margin-right: 10px;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%);
`

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  background-color: ${(props) => props.theme.colors.snow1};
  color: ${(props) => props.theme.colors.grey2};
  border: 1px solid transparent;
  border-radius: 4px;

  &:focus {
    background-color: white;
    border: 1px solid ${(props) => props.theme.colors.snow3};

    &::placeholder {
      color: ${(props) => props.theme.colors.grey1};
    }
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.snow4};
  }
`

const Tooltip = styled.div`
  position: absolute;
  display: none;
`
