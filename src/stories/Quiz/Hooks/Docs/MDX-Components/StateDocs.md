### state

>Quiz state. This includes quiz answers and info.

  ```jsx
  const { state } = useCioQuiz(args);
  ```

- `answers`: Is the user entered/selected answers including:
  
  | property    | type                                                          | description                                 |
  |-------------|---------------------------------------------------------------|---------------------------------------------|
  | inputs      | `[key: string]: {type: string , value: string | string[];}` | Is the user entered/selected answers inputs |
  | isLastAnswer| Boolean                                                       | whether it's the last question              |


- `quiz`: Quiz info including:
  
  | property                      | type                                    | description                          |
  | :-----------------------------| :---------------------------------------| :------------------------------------|
  | currentQuestion               | Object                                  | The current question in the quiz.    |
  | results                       | Object                                  | The quiz results                     |
  | requestState                  | `'STALE'|'LOADING'|'SUCCESS'|'ERROR'` | The API request state                |
  | versionId                     | string                                  | The quiz version                     |
  | sessionId                     | string                                  | The quiz session                     |
  | selectedOptionsWithAttributes | string[]                                | The selected options with attributes |
