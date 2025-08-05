import { HStack, Image, Text } from "@chakra-ui/react"
import React from "react"
import Logo from "../assets/logo.webp"
import { ColorModeButton } from "./ui/color-mode"

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={Logo} boxSize={"80px"} />
      <ColorModeButton />
    </HStack>
  )
}

export default NavBar
