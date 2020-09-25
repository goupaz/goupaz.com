import React from "react"
import { useStore } from "effector-react"
import { createFilter } from "react-search-input"

import { data } from "../assets/persons.js"
import { KEYS_TO_FILTERS } from "../contants"
import { BatchCards } from "../components/BatchCards"
import { SearchBox } from "../components/SearchBox"
import { BaseLayout } from "../components/BaseLayout"
import { $search } from "../store"

type Props = {}

export const CardsPage = (props: Props) => {
  const search = useStore($search)
  const filteredPersons = (searchFilter: any) =>
    data?.people.filter(createFilter(searchFilter, KEYS_TO_FILTERS))

  return (
    <BaseLayout>
      <SearchBox onlyMobile />

      <BatchCards persons={filteredPersons(search)} numberPerBatch={16} />
    </BaseLayout>
  )
}
