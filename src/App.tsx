import React, { useState } from "react"
import { Grid, GridItem, HStack, Show, Flex } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"
import SortSelector from "./components/SortSelector"

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery) // Can hold Genre object or null

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // Devices larger than 1024px - Most laptops
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
        gap={20}
      >
        <GridItem area={"nav"}>
          <NavBar></NavBar>
        </GridItem>
        <GridItem area={"aside"} hideBelow={"lg"} paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
        <GridItem paddingX={10} area={"main"}>
          <Flex marginBottom={5} gap={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
