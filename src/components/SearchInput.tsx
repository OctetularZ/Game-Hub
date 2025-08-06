import React, { useRef } from "react"
import { Input, InputGroup } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"

interface Props {
  onSearch: (searchText: string) => void
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (ref.current) onSearch(ref.current.value)
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          borderRadius={20}
          ref={ref}
          placeholder="Search games..."
          variant={"subtle"}
        />
      </InputGroup>
    </form>
  )
}

export default SearchInput
