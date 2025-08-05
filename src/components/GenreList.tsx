import React from "react"
import useGenres from "../hooks/useGenres"
import { HStack, Image, List, Text } from "@chakra-ui/react"
import getCroppedImageUrl from "../services/image-url"

const GenreList = () => {
  const { data } = useGenres()
  return (
    <List.Root unstyled={true}>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  )
}

export default GenreList
