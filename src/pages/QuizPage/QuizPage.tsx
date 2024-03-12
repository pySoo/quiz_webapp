import { Navigate, useParams } from 'react-router-dom';

import { useGetQuizList } from '@/hooks/useQuizList';
import { PATH } from '@/routes/path';
import useQuizStore from '@/store/quizStore';

import QuizContents from './QuizContents/QuizContents';
import * as S from './QuizPage.style';

export default function QuizPage() {
  const params = useParams();
  if (!params.id) return null;

  const quizId = parseInt(params.id) ?? 0;
  const isStartPage = quizId === 0;

  useGetQuizList(isStartPage);

  const isQuizEnd = useQuizStore(state => state.isQuizEnd);
  const quizData = useQuizStore(state => state.quizData);
  const isDataEmpty = quizData.length === 0;

  // "/result" 경로에 도착하면 퀴즈가 종료된 것으로 간주합니다.
  // 종료된 후 뒤로가기를 통해 퀴즈 페이지로 돌아가는 현상을 막기 위함입니다.
  if (isQuizEnd) {
    alert('종료된 퀴즈입니다. 메인 페이지로 이동합니다.');
    return <Navigate to={PATH.ROOT} />;
  }

  // id가 0인 시작 페이지에서는 데이터를 받아옵니다.
  // 시작 페이지가 아니며 데이터가 비어있을 경우 메인 페이지로 이동합니다.
  if (!isStartPage && isDataEmpty) {
    alert('문제 정보를 받기 위해 메인 페이지로 이동합니다.');
    return <Navigate to={PATH.ROOT} />;
  }

  return (
    <S.Wrapper>
      {!isDataEmpty && (
        <QuizContents
          id={quizId}
          quiz={quizData[quizId]}
        />
      )}
    </S.Wrapper>
  );
}
