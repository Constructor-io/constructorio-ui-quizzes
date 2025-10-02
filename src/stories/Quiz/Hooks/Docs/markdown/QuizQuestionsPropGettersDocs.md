- #### Quiz questions

  - ##### `getOpenTextInputProps`

    This method returns the props that should be applied to an input `<input>` on quiz questions of type OpenText.

    This handles input state, events and styles.

    ```jsx
    const { getOpenTextInputProps } = useCioQuiz(args);

    const ui = (
      /* input */
      <input {...getOpenTextInputProps()} />
    );
    ```

  - ##### `getSelectInputProps`

    This method should be applied to an element of type `<li>` or `<dev>` on quiz questions of type SelectQuestion.

    This handles selection state, events and styles.

    It is required to pass an `option` to `getSelectInputProps` in order to be applied.

      - `option`: Select question option data that will be selected when the user
        selects a particular option.

    ```jsx
    const { getSelectInputProps, state } = useCioQuiz(args);
    const currentQuestionData = state.quiz?.currentQuestion?.next_question;

    const ui = (
      <div>
        {currentQuestionData.options.map((option) => (
          <div {...getSelectInputProps(option)}>
            <div className='cio-question-option-value'>{option.value}</div>
          </div>
        ))}
      </div>
    );
    ```

  - ##### `getNextQuestionButtonProps`

    This method should be applied to an element of type `<button>` or `<div>` on any quiz question.

    This handles the styles and the click event for going to the next question.

    ```jsx
    const { getNextQuestionButtonProps } = useCioQuiz(args);

    const ui = (
      /* button, dev, ... */
      <button {...getNextQuestionButtonProps()}>Continue</button>
    );
    ```

  - ##### `getPreviousQuestionButtonProps`

    This method should be applied to an element of type `<button>` or `<div>` on quiz.

    This handles the styles and the click event for going to the previous question.

    ```jsx
    const { getPreviousQuestionButtonProps } = useCioQuiz(args);

    const ui = (
      /* button, dev, ... */
      <button {...getPreviousQuestionButtonProps()}>Back</button>
    );
    ```


  - ##### `getSkipQuestionButtonProps`

    This method should be applied to an element of type `<button>` or `<div>` on quiz.

    This handles the styles and the click event for skipping the current question.

    ```jsx
    const { getSkipQuestionButtonProps } = useCioQuiz(args);

    const ui = (
      /* button, dev, ... */
      <button {...getSkipQuestionButtonProps()}>Skip</button>
    );
    ```

  - ##### `getResetQuizButtonProps`

    This method should be applied to an element of type `<button>` or `<div>` on quiz.

    This handles resetting the quiz state and going back to the first question of the quiz.

    ```jsx
    const { getResetQuizButtonProps } = useCioQuiz(args);

    const ui = (
      /* button, dev, ... */
      <button {...getResetQuizButtonProps()}>Reset Quiz</button>
    );
    ```

  - ##### `getJumpToQuestionButtonProps`

    This method should be applied to an element of type `<button>` or `<div>` on quiz.

    This handles the styles and the click event for jumping back to a specific question.

    It is required to pass `questionId` to `getJumpToQuestionButtonProps` in order to apply the logic.

     - `questionId`: The ID of the question the quiz should navigate back to.

    ```jsx
    const { getJumpToQuestionButtonProps } = useCioQuiz(args);

    const ui = (
      /* button, dev, ... */
      <button {...getJumpToQuestionButtonProps(questionId)}>Jump To Question 2</button>
    );
    ```

  - ##### `getQuizImageProps`

      This method should be applied to an element of type `<image>` or `<div>` on quiz images of any question type.

      ```jsx
      const { getQuizImageProps } = useCioQuiz(args);

      const ui = (
        <img {...getQuizImageProps()} className='cio-question-image' />
      );
      ```
