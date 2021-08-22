import React, { useState } from "react"

import CardList from "./CardList"
import { Button } from "./Button"
import { styled } from "../theme"
import { Sidebar } from "./Sidebar"

export const BatchCards = ({ persons, numberPerBatch = 16 }: any) => {
  const [batch, setBatch] = useState(1)
  const [loading, setLoading] = useState(false)

  const addToBatch = () => {
    if (persons.length > batch * numberPerBatch) {
      setLoading(true)
      setTimeout(() => {
        setBatch(batch + 1)
        setLoading(false)
      }, 600)
    }
  }

  return (
    <Wrapper>
      <Sidebar persons={persons} />

      <Content>
        <CardList persons={persons.slice(0, batch * numberPerBatch)} />
        {persons.length > batch * numberPerBatch && (
          <ButtonWrapper>
            <Button
              onClick={addToBatch}
              mode="contained"
              color="snow2"
              loading={loading}
            >
              Show More
            </Button>
          </ButtonWrapper>
        )}
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;

  ${(props) => props.theme.screen.mobile} {
    flex-direction: column;
  }
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 200px);

  ${(props) => props.theme.screen.mobile} {
    width: 100%;
  }
`

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;

  button {
    width: 300px;
  }
`
