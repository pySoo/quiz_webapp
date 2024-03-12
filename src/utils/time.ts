export const MS = 1000;
export const MINUTES_IN_MS = 60 * MS;

export const convertTime = (time: number, format: 'kr' | 'clock') => {
  const minutes = Math.floor((time / MINUTES_IN_MS) % 60);
  const hours = Math.floor(time / (60 * MINUTES_IN_MS));
  const seconds = Math.floor((time / MS) % 60);

  switch (format) {
    case 'kr':
      if (hours > 0) {
        return `${hours}시간 ${minutes}분 ${seconds}초`;
      }
      return `${minutes}분 ${seconds}초`;

    case 'clock':
      const convertedMinutes = String(minutes).padStart(2, '0');
      const convertedSeconds = String(seconds).padStart(2, '0');
      if (hours > 0) {
        return `${hours}:${convertedMinutes}:${convertedSeconds}`;
      }
      return `${convertedMinutes}:${convertedSeconds}`;
  }
};
