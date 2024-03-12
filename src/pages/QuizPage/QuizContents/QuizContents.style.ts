import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuizTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.2rem;
  font-weight: 600;
`;

const QuizList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const QuizItem = styled.li`
  width: 100%;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const QuizButton = styled.button<{ $isSelected: boolean }>`
  width: 100%;
  padding: 1rem;
  font-size: 1.8rem;
  text-align: left;
  background-color: ${({ $isSelected }) => ($isSelected ? '#f2f2f2' : '#fff')};
  border: 1px solid #ddd;
  border-radius: 0.4rem;

  &:active {
    background-color: #f2f2f2;
  }
`;

export { QuizButton, QuizItem, QuizList, QuizTitle, Wrapper };
