"use client";

import Page from "../Page";

interface Props {
  isModalOpen: boolean;
  onModalOpen: () => void;
}

const PageFive: React.FC<Props> = ({ isModalOpen, onModalOpen }) => {
  return (
    <Page
      isModalOpen={isModalOpen}
      onModalOpen={onModalOpen}
      imgLink="bg-5.jpg"
      textContentTitle={"MEET ME!"}
      sliderDataTitle={"CONTACT"}
      specialDetailsOneTitle={"Let's Connect"}
      specialDetailsOneBtnText="Send Mail"
      specialDetailsTwoTitle="Social Media"
      specialDetailsTwoBtnText="Explore"
      pageValue={5}
    />
  );
};

export default PageFive;
