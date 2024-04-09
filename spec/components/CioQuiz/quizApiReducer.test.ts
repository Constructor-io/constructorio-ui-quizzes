import { ActionQuizAPI } from '../../../src/components/CioQuiz/actions';
import quizLocalReducer, {
  QuizAPIReducerState,
} from '../../../src/components/CioQuiz/quizApiReducer';

import { apiReducerCases } from './reducerTestCases';

describe('quizApiReducer', () => {
  it.each(apiReducerCases)(
    'action = $action.type',
    ({ initialState: state, action, expectedState }) => {
      expect(quizLocalReducer(state as QuizAPIReducerState, action as ActionQuizAPI)).toEqual(
        expectedState
      );
    }
  );
});
