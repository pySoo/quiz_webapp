import { useLocation } from 'react-router-dom';

import useQuizStore from '@/store/quizStore';

import Timer from '../../../components/Shared/Timer/Timer';
import * as S from './QuizTimer.style';

export default function QuizTimer() {
  const location = useLocation();
  const id = location.pathname.split('/')[1];
  const isResultPage = id === 'result';

  const quizResult = useQuizStore(state => state.quizResult);
  const setQuizResult = useQuizStore(state => state.setQuizResult);

  const handleTimeLeft = (time: number) => {
    if (isResultPage && time !== 0) {
      setQuizResult({ ...quizResult, solvedTime: time });
    }
  };

  return (
    <S.Wrapper>
      <Timer
        isEnd={isResultPage}
        getTimeLeft={handleTimeLeft}
      />
    </S.Wrapper>
  );
}
