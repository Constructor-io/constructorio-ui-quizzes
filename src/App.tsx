import { useEffect } from 'react';
import useCioClient from './hooks/useCioClient';

function App() {
  const cioClient = useCioClient({ apiKey: 'ZqXaOfXuBWD4s3XzCI1q' });

  useEffect(() => {
    console.log(cioClient);
    cioClient?.quizzes.getQuizNextQuestion('test-quiz', { answers: [[1]] }).then((e) => console.log(e));
  }, [cioClient]);

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
