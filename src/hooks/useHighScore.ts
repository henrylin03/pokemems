import { useEffect, useState } from "react";

const getHighScore = (
  localStorageKey: string,
  defaultHighScore: number,
): number => {
  const savedHighScore = localStorage.getItem(localStorageKey);
  return savedHighScore === null ? defaultHighScore : Number(savedHighScore);
};

export const useHighScore = (
  localStorageKey: string,
  defaultHighScore: number,
) => {
  const [highScore, setHighScore] = useState(() =>
    getHighScore(localStorageKey, defaultHighScore),
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(highScore));
  }, [localStorageKey, highScore]);

  return [highScore, setHighScore];
};
