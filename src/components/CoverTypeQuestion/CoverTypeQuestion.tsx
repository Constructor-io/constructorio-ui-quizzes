import { useContext } from 'react';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuizContext from '../Quiz/context';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import CTAButton from '../CTAButton/CTAButton';
import { renderImages } from '../../utils';
import { QuestionTypes } from '../Quiz/actions';
import './coverTypeQuestion.css';

export default function CoverTypeQuestion() {
  const { dispatch, questionResponse, setShowResults, state, onBackClick } =
    useContext(QuizContext);
  let question;
  if (questionResponse) {
    question = questionResponse.next_question;
  }

  const onNextClick = () => {
    if (dispatch) {
      dispatch({ type: QuestionTypes.Cover });

      if (questionResponse?.is_last_question) {
        setShowResults!(true);
      }
    }
  };

  if (question) {
    return (
      <div className='cio-cover-question-container'>
        <div className='cio-cover-question-text'>
          <QuestionTitle title={question?.title} />
          <QuestionDescription description={question.description} />
          <CTAButton ctaText={question?.cta_text} onClick={onNextClick} />
          {state?.answers && state?.answers?.length > 0 && (
            <CTAButton ctaText='Back' onClick={onBackClick} />
          )}
        </div>
        <div className='cio-cover-question-img'>
          {question?.images ? renderImages(question.images) : ''}
        </div>
      </div>
    );
  }

  return null;
}
