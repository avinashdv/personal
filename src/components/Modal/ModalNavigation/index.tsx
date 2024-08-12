"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  UnorderedList,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  dots: any;
}

const ModalNavigation: React.FC<Props> = ({ isOpen, onClose, dots }) => {
  return (
    <Modal isOpen={isOpen} size={"full"} onClose={onClose} colorScheme="blue">
      <ModalOverlay />
      <ModalContent
        backgroundColor="transparent"
        display={"flex"}
        height={"100%"}
        margin={0}
      >
        <ModalBody
          display={"flex"}
          backgroundColor={"transparent"}
          height={"100%"}
          margin={0}
          p={0}
        >
          <UnorderedList
            id="modalSlider"
            style={{ margin: "0px", listStyle: "none" }}
            width="full"
            display={"flex"}
            flex={2}
            backgroundColor={"transparent"}
            height={"100%"}
            margin={0}
            p={0}
          >
            {dots}
          </UnorderedList>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalNavigation;
