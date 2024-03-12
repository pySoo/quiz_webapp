import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import ErrorFallback from '@/components/Shared/ErrorFallback/ErrorFallback';
import Header from '@/components/Shared/Header/Header';
import Spinner from '@/components/Shared/Spinner';

import * as S from './LayoutPage.style';

export default function LayoutPage() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Header />
        <Suspense fallback={<Spinner />}>
          <S.Wrapper>
            <Outlet />
          </S.Wrapper>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
