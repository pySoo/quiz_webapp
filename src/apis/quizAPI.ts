import { QuizResponse } from '@/types/quiz';
import { decodeUnicode } from '@/utils/decode';
import { shuffleArray } from '@/utils/shuffle';

import { axiosInstance } from './axiosInstance';

export const getQuizList = async () => {
  const response = await axiosInstance.get<QuizResponse>(
    `?amount=10&category=9&difficulty=easy&type=multiple&encode=base64`
  );

  if (response.response_code === 0) {
    const data = response.results;

    const decodedQuizList = data.map(quiz => {
      const decodedCorrectAnswer = decodeUnicode(quiz.correct_answer);
      const decodedIncorrectAnswers = quiz.incorrect_answers.map(answer =>
        decodeUnicode(answer)
      );

      return {
        ...quiz,
        question: decodeUnicode(quiz.question),
        correct_answer: decodedCorrectAnswer,
        quizList: shuffleArray([
          decodedCorrectAnswer,
          ...decodedIncorrectAnswers,
        ]),
      };
    });

    return decodedQuizList;
  }

  return null;
};
