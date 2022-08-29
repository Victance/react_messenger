import { IResponse } from "../types/IResponse";

const BASE_URL = 'https://api.chucknorris.io';

export const getResponse = (): Promise<IResponse> => {
  return fetch(`${BASE_URL}/jokes/random`)
    .then(response => response.json());
};