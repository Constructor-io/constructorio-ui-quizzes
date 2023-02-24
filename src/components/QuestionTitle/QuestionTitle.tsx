import React from 'react';

interface QuestionTitleProps {
  title: string;
}

function QuestionTitle(props: QuestionTitleProps) {
  const { title } = props;

  return <h1 className='cio-question-title'>{title}</h1>;
}

export default QuestionTitle;
