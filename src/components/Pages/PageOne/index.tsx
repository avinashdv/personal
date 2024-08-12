"use client";

import Page from "../Page";

interface Props {
  isModalOpen: boolean;
  onModalOpen: () => void;
}

const PageOne: React.FC<Props> = ({ isModalOpen, onModalOpen }) => {
  return (
    <Page
      isModalOpen={isModalOpen}
      onModalOpen={onModalOpen}
      imgLink="main-bg.jpg"
      textContentTitle={"WHO AM I?"}
      sliderDataTitle={"ABOUT"}
      specialDetailsOneTitle={"DEV AT HEART"}
      specialDetailsOneBtnText="I meant..."
      specialDetailsTwoTitle="CURIOSITY DRIVES ME"
      specialDetailsTwoBtnText="Which is..."
      pageValue={1}
    />
  );
};

export default PageOne;
