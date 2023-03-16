import React from 'react';

interface QuestionDescriptionProps {
  description: string;
}

function QuestionDescription(props: QuestionDescriptionProps) {
  const { description } = props;

  return <div className='cio-question-description'>{description}</div>;
}

export default QuestionDescription;
