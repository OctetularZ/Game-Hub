import { HStack, Image, Text } from "@chakra-ui/react"
import React from "react"
import Logo from "../assets/logo.png"
import { ColorModeButton } from "./ui/color-mode"
import SearchInput from "./SearchInput"

interface Props {
  onSearch: (searchText: string) => void
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"}>
      <Image src={Logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeButton />
    </HStack>
  )
}

export default NavBar
