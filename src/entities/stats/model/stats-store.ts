import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { Difficulty } from "~/shared/types";
import type {
  RegisterGameParams,
  StatsState,
  StatsStore,
} from "./stats-store-types";
import type { RecentGame } from "./types";

const getMostPlayedDifficulty = (games: RecentGame[]) => {
  if (games.length === 0) return "easy" as Difficulty;

  const playedDifficulties = games.reduce(
    (acc, cur) => {
      acc[cur.difficulty] = (acc[cur.difficulty] ?? 0) + 1;
      return acc;
    },
    {} as Record<Difficulty, number>
  );

  const mostPlayedDifficulty = (
    Object.entries(playedDifficulties) as [Difficulty, number][]
  ).sort((a, b) => b[1] - a[1])[0];

  return mostPlayedDifficulty?.[0] ?? "easy";
};

const defaultInitState: StatsState = {
  global: null,
  recentGames: [],
};

const useStatsStore = create<StatsStore>()(
  persist(
    immer((set) => ({
      context: {
        ...defaultInitState,
      },
      actions: {
        registerGame: (params: RegisterGameParams) =>
          set((state) => {
            if (!state.context.global) {
              state.context.global = {
                gamesPlayed: 0,
                wordsFound: 0,
                averageScore: 100,
                bestStreak: 0,
                totalTime: 0,
                favoriteDifficulty: "easy",
              };
            }

            state.context.global.gamesPlayed += 1;
            state.context.global.bestStreak += 1;
            state.context.global.wordsFound += params.wordsFound;

            const newScore = Math.round(
              (params.totalWords / params.wordsFound) * 100
            );

            state.context.global.averageScore = Math.round(
              (state.context.global.averageScore + newScore) / 2
            );

            state.context.global.totalTime += params.timeTaken;

            state.context.recentGames.push({
              title: params.title,
              score: newScore.toString(),
              time: params.timeTaken.toString(),
              date: params.date,
              difficulty: params.difficulty,
            });

            state.context.global.favoriteDifficulty = getMostPlayedDifficulty(
              state.context.recentGames
            );
          }),
      },
    })),
    {
      name: "stats-storage",
      partialize: (state) => ({ context: state.context }),
    }
  )
);

export { useStatsStore, defaultInitState as statsStoreDefaultInitState };
