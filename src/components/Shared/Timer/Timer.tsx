import { useEffect, useRef, useState } from 'react';

import { convertTime, MINUTES_IN_MS, MS } from '@/utils/time';

import * as S from './Timer.style';

interface Props {
  minutes?: number;
  seconds?: number;
  isEnd?: boolean;
  getTimeLeft?: (time: number) => void;
}

/**
 * hh시간 mm분 ss초 형태의 시간을 보여주는 Timer 컴포넌트
 * 분, 초 단위로 시간을 받아서 보여줍니다.
 * padLength를 통해 자릿수를 변경할 수 있습니다.
 * @param [minutes] - `옵션`
 * @param [seconds] - `옵션`
 * @param [isEnd] - `옵션` 타이머 시간이 종료됨을 알려줍니다.
 * @param [getTimeLeft] - `옵션`
 */

export default function Timer({
  minutes = 0,
  seconds = 0,
  isEnd = false,
  getTimeLeft,
}: Props) {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(
    minutes * MINUTES_IN_MS + seconds * MS
  );

  useEffect(() => {
    if (isEnd) {
      if (timer.current != null) {
        clearInterval(timer.current);
      }
      getTimeLeft?.(timeLeft);
    }
  }, [isEnd]);

  useEffect(() => {
    if (isEnd) return;

    timer.current = setInterval(() => {
      setTimeLeft(prevTime => prevTime + MS);
    }, MS);

    return () => {
      if (timer.current != null) {
        clearInterval(timer.current);
      }
    };
  }, [isEnd]);

  return (
    <S.Wrapper>
      {isEnd ? '퀴즈 종료' : convertTime(timeLeft, 'clock')}
    </S.Wrapper>
  );
}
