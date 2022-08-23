import { useState } from "react";
import { IChat } from "../types/IChat";

export function useLocalStorage (key: string, initialValue: IChat[]) {
  const [value, setValue] = useState<IChat[]>((): IChat[] => {
    try {
      return JSON.parse(localStorage.getItem(key) || '') || initialValue
    } catch {
      return initialValue
    }
  }); 

  const save = (value: IChat[]) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  return [value, save] as const;
}