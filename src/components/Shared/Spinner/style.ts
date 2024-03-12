import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SpinnerAnimation = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-top: 4px solid #ddd;
  border-right: 4px solid transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { SpinnerAnimation, Wrapper };
