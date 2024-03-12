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
  font-size: 1.8rem;
  font-weight: 500;
`;

const AnswerWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding: 2rem;
  margin: 1rem 0;
  background-color: #f2f2f2;
  border-radius: 1rem;
`;

const AnswerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const AnswerItem = styled.li``;

const AnswerTextWrapper = styled.div<{ $isCorrect?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  color: ${({ $isCorrect }) => ($isCorrect ? '#00c896' : '#ff6b6b')};
`;

const AnswerTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;

const AnswerText = styled.p`
  text-align: center;
`;

export {
  AnswerItem,
  AnswerList,
  AnswerText,
  AnswerTextWrapper,
  AnswerTitle,
  AnswerWrapper,
  SubTitle,
  Title,
  Wrapper,
};
