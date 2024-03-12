import { useNavigate } from 'react-router-dom';

import { PATH } from '@/routes/path';
import useQuizStore from '@/store/quizStore';
import { Quiz } from '@/types/quiz';
import { shuffleArray } from '@/utils/shuffle';
import { toastify } from '@/utils/toast';

import * as S from './QuizContents.style';

interface Props {
  id: number;
  quiz: Quiz;
}

const FINAL_ID = 9;

export default function QuizContents({ id, quiz }: Props) {
  const quizResult = useQuizStore(state => state.quizResult);
  const setQuizResult = useQuizStore(state => state.setQuizResult);

  // 정답과 오답 퀴즈 리스트를 섞습니다.
  const shuffledQuizList = shuffleArray([
    quiz.correct_answer,
    ...quiz.incorrect_answers,
  ]);

  const { answerList } = quizResult;

  const navigate = useNavigate();

  // 정오답 여부를 알려주는 토스트 메시지를 띄웁니다.
  const notifyAnswer = (answer: string) => {
    if (answer === quiz.correct_answer) {
      toastify.success('정답입니다! 🎉');
    } else {
      toastify.error('오답입니다 🥲');
    }
  };

  // 퀴즈가 끝났을 때 QuizResultPage로 이동합니다.
  const navigatePage = () => {
    if (id === FINAL_ID) {
      navigate(PATH.QUIZ_RESULT);
      return;
    }

    navigate(`${PATH.QUIZ}/${id + 1}`);
  };

  // 퀴즈 버튼을 클릭했을 때 실행되는 함수입니다.
  const handleClickQuizButton = (answer: string) => {
    notifyAnswer(answer);

    // 뒤로가기 시 재선택을 하는 경우를 고려하여 기존의 답을 제거하고 새로운 답을 추가합니다.
    const filteredAnswer = answerList.filter(data => data.id !== id);
    setQuizResult({
      ...quizResult,
      answerList: [...filteredAnswer, { id, answer }],
    });

    navigatePage();
  };

  return (
    <S.Wrapper>
      <S.QuizTitle>{quiz.question}</S.QuizTitle>
      <S.QuizList>
        {shuffledQuizList.map((quiz, index) => (
          <S.QuizItem key={index}>
            <S.QuizButton
              $isSelected={
                answerList.filter(data => data.id === id)?.[0]?.answer === quiz
              }
              onClick={() => handleClickQuizButton(quiz)}
            >
              {`${index + 1}. ${quiz}`}
            </S.QuizButton>
          </S.QuizItem>
        ))}
      </S.QuizList>
    </S.Wrapper>
  );
}
