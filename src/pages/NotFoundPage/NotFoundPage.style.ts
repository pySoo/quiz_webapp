import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1rem 2rem;
`;

const RollbackButton = styled.button`
  padding: 1rem 2rem;
  color: #fff;
  background-color: #00c896;
  border: 1px solid #00c896;
  border-radius: 1rem;
`;

const Title = styled.span`
  font-size: 1.8rem;
  color: #000;
`;

export { RollbackButton, Title, Wrapper };
