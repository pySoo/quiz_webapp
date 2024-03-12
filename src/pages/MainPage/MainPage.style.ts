import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
`;

const StartButton = styled.button`
  width: 100%;
  padding: 1.6rem 1rem;
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  background-color: #00c896;
  border-radius: 1rem;
`;

export { StartButton, Title, Wrapper };
