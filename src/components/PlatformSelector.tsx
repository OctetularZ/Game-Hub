import { Menu, Button, Portal } from "@chakra-ui/react"
import React from "react"
import { BsChevronBarDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import { Platform } from "../hooks/useGames"

interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms()

  if (error) return null

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platforms"} <BsChevronBarDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default PlatformSelector
