- #### Quiz results

  - ##### `getAddToCartButtonProps`

    This method should be applied to an element of type `<button>` or `<div>` on quiz results page on quiz result item.

    It is required to pass an `item` and `price` to `getAddToCartButtonProps` in order to apply the logic and tracking.

    - `item`: Result item of the quiz that will be selected to be tracked when the user
          clicks Add to cart button.
    - `price`: Price of the result that will be sent with the tracking event.

      ```jsx
      const { getAddToCartButtonProps } = useCioQuiz(args);

      const ui = (
        /* button, dev, ... */
        <button {...getAddToCartButtonProps(item, price)}>Add to Cart</button>
      );
      ```

  - ##### `getAddToFavoritesButtonProps`

    This method should be applied to an element of type `<button>` or `<div>` on any quiz question.

    It is required to pass an `item` and `price` to `getAddToFavoritesButtonProps` in order to apply the logic and tracking.

    - `item`: Result item of the quiz that will be selected to be tracked when the user
          clicks Add to favorites button.
    - `price`: Price of the result that will be sent with the tracking event.

      ```jsx
      const { getAddToFavoritesButtonProps } = useCioQuiz(args);

      const ui = (
        /* button, dev, ... */
        <button {...getAddToCartButtonProps(item, price)}>Add to favorites</button>
      );
      ```

  - ##### `getQuizResultButtonProps`

    This method should be applied to a product card container of type `<div>` on quiz results page.

    This handles href, events, and tracking.

    It is required to pass an `item` and `position` to `getQuizResultButtonProps` in order to apply the logic and tracking.

    - `item`: Result item of the quiz that will be selected to be tracked when the user
      clicks on it.
    - `position`: Position of the item that will be sent with the tracking event.

      ```jsx
      const { getQuizResultButtonProps, state } = useCioQuiz(args);
      const quizResults = state.quiz.results?.response?.results;

      const ui = (
        <div>
          {quizResults.map((item, i) => (
            <div
              {...getQuizResultButtonProps({
                result,
                position: i,
              })}>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      );
      ```

  - ##### `getQuizResultLinkProps`

    This method should be applied to a product card container of type link `<a>` on quiz results page.

    This handles href, events, and tracking.

    It is required to pass an `item` and `position` to `getQuizResultLinkProps` in order to apply the logic and tracking.

    - `item`: Result item of the quiz that will be selected to be tracked when the user
          clicks on it.
    - `position`: Position of the item that will be sent with the tracking event.

      ```jsx
      const { getQuizResultLinkProps, state } = useCioQuiz(args);
      const quizResults = state.quiz.results?.response?.results;

      const ui = (
        <div>
          {quizResults.map((item, i) => (
            <a
              {...getQuizResultLinkProps({
                result,
                position: i,
              })}>
              <p>{item.value}</p>
            </a>
          ))}
        </div>
      );
      ```
  
  - ##### `getHydrateQuizButtonProps`

    This method should be applied to an element of type `<button>` or `<div>` to hydrate the quiz with saved state between reloads.

    ```jsx
    const { getHydrateQuizButtonProps } = useCioQuiz(args);

    const ui = (
      <button {...getHydrateQuizButtonProps()}>Hydrate quiz</button>
    );
    ```
