import { getPercentage } from '../utils/math';
import { MOCK_QUIZ_RESULT, MOCK_SELECTED_ANSWER } from './mockData';

describe('퀴즈 정답 개수 검증', () => {
  test('선택된 답안의 정답 개수가 일치하는지 검사합니다.', () => {
    const correctAnswer = MOCK_QUIZ_RESULT.filter(
      (quiz, index) =>
        quiz.correct_answer === MOCK_SELECTED_ANSWER[index].answer
    );

    expect(correctAnswer.length).toBe(4);
  });

  test('선택된 답안의 오답 개수가 일치하는지 검사합니다.', () => {
    const incorrectAnswer = MOCK_QUIZ_RESULT.filter(
      (quiz, index) =>
        quiz.correct_answer !== MOCK_SELECTED_ANSWER[index].answer
    );

    expect(incorrectAnswer.length).toBe(6);
  });

  test('오답과 정답 개수의 합이 총 문항의 개수와 같은지 검사합니다.', () => {
    const correctAnswer = MOCK_QUIZ_RESULT.filter(
      (quiz, index) =>
        quiz.correct_answer === MOCK_SELECTED_ANSWER[index].answer
    );

    const incorrectAnswer = MOCK_QUIZ_RESULT.filter(
      (quiz, index) =>
        quiz.correct_answer !== MOCK_SELECTED_ANSWER[index].answer
    );

    expect(correctAnswer.length + incorrectAnswer.length).toBe(
      MOCK_QUIZ_RESULT.length
    );
  });
});

describe('퀴즈 정오답 비율 검증', () => {
  test('퀴즈의 정답 비율이 일치하는지 검사합니다.', () => {
    const correctAnswer = MOCK_QUIZ_RESULT.filter(
      (quiz, index) =>
        quiz.correct_answer === MOCK_SELECTED_ANSWER[index].answer
    );

    expect(getPercentage(correctAnswer.length, MOCK_QUIZ_RESULT.length)).toBe(
      40
    );
  });

  test('퀴즈의 오답 비율이 일치하는지 검사합니다.', () => {
    const incorrectAnswer = MOCK_QUIZ_RESULT.filter(
      (quiz, index) =>
        quiz.correct_answer !== MOCK_SELECTED_ANSWER[index].answer
    );

    expect(getPercentage(incorrectAnswer.length, MOCK_QUIZ_RESULT.length)).toBe(
      60
    );
  });
});
