import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.4rem;
  font-weight: 600;
`;

const SubTitle = styled.p`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  margin: 1rem 0 3rem;
  background-color: #f2f2f2;
  border-radius: 1rem;
`;

const AnswerNumberWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ddd;
`;

const SolvedTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding-top: 2rem;
`;

const ResultTextWrapper = styled.div<{ $isCorrect?: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  color: ${({ $isCorrect }) => ($isCorrect ? '#00c896' : '#ff6b6b')};
`;

const ResultTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;

const ResultText = styled.p`
  text-align: center;
`;

export {
  AnswerNumberWrapper,
  ResultText,
  ResultTextWrapper,
  ResultTitle,
  ResultWrapper,
  SolvedTimeWrapper,
  SubTitle,
  Title,
  Wrapper,
};
