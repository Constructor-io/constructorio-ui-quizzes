/* eslint-disable no-console */
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { useMemo } from 'react';
import { getCioClient } from '../utils';

export type CioClientConfig = { apiKey?: string; cioJsClient?: ConstructorIOClient };
type UseCioClient = (cioClientConfig: CioClientConfig) => ConstructorIOClient | never;

const useCioClient: UseCioClient = ({ apiKey, cioJsClient }) => {
  if (!apiKey && !cioJsClient) {
    throw new Error('Either apiKey or cioJsClient is required');
  }

  const memoizedCioClient = useMemo(
    () => cioJsClient || getCioClient(apiKey),
    [apiKey, cioJsClient]
  );
  return memoizedCioClient!;
};

export default useCioClient;
