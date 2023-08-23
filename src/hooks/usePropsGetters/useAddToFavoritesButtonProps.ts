import { useState, useCallback } from 'react';
import { GetAddToFavoritesButtonProps, QuizEventsReturn } from '../../types';
import { Favorited } from '../../components/ResultFavoritesButton/ResultFavoritesButton';

export default function useAddToFavoritesButtonProps(
  addToFavorites: QuizEventsReturn.AddToFavorites
): GetAddToFavoritesButtonProps {
  const [favorited, setFavorited] = useState<Favorited>({});

  const toggleIdFavorited = useCallback(
    (id: string) => {
      setFavorited({ ...favorited, [id]: !favorited?.[id] });
    },
    [favorited]
  );

  const getAddToFavoritesButtonProps: GetAddToFavoritesButtonProps = useCallback(
    (result, price) => ({
      className: `${'cio-result-card-favorites-button'} ${
        favorited?.[result?.data?.id || '0'] ? 'favorited' : ''
      }`,
      onClick: (e) => {
        addToFavorites(e, result, price, !favorited?.[result?.data?.id || '0']);
        toggleIdFavorited(result?.data?.id || '0');
      },
      type: 'button',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [favorited, addToFavorites]
  );

  return getAddToFavoritesButtonProps;
}