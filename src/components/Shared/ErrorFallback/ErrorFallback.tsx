import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import { PATH } from '@/routes/path';

import * as S from './ErrorFallback.style';

export default function ErrorFallback() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <S.Wrapper>
      <S.Title>문제가 발생했어요</S.Title>
      <S.ButtonWrapper>
        <S.ResetButton onClick={reset}>다시 불러오기</S.ResetButton>
        <Link
          to={PATH.ROOT}
          replace
        >
          <S.RollbackButton>메인으로 돌아가기</S.RollbackButton>
        </Link>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
