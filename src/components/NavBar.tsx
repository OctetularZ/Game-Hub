import { HStack, Image, Text } from "@chakra-ui/react"
import React from "react"
import Logo from "../assets/logo.webp"
import { ColorModeButton } from "./ui/color-mode"
import SearchInput from "./SearchInput"

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={Logo} boxSize={"80px"} />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  )
}

export default NavBar
