import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { QUERY_KEYS } from '@/apis/queryKey';
import { PATH } from '@/routes/path';
import useQuizStore from '@/store/quizStore';

import * as S from './MainPage.style';

export default function MainPage() {
  const resetQuizStore = useQuizStore(state => state.resetQuizStore);

  const navigate = useNavigate();

  // QuizPage로 이동합니다.
  const navigateToQuiz = () => {
    navigate(`${PATH.QUIZ}/0`);
  };

  // 새로운 데이터를 받아오기 위해 쿼리를 초기화합니다.
  const queryClient = useQueryClient();
  queryClient.removeQueries([QUERY_KEYS.QUIZ_LIST]);

  // 퀴즈 스토어는 로컬 스토리지에 저장되어 새로고침 시에도 정보가 유지됩니다.
  // 메인 페이지에 접근할 경우 퀴즈 스토어를 초기화합니다.
  useEffect(() => {
    resetQuizStore();
  }, []);

  return (
    <S.Wrapper>
      <S.Title>오늘의 퀴즈</S.Title>
      <S.StartButton onClick={navigateToQuiz}>시작하기</S.StartButton>
    </S.Wrapper>
  );
}
