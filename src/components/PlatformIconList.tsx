import React from "react"
import {
  FaPlaystation,
  FaApple,
  FaXbox,
  FaAndroid,
  FaWindows,
  FaLinux,
} from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { Platform } from "../hooks/useGames"
import { HStack, Icon, Text } from "@chakra-ui/react"
import { IconType } from "react-icons"

interface Props {
  platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    // This means - Any number of string keys - index signature - represents any number of keys. Map each key to IconType.
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  }

  return (
    // Passing one here uses the default multipler for margin set in the theme (which is 4px in this case)
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.slug}
          as={iconMap[platform.slug]}
          color={"gray.500"}
        />
      ))}
    </HStack>
  )
}

export default PlatformIconList
