import QuestionTitle from './QuestionTitle';
import QuestionDescription from './QuestionDescription';
import CTAButton from './CTAButton';
import { Question } from '../types';
import { renderImages } from '../utils';

interface OpenTextQuestionProps {
  question: Question,
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>
}

function OpenTextQuestion(props: OpenTextQuestionProps) {
  const { question, onChangeHandler } = props;
  return (
    <div className="open-text-question-container">
      <div className="open-text-question-left">
        <QuestionTitle title={question.title} />
        <QuestionDescription description={question.description} />
        <input className="question-input-text" placeholder={question.input_placeholder} onChange={onChangeHandler} />
        <CTAButton ctaText={question.cta_text} />
      </div>
      <div className="open-text-question-right">
        {question.images ? renderImages(question.images) : ''}
      </div>
    </div>
  );
}

OpenTextQuestion.defaultProps = {
  onChangeHandler: null,
};

export default OpenTextQuestion;
