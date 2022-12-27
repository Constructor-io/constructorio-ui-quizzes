interface QuestionDescriptionProps {
  description: string;
}

function QuestionDescription(props: QuestionDescriptionProps) {
  const { description } = props;

  return (
    <p className="question-description">{ description }</p>
  );
}

export default QuestionDescription;
