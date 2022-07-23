import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { DogBreeds } from "../models/DogBreeds";

export type DogBreeds = {
  message: {[breed: string]: Array<string>};
};

export type DogImageByBreeds = {
  message: string;
}

export type DogImageBySubBreeds = {
  message: string;
};

export type QueryArgument = {
  breedName: string;
  subBreedsName: string;
};



export const dogBreedsApi = createApi({
  reducerPath: "dogBreeds",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dog.ceo/",
  }),
  endpoints: (builder) => ({
    getAllDogsBreeds: builder.query<DogBreeds, void>({
      query: () => "api/breeds/list/all",
    }),
    getDogsImageByBreed: builder.query<DogImageByBreeds, string>({
      query: (breedName) => `api/breed/${breedName}/images/random`,
    }),
    getDogsImageBySubBreed: builder.query<DogImageByBreeds, QueryArgument>({
      query: ({ breedName, subBreedsName }) =>
        `api/breed/${breedName}/${subBreedsName}/images/random`,
    }),
  }),
});

export const { useGetAllDogsBreedsQuery, useGetDogsImageByBreedQuery, useGetDogsImageBySubBreedQuery } = dogBreedsApi;
