import { ActionAnswerQuestion } from '../../../src/components/CioQuiz/actions';
import quizLocalReducer, {
  QuizLocalReducerState,
} from '../../../src/components/CioQuiz/quizLocalReducer';
import { localReducerCases } from './reducerTestCases';

describe('quizLocalReducer', () => {
  it.each(localReducerCases)(
    'test action=$action.type',
    ({ initialState: state, action, output }) => {
      expect(
        quizLocalReducer(state as QuizLocalReducerState, action as ActionAnswerQuestion)
      ).toEqual(output);
    }
  );
});
