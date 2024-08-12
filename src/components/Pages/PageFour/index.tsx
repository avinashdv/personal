"use client";
import Page from "../Page";

interface Props {
  isModalOpen: boolean;
  onModalOpen: () => void;
}

const PageFour: React.FC<Props> = ({ isModalOpen, onModalOpen }) => {
  return (
    <Page
      isModalOpen={isModalOpen}
      onModalOpen={onModalOpen}
      imgLink="bg-4.jpg"
      textContentTitle={"WHAT I WANT?"}
      sliderDataTitle={"LOOKING FOR"}
      specialDetailsOneTitle={"BUILDING FOR BETTER WORLD"}
      specialDetailsOneBtnText="Which is...."
      specialDetailsTwoTitle="CHALLENGING ENV..."
      specialDetailsTwoBtnText="What I meant..."
      pageValue={4}
    />
  );
};

export default PageFour;
