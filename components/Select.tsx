import React, { useState } from "react";
import {
  DogBreeds,
  useGetDogsImageByBreedQuery,
  DogImageByBreeds,
  DogImageBySubBreeds,
  useGetDogsImageBySubBreedQuery,
} from "../src/services/dogBreeds";
import ImageCard from "./ImageCard";

type SelectProps = {
  dogs: DogBreeds;
};

const Select = ({ dogs }: SelectProps) => {
  const dogBreedsArray = Object.entries(dogs?.message);
  const [subBreeds, setSubBreeds] = useState<string[]>([]);
  const [breedName, setBreedName] = useState<string>("");
  const [subBreedsName, setSubBreedsName] = useState<string>("");
  const { data } = useGetDogsImageByBreedQuery(breedName);
  const { data: subBreedsImage } = useGetDogsImageBySubBreedQuery({
    breedName,
    subBreedsName,
  });

  const DogImageByBreeds: DogImageByBreeds | undefined = data;
  const DogImageBySubBreeds: DogImageBySubBreeds | undefined = subBreedsImage;

  const dogBreeds = dogBreedsArray.map((key) => {
    return key;
  });
  const breeds = dogBreeds.map((val) => {
    return val;
  });

  const breedContent = breeds.map((val, i) => {
    return (
      <option key={i} value={val[0]}>
        {val[0]}
      </option>
    );
  });

  const subBreedContent = subBreeds?.map((val, i) => {
    return (
      <option key={i} value={val}>
        {val}
      </option>
    );
  });

  const changeBreedHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target.value;
    setBreedName(target);
    setSubBreedsName('');
    breeds.map((breed) => {
      if (target === breed[0]) {
        breed[1].length > 0 ? setSubBreeds(breed[1]) : setSubBreeds([]);
      }
    });
  };

  const changeSubBreedHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target.value;
    setSubBreedsName(target);
  };

  return (
    <div className="w-96 container mx-auto mt-16">
      <label
        htmlFor="countries"
        className="block mb-2 text-2xl text-center font-medium text-gray-900 dark:text-gray-400"
      >
        Select a breed of dog
      </label>
      <select
        value={breedName}
        onChange={changeBreedHandler}
        id="dogBreeds"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled>
          Choose a dog breed
        </option>
        {breedContent}
      </select>
      {subBreeds?.length > 0 && (
        <div className="mt-6">
          <label
            htmlFor="countries"
            className="block mb-2 text-2xl text-center font-medium text-gray-900 dark:text-gray-400"
          >
            {`Select a sub breed of ${breedName}`}
          </label>
          <select
            value={subBreedsName}
            onChange={changeSubBreedHandler}
            id="dogBreeds"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" disabled>
              Choose a sub breed
            </option>
            {subBreedContent}
          </select>
        </div>
      )}

      <div>
        {DogImageByBreeds !== undefined && subBreeds.length === 0 ? (
          <ImageCard data={DogImageByBreeds} />
        ) : (
          DogImageBySubBreeds &&
          subBreedsName && <ImageCard data={DogImageBySubBreeds} />
        )}
      </div>
    </div>
  );
};

export default Select;
