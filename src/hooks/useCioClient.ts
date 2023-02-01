import { useMemo } from 'react';
import { getCioClient } from '../utils';

const useCioClient = (apiKey: string) => useMemo(() => getCioClient(apiKey), [apiKey]);

export default useCioClient;
