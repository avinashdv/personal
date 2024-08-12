"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import PageOneModalOne from "./PageOneModalOne";
import PageOneModalTwo from "./PageOneModalTwo";
import PageTwoModal from "./PageTwoModal";
import PageThreeModal from "./PageThreeModal";
import PageFiveModal from "./PageFiveModal";
import PageFourModal from "./PageFourModal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pageValue: number;
  pageId: number;
}

const moveIn = keyframes`
  from {width: 0%;}
  to {width: 70%;}
`;

const ModalData: React.FC<Props> = ({ isOpen, onClose, pageValue, pageId }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${moveIn} 0.4s ease-in-out`;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={{ base: "xs", xl: "xl" }}
    >
      <ModalOverlay />
      <ModalContent bgColor={"transparent"}>
        <ModalBody p={0} bgColor={"transparent"}>
          {pageValue === 1 && pageId === 1 && <PageOneModalOne />}
          {pageValue === 1 && pageId === 2 && <PageOneModalTwo />}
          {pageValue === 2 && <PageTwoModal />}
          {pageValue === 3 && pageId === 1 && <PageThreeModal id={pageId} />}
          {pageValue === 3 && pageId === 2 && <PageThreeModal id={pageId} />}
          {pageValue === 4 && pageId === 1 && <PageFourModal id={pageId} />}
          {pageValue === 4 && pageId === 2 && <PageFourModal id={pageId} />}
          {pageValue === 5 && pageId === 1 && <PageFiveModal />}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalData;
