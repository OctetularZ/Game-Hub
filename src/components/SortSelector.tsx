import React from "react"
import { Button, Menu, Portal } from "@chakra-ui/react"
import { BsChevronBarDown } from "react-icons/bs"

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevance <BsChevronBarDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item>Relevance</Menu.Item>
            <Menu.Item>Avg Rating</Menu.Item>
            <Menu.Item>Discovery</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default SortSelector
