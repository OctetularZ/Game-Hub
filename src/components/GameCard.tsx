import React from "react"
import { Game } from "../hooks/useGames"
import { Card, Heading, Image, Theme, Text } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root size={"sm"} borderRadius={10} overflow={"hidden"} bg={"brand.2"}>
      <Image src={game.background_image} />
      <Card.Header>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        ></PlatformIconList>
      </Card.Header>
    </Card.Root>
  )
}

export default GameCard
