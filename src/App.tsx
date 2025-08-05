import React from "react"
import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"

const App = () => {
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
      >
        <GridItem area={"nav"}>
          <NavBar></NavBar>
        </GridItem>
        <GridItem area={"aside"} hideBelow={"lg"} paddingX={5}>
          <GenreList />
        </GridItem>
        <GridItem area={"main"}>
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
