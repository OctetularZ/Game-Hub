import React from "react"
import { Game } from "../hooks/useGames"
import { Card, Heading, Image, Theme, Text, HStack } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"} bg={"brand.2"}>
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          ></PlatformIconList>
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  )
}

export default GameCard
