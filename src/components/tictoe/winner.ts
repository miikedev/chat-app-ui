import { create } from "zustand";
import { combine } from "zustand/middleware";

type GameState = {
  history: (string | null)[][];
  currentMove: number;
  xIsNext: boolean;
};

export const useGameStore = create(
  combine(
    {
      history: [Array(9).fill(null)],
      currentMove: 0,
      xIsNext: true,
    } as GameState,
    (set) => {
      return {
        setHistory: (
          nextHistory:
            | (string | null)[][]
            | ((prev: (string | null)[][]) => (string | null)[][]),
        ) => {
          set((state) => ({
            history:
              typeof nextHistory === "function"
                ? nextHistory(state.history)
                : nextHistory,
          }));
        },
        setCurrentMove: (
          nextCurrentMove: number | ((prev: number) => number),
        ) => {
          set((state) => ({
            currentMove:
              typeof nextCurrentMove === "function"
                ? nextCurrentMove(state.currentMove)
                : nextCurrentMove,
          }));
        },
        setXIsNext: (nextXIsNext: boolean | ((prev: boolean) => boolean)) => {
          set((state) => ({
            xIsNext:
              typeof nextXIsNext === "function"
                ? nextXIsNext(state.xIsNext)
                : nextXIsNext,
          }));
        },
      };
    },
  ),
);
export function calculateWinner(squares: (string | null)[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export function calculateTurns(squares: (string | null)[]): number {
  return squares.filter((square) => !square).length;
}

export function calculateStatus(
  winner: string | null,
  turns: number,
  player: string,
): string {
  if (!winner && !turns) return "Draw";
  if (winner) return `Winner ${winner}`;

  return `Next player: ${player}`;
}
