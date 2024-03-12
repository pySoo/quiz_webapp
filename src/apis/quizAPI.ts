import { QuizResponse } from '@/types/quiz';

import { axiosInstance } from './axiosInstance';

export const getQuizList = async () => {
  const response = await axiosInstance.get<QuizResponse>(
    `?amount=10&category=9&difficulty=easy&type=multiple`
  );

  if (response.response_code === 0) {
    return response.results;
  }

  return null;
};
