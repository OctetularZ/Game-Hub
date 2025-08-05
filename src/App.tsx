import React, { useState } from "react"
import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
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
        gap={10}
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
        <GridItem area={"main"}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
