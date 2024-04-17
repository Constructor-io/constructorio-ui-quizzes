import { ActionQuizAPI } from '../../../src/components/CioQuiz/actions';
import quizApiReducer, {
  QuizAPIReducerState,
} from '../../../src/components/CioQuiz/quizApiReducer';

import { apiReducerCases } from './reducerTestCases';

describe('quizApiReducer', () => {
  it.each(apiReducerCases)('action = $action.type', ({ initialState: state, action, expected }) => {
    expect(quizApiReducer(state as QuizAPIReducerState, action as ActionQuizAPI)).toEqual(expected);
  });
});
