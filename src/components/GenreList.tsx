import React from "react"
import useGenres from "../hooks/useGenres"
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react"
import getCroppedImageUrl from "../services/image-url"
import GenreListSkeleton from "./GenreListSkeleton"

const GenreList = () => {
  const { data, isLoading, error } = useGenres()
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  if (error) return null

  return (
    <>
      {isLoading && (
        <List.Root unstyled={true}>
          {skeletons.map((skeleton) => (
            <GenreListSkeleton key={skeleton}></GenreListSkeleton>
          ))}
        </List.Root>
      )}
      {
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
      }
    </>
  )
}

export default GenreList
