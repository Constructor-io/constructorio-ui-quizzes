import { useState, useCallback } from 'react';
import { QuizResultData } from '@constructor-io/constructorio-client-javascript/lib/types';
import { GetAddToFavoritesButtonProps, QuizEventsReturn } from '../../types';
import { Favorited } from '../../components/ResultFavoritesButton/ResultFavoritesButton';

export default function useAddToFavoritesButtonProps(
  addToFavorites: QuizEventsReturn.AddToFavorites,
  favoriteItems?: string[]
): GetAddToFavoritesButtonProps {
  const [favorited, setFavorited] = useState<Favorited>({});

  const toggleIdFavorited = useCallback(
    (id: string) => {
      setFavorited({ ...favorited, [id]: !favorited?.[id] });
    },
    [favorited]
  );

  const isResultFavorited = (result: Partial<QuizResultData>) =>
    result?.data?.id && favoriteItems?.includes(result?.data?.id);

  const getAddToFavoritesButtonProps: GetAddToFavoritesButtonProps = useCallback(
    (result, price) => ({
      className: `${'cio-result-card-favorites-button'} ${
        result?.data?.id && favoriteItems?.includes(result?.data?.id) ? 'favorited' : ''
      }`,
      onClick: (e) => {
        addToFavorites(e, result, price, !isResultFavorited(result));
        toggleIdFavorited(result?.data?.id || '0');
      },
      type: 'button',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [favorited, addToFavorites]
  );

  return getAddToFavoritesButtonProps;
}
