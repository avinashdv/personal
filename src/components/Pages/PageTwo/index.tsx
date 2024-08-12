"use client";
import Page from "../Page";

interface Props {
  isModalOpen: boolean;
  onModalOpen: () => void;
}

const PageTwo: React.FC<Props> = ({ isModalOpen, onModalOpen }) => {
  return (
    <Page
      isModalOpen={isModalOpen}
      onModalOpen={onModalOpen}
      imgLink="bg-2.jpg"
      textContentTitle={"WHAT I DO?"}
      sliderDataTitle={"WORK"}
      specialDetailsOneTitle={"SDE AT AEM"}
      specialDetailsOneBtnText="MORE..."
      specialDetailsTwoTitle="SDE AT GEEKSTER"
      specialDetailsTwoBtnText="Details"
      pageValue={2}
    />
  );
};

export default PageTwo;
