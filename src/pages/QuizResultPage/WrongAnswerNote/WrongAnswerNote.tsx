import { SelectedAnswer } from '@/types/quiz';

import * as S from './WrongAnswerNote.style';

interface Props {
  answerList: SelectedAnswer[];
}

export default function WrongAnswerNote({ answerList }: Props) {
  return (
    <S.Wrapper>
      <S.Title>{`오답 노트 (${answerList.length}문제)`}</S.Title>
      <S.AnswerList>
        {answerList.map(answer => (
          <S.AnswerItem key={answer.question}>
            <S.SubTitle>{`문제 ${answer.id + 1}번`}</S.SubTitle>
            <p>{answer.question}</p>
            <S.AnswerWrapper>
              <S.AnswerTextWrapper $isCorrect={true}>
                <S.AnswerTitle>정답</S.AnswerTitle>
                <S.AnswerText>{answer.correct_answer}</S.AnswerText>
              </S.AnswerTextWrapper>
              <S.AnswerTextWrapper>
                <S.AnswerTitle>선택한 답</S.AnswerTitle>
                <S.AnswerText>{answer.selectedAnswer}</S.AnswerText>
              </S.AnswerTextWrapper>
            </S.AnswerWrapper>
          </S.AnswerItem>
        ))}
      </S.AnswerList>
    </S.Wrapper>
  );
}
