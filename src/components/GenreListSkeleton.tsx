import React from "react"
import { Skeleton, SkeletonText, List, HStack } from "@chakra-ui/react"

const GenreListSkeleton = () => {
  return (
    <List.Item paddingY={"5px"}>
      <HStack>
        <Skeleton boxSize={"32px"} borderRadius={8} />
        <SkeletonText noOfLines={1} />
      </HStack>
    </List.Item>
  )
}

export default GenreListSkeleton
