import React from "react"
import { Game } from "../hooks/useGames"
import { Card, Heading, Image, Theme, Text } from "@chakra-ui/react"

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root size={"sm"} borderRadius={10} overflow={"hidden"} bg={"brand.2"}>
      <Image src={game.background_image} />
      <Card.Header>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        {game.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))}
      </Card.Header>
    </Card.Root>
  )
}

export default GameCard
