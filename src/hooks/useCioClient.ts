/* eslint-disable no-console */
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { useMemo } from 'react';
import { getCioClient } from '../utils';

export type CioClientConfig = { apiKey?: string; cioJsClient?: ConstructorIOClient };
type UseCioClient = (cioClientConfig: CioClientConfig) => ConstructorIOClient | null;

const useCioClient: UseCioClient = ({ apiKey, cioJsClient }) => {
  if (!apiKey && !cioJsClient) {
    console.error('Either apiKey or cioJsClient is required');
  }

  return useMemo(() => cioJsClient || getCioClient(apiKey), [apiKey, cioJsClient]);
};

export default useCioClient;
