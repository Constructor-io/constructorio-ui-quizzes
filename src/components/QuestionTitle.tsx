interface QuestionTitleProps {
  title: string;
}

function QuestionTitle(props: QuestionTitleProps) {
  const { title } = props;

  return (
    <h1 className="question-title">{ title }</h1>
  );
}

export default QuestionTitle;
