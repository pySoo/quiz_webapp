import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/apis/queryKey';
import { getQuizList } from '@/apis/quizAPI';
import useQuizStore from '@/store/quizStore';

export const useGetQuizList = (isStartPage: boolean) => {
  const quizData = useQuizStore(state => state.quizData);
  const setQuizData = useQuizStore(state => state.setQuizData);

  return useQuery({
    queryKey: [QUERY_KEYS.QUIZ_LIST],
    queryFn: () => getQuizList(),
    enabled: isStartPage && quizData.length === 0,
    onSuccess: data => {
      if (data) {
        setQuizData(data);
      }
    },
  });
};
