import {createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          2: {value: "#282b30"}
        }
      }
    }
  },
})
