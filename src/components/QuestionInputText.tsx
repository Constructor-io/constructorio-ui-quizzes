interface QuestionInputTextProps {
  id?: string,
  label?: string,
  placeholder?: string,
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>
}

function QuestionInputText(props: QuestionInputTextProps) {
  const {
    id,
    label,
    placeholder,
    onChangeHandler,
  } = props;

  return (
    <div className="cio-question-input-text-container">
      {label ? <label htmlFor={id} className="cio-question-input-text-label">{label}</label> : ''}
      <input id={id} className="cio-question-input-text" placeholder={placeholder} onChange={onChangeHandler} />
    </div>
  );
}

QuestionInputText.defaultProps = {
  id: crypto.randomUUID().split('-')[0],
  label: null,
  placeholder: '',
  onChangeHandler: null,
};

export default QuestionInputText;
