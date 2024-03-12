import { IoChevronBack } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';

import { PATH } from '@/routes/path';

import * as S from './BackHeader.style';

export default function BackHeader() {
  const location = useLocation();

  const navigate = useNavigate();

  const handleNavigateToBack = () => {
    if (location.state?.fromPrivateRoute) {
      navigate(PATH.ROOT);
    } else {
      navigate(-1);
    }
  };

  return (
    <S.Wrapper onClick={handleNavigateToBack}>
      <IoChevronBack size={20} />
    </S.Wrapper>
  );
}
