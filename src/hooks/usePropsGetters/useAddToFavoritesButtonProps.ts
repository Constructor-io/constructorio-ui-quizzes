import { useCallback } from 'react';
import { QuizResultData } from '@constructor-io/constructorio-client-javascript/lib/types';
import { GetAddToFavoritesButtonProps, QuizEventsReturn } from '../../types';

export default function useAddToFavoritesButtonProps(
  addToFavorites: QuizEventsReturn.AddToFavorites,
  favoriteItems?: string[]
): GetAddToFavoritesButtonProps {
  const isResultFavorited = (result: Partial<QuizResultData>) =>
    result?.data?.id && favoriteItems?.includes(result?.data?.id);

  const getAddToFavoritesButtonProps: GetAddToFavoritesButtonProps = useCallback(
    (result, price) => ({
      className: `${'cio-result-card-favorites-button'} ${
        isResultFavorited(result) ? 'favorited' : ''
      }`,
      onClick: (e) => {
        addToFavorites(e, result, price, !isResultFavorited(result));
      },
      type: 'button'
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [addToFavorites]
  );

  return getAddToFavoritesButtonProps;
}
