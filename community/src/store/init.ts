import { $search } from "./store"
import { setSearch } from "./events"

$search.on(setSearch, (_, e: any) => e?.target?.value)
