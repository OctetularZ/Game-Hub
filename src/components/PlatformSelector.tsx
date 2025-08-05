import { Menu, Button, Portal } from "@chakra-ui/react"
import React from "react"
import { BsChevronBarDown } from "react-icons/bs"

const PlatformSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Platform <BsChevronBarDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item>1</Menu.Item>
            <Menu.Item>2</Menu.Item>
            <Menu.Item>3</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default PlatformSelector
