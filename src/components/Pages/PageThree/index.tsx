"use client";
import Page from "../Page";

interface Props {
  isModalOpen: boolean;
  onModalOpen: () => void;
}

const PageThree: React.FC<Props> = ({ isModalOpen, onModalOpen }) => {
  return (
    <Page
      isModalOpen={isModalOpen}
      onModalOpen={onModalOpen}
      imgLink="bg-3.jpg"
      textContentTitle={"WHAT I KNOW?"}
      sliderDataTitle={"EDUCATION"}
      specialDetailsOneTitle={"Bachelor's in Electronics"}
      specialDetailsOneBtnText="Let's see"
      specialDetailsTwoTitle="MASTER'S IN INFORMATION TECHNOLOGY"
      specialDetailsTwoBtnText="Check Out"
      pageValue={3}
    />
  );
};

export default PageThree;
