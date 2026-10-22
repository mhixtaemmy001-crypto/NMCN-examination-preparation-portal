import { Question, OptionKey } from '../types';

export function getOptionText(question: Question, key: OptionKey): string {
  switch (key) {
    case 'A':
      return question.optionA;
    case 'B':
      return question.optionB;
    case 'C':
      return question.optionC;
    case 'D':
      return question.optionD;
  }
}
