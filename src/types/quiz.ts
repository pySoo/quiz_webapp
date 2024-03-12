export interface QuizResponse {
  response_code: number;
  results: Quiz[];
}

export interface Quiz {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: string;
  question: string;
  type: string;
}

export interface SelectedAnswer extends Quiz {
  id: number;
  selectedAnswer: string;
}

export interface SelectedQuiz {
  id: number;
  answer: string;
}

export interface QuizResult {
  solvedTime: number;
  answerList: SelectedQuiz[];
}
