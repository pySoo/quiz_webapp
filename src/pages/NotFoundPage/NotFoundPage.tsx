import { useNavigate } from 'react-router-dom';

import { PATH } from '@/routes/path';

import * as S from './NotFoundPage.style';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate(PATH.ROOT);
  };

  return (
    <S.Wrapper>
      <S.Title>존재하지 않는 페이지 입니다</S.Title>
      <S.RollbackButton onClick={navigateToMain}>
        메인으로 돌아가기
      </S.RollbackButton>
    </S.Wrapper>
  );
}
