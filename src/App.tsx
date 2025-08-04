import React from "react"
import { Grid, GridItem, Show } from "@chakra-ui/react"

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // Devices larger than 1024px - Most laptops
        }}
      >
        <GridItem area={"nav"} bg={"red"}>
          Nav
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
