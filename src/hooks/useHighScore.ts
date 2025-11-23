import { useEffect, useState } from "react";

const getHighScore = (
  localStorageKey: string,
  defaultHighScore: number,
): number => {
  const savedHighScore = localStorage.getItem(localStorageKey);
  return savedHighScore === null ? defaultHighScore : Number(savedHighScore);
};

type UseHighScoreReturnedValue = [
  number,
  React.Dispatch<React.SetStateAction<number>>,
];
export const useHighScore = (
  localStorageKey: string,
  defaultHighScore: number,
): UseHighScoreReturnedValue => {
  const [highScore, setHighScore] = useState<number>(() =>
    getHighScore(localStorageKey, defaultHighScore),
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(highScore));
  }, [localStorageKey, highScore]);

  return [highScore, setHighScore];
};
