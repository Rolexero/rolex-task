import React from "react";
import { DogImageByBreeds, DogImageBySubBreeds } from "../src/services/dogBreeds";
import Image from "next/image";
type SelectProps = {
  data: DogImageByBreeds | DogImageBySubBreeds;
};

const ImageCard = ({ data }: SelectProps) => {
  const breedsImage = data?.message;
  return (
    <div>
      <div className="mt-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image src={breedsImage} alt="" width={500} height={500} />
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
