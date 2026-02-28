import type { Difficulty } from "~/shared/types";
import type { RecentGame, Stats } from "./types";

type StatsState = {
  global: Stats | null;
  recentGames: RecentGame[];
};

type StatsActions = {
  registerGame: (params: RegisterGameParams) => void;
};

type StatsStore = {
  context: StatsState;
  actions: StatsActions;
};

type RegisterGameParams = {
  wordsFound: number;
  totalWords: number;
  timeTaken: number;
  difficulty: Difficulty;
  title: string;
  date: string;
};

export type { StatsState, StatsActions, StatsStore, RegisterGameParams };
