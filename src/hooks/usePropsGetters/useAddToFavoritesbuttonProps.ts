import { useState, useCallback } from 'react';
import { Selected } from '../../components/SelectTypeQuestion/SelectTypeQuestion';
import { GetAddToFavoritesButtonProps, QuizEventsReturn } from '../../types';

export default function useAddToFavoritesButtonProps(
  addToFavorites: QuizEventsReturn.AddToFavorites
): GetAddToFavoritesButtonProps {
  const [favorited, setFavorited] = useState<Selected>({});

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
        toggleIdFavorited(result?.data?.id || '0');
        addToFavorites(e, result, price);
      },
      type: 'button',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [favorited]
  );

  return getAddToFavoritesButtonProps;
}
