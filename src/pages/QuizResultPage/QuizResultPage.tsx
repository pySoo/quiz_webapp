import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATH } from '@/routes/path';
import useQuizStore from '@/store/quizStore';

import QuizAnalysis from './QuizAnalysis/QuizAnalysis';
import * as S from './QuizResultPage.style';
import WrongAnswerNote from './WrongAnswerNote/WrongAnswerNote';

export default function QuizResultPage() {
  const quizData = useQuizStore(state => state.quizData);
  const quizResult = useQuizStore(state => state.quizResult);

  const { answerList, solvedTime } = quizResult;
  const setIsQuizEnd = useQuizStore(state => state.setIsQuizEnd);

  const navigate = useNavigate();

  // 기존 quizData에 선택한 답과 오답 노트에서의 번호 표기를 위해 id를 추가합니다.
  const selectedAnswerList = quizData.map((quiz, index) => {
    return { ...quiz, id: index, selectedAnswer: answerList[index].answer };
  });

  const correctAnswer = selectedAnswerList.filter(
    (quiz, index) => quiz.correct_answer === answerList[index].answer
  );

  const incorrectAnswer = selectedAnswerList.filter(
    (quiz, index) => quiz.correct_answer !== answerList[index].answer
  );

  useEffect(() => {
    setIsQuizEnd(true);

    // quizData는 로컬 스토리지에 저장되며 MainPage 진입 시 초기화 됩니다.
    // url 입력을 통해 "/result"에 접근한 경우를 고려하여 메인 페이지로 이동합니다.
    if (quizData.length === 0) {
      alert('퀴즈 결과가 없습니다. 메인 페이지로 이동합니다.');
      navigate(PATH.ROOT);
    }
  }, [quizData]);

  return (
    <>
      {quizData.length !== 0 && (
        <S.Wrapper>
          <QuizAnalysis
            correctAnswerLength={correctAnswer.length}
            incorrectAnswerLength={incorrectAnswer.length}
            totalLength={quizData.length}
            solvedTime={solvedTime}
          />
          <WrongAnswerNote answerList={incorrectAnswer} />
        </S.Wrapper>
      )}
    </>
  );
}
