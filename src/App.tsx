// import { useEffect } from 'react';
// import useCioClient from './hooks/useCioClient';
import singleQuestion from './dummy/singleSelect.json';
import multipleQuestion from './dummy/multipleSelect.json';
import SelectTypeQuestion from './components/SelectTypeQuestion';
import './index.css';
import './custom.css';

function App() {
  const { next_question: singleQ } = singleQuestion;
  const { next_question: multipleQ } = multipleQuestion;
  // const cioClient = useCioClient({ apiKey: 'key_jaqzPcUDnK66puIO' });

  // useEffect(() => {
  //   console.log(cioClient);
  //   cioClient?.quizzes.getQuizNextQuestion('coffee-quiz', { answers: [[true], ['seen'], ['1']] }).then((e) => console.log(e));
  // }, [cioClient]);

  return (
    <div>
      <SelectTypeQuestion question={singleQ} />
      <SelectTypeQuestion question={multipleQ} />
    </div>
  );
}

export default App;
