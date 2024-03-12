import { useLocation, useNavigate, useParams } from 'react-router-dom';

import QuizTimer from '@/pages/QuizPage/QuizTimer/QuizTimer';
import { PATH } from '@/routes/path';

import BackHeader from './BackHeader/BackHeader';
import * as S from './Header.style';

export default function Header() {
  const location = useLocation();
  const isMain = location.pathname === PATH.ROOT;

  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate(PATH.ROOT);
  };

  return (
    <S.Wrapper>
      {id && <BackHeader />}
      {!id && !isMain && <S.Logo onClick={navigateToMain}>Home</S.Logo>}
      {!isMain && <QuizTimer />}
    </S.Wrapper>
  );
}
