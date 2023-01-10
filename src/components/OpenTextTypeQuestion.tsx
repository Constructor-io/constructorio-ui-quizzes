import { useContext, useState } from 'react';
import QuestionTitle from './QuestionTitle';
import QuestionDescription from './QuestionDescription';
import CTAButton from './CTAButton';
import { renderImages } from '../utils';
import QuizContext from './Quiz/context';
import { QuestionTypes } from './Quiz/actions';

function OpenTextQuestion() {
  const [input, setInput] = useState('');
  const { dispatch, questionRespone } = useContext(QuizContext);
  const { next_question: question } = questionRespone;

  return (
    <div className="open-text-question-container">
      <div className="open-text-question-left">
        <QuestionTitle title={question.title} />
        <QuestionDescription description={question.description} />
        <input
          className="question-input-text"
          placeholder={question.input_placeholder}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <CTAButton
          disabled={!input}
          ctaText={question.cta_text}
          onClick={() => {
            if (dispatch && input) {
              dispatch({ type: QuestionTypes.OpenText });
            }
          }}
        />
      </div>
      <div className="open-text-question-right">
        {question.images ? renderImages(question.images) : ''}
      </div>
    </div>
  );
}

export default OpenTextQuestion;
