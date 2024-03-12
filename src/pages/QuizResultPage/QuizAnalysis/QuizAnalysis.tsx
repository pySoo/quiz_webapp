import { convertTime } from '@/utils/time';

import QuizPieChart from '../QuizPieChart/QuizPieChart';
import * as S from './QuizAnalysis.style';

interface Props {
  correctAnswerLength: number;
  incorrectAnswerLength: number;
  totalLength: number;
  solvedTime: number;
}

export default function QuizAnalysis({
  correctAnswerLength,
  incorrectAnswerLength,
  totalLength,
  solvedTime,
}: Props) {
  const resultList = [
    { title: '정답 수', isCorrect: true, result: correctAnswerLength },
    { title: '오답 수', result: incorrectAnswerLength },
  ];

  return (
    <S.Wrapper>
      <S.Title>퀴즈 결과</S.Title>
      <S.ResultWrapper>
        <S.AnswerNumberWrapper>
          {resultList.map(result => (
            <S.ResultTextWrapper
              key={result.title}
              $isCorrect={result.isCorrect}
            >
              <S.ResultTitle>{result.title}</S.ResultTitle>
              <S.ResultText>{result.result}개</S.ResultText>
            </S.ResultTextWrapper>
          ))}
        </S.AnswerNumberWrapper>
        <S.SolvedTimeWrapper>
          <S.ResultTitle>나의 풀이 시간</S.ResultTitle>
          <S.ResultText>{convertTime(solvedTime, 'kr')}</S.ResultText>
        </S.SolvedTimeWrapper>
      </S.ResultWrapper>
      <QuizPieChart
        dataset={[correctAnswerLength, incorrectAnswerLength]}
        totalLength={totalLength}
      />
    </S.Wrapper>
  );
}
