import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { Quiz, QuizResult } from '@/types/quiz';

interface Props {
  isQuizEnd: boolean;
  quizData: Quiz[];
  quizResult: QuizResult;
  setIsQuizEnd: (isQuizEnd: boolean) => void;
  setQuizData: (quizData: Quiz[]) => void;
  setQuizResult: (quizResult: QuizResult) => void;
  resetQuizStore: () => void;
}

const initialQuizResult: QuizResult = {
  solvedTime: 0,
  answerList: [],
};

const useQuizStore = create<Props>()(
  persist(
    set => ({
      isQuizEnd: false,
      quizData: [],
      quizResult: initialQuizResult,
      setIsQuizEnd: (isQuizEnd: boolean) => set({ isQuizEnd }),
      setQuizData: (quizData: Quiz[]) => set({ quizData }),
      setQuizResult: (quizResult: QuizResult) => set({ quizResult }),
      resetQuizStore: () =>
        set({ isQuizEnd: false, quizResult: initialQuizResult, quizData: [] }),
    }),
    { name: 'quizStore', storage: createJSONStorage(() => localStorage) }
  )
);

export default useQuizStore;
