import styled from 'styled-components';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 5.6rem;
  padding: 1rem 2.4rem;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 80.8%, 0.5);
`;

const Logo = styled.span`
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

export { Logo, Wrapper };
