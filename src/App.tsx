// import { useEffect } from 'react';
import { useState } from 'react';
// import useCioClient from './hooks/useCioClient';
import singleSelect from './dummy/singleSelect.json';
import multipleSelect from './dummy/multipleSelect.json';
import openText from './dummy/openText.json';
import SelectTypeQuestion from './components/SelectTypeQuestion';
import OpenTextQuestion from './components/OpenTextTypeQuestion';
import type { Question } from './types';
import './index.css';
import './custom.css';

function App() {
  const singleQ = singleSelect.next_question as unknown as Question;
  const multipleQ = multipleSelect.next_question as unknown as Question;
  const [openTextInput, setOpenTextInput] = useState('');
  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setOpenTextInput(event.currentTarget.value);
  };

  // const cioClient = useCioClient({ apiKey: 'key_jaqzPcUDnK66puIO' });
  // useEffect(() => {
  //   console.log(cioClient);
  //   cioClient?.quizzes.getQuizNextQuestion(
  // 'coffee-quiz', { answers: [[true], ['seen'], ['1']] }).then((e) => console.log(e));
  // }, [cioClient]);

  const openTextQ: Question = openText.next_question as unknown as Question;
  return (
    <div>
      <SelectTypeQuestion question={singleQ} />
      <SelectTypeQuestion question={multipleQ} />
      { openTextInput }
      <OpenTextQuestion question={openTextQ} onChangeHandler={onChangeHandler} />
    </div>
  );
}

export default App;
