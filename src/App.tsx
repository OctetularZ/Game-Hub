import React from "react"
import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // Devices larger than 1024px - Most laptops
        }}
      >
        <GridItem area={"nav"}>
          <NavBar></NavBar>
        </GridItem>
        <GridItem area={"aside"} bg={"coral"} hideBelow={"lg"}>
          Aside
        </GridItem>
        <GridItem area={"main"} bg={"orange"}>
          Main
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
