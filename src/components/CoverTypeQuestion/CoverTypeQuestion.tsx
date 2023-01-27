import { useContext } from 'react';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuizContext from '../CioQuiz/context';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import CTAButton from '../CTAButton/CTAButton';
import { renderImages } from '../../utils';
import { QuestionTypes } from '../CioQuiz/actions';
import './coverTypeQuestion.css';

export default function CoverTypeQuestion() {
  const { questionResponse, state, onBackClick, quizNextHandler } = useContext(QuizContext);
  let question;
  if (questionResponse) {
    question = questionResponse.next_question;
  }

  const onNextClick = () => {
    if (quizNextHandler) {
      quizNextHandler({ type: QuestionTypes.Cover });
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
