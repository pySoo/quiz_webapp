import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/apis/queryKey';
import { getQuizList } from '@/apis/quizAPI';
import useQuizStore from '@/store/quizStore';
import { shuffleArray } from '@/utils/shuffle';

export const useGetQuizList = (isStartPage: boolean) => {
  const quizData = useQuizStore(state => state.quizData);
  const setQuizData = useQuizStore(state => state.setQuizData);

  return useQuery({
    queryKey: [QUERY_KEYS.QUIZ_LIST],
    queryFn: () => getQuizList(),
    enabled: isStartPage && quizData.length === 0,
    onSuccess: data => {
      if (data) {
        // 정답과 오답 퀴즈 리스트를 섞습니다.
        const shuffledQuizList = data.map(quiz => {
          return {
            ...quiz,
            quizList: shuffleArray([
              quiz.correct_answer,
              ...quiz.incorrect_answers,
            ]),
          };
        });
        setQuizData(shuffledQuizList);
      }
    },
  });
};
