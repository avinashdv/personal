"use client";

import { ListItem, UnorderedList } from "@chakra-ui/react";
export default function LineAnimation() {
  return (
    <UnorderedList styleType="none">
      <ListItem
        className="lineMove"
        width="50px"
        height={"3px"}
        background="rgba(225, 132, 37, .8)"
        position="absolute"
        top={"25%"}
        left={"15%"}
        zIndex={"1"}
      ></ListItem>
      <ListItem
        className="lineMove"
        width="66px"
        height={"3px"}
        background="rgba(225, 132, 37, .8)"
        position="absolute"
        top={"65%"}
        left={"22%"}
      ></ListItem>
      <ListItem
        className="lineMove"
        width="45px"
        height={"2px"}
        background="rgba(225, 132, 37, .8)"
        position="absolute"
        top={"38%"}
        left={"35%"}
      ></ListItem>
      <ListItem
        className="lineMove"
        width="46px"
        height={"2px"}
        background="rgba(225, 132, 37, .8)"
        position="absolute"
        bottom={"16%"}
        right={"34%"}
      ></ListItem>
      <ListItem
        className="lineMove"
        width="60px"
        height={"3px"}
        background="rgba(225, 132, 37, .8)"
        position="absolute"
        top={"25%"}
        right={"18%"}
      ></ListItem>
      <ListItem
        className="lineMove"
        width="40px"
        height={"2px"}
        background="rgba(225, 132, 37, .8)"
        position="absolute"
        bottom={"38%"}
        right={"10%"}
      ></ListItem>
    </UnorderedList>
  );
}
