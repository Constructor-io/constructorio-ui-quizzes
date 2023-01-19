import { useEffect, useState } from 'react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
// import { AutocompleteApiResponse, RecommendationsApiResponse } from '../types';

export type CioClientOptions = { apiKey?: string; cioJsClient?: CioClient };

export interface CioClient {
  // quizzes: any;
}

type UseCioClient = (cioClientOptions: CioClientOptions) => CioClient;

const useCioClient: UseCioClient = ({ apiKey, cioJsClient }) => {
  const [cioClient, setCioClient] = useState(cioJsClient);

  useEffect(() => {
    if (apiKey && !cioJsClient) {
      const client: CioClient = new ConstructorIOClient({
        apiKey
      });

      setCioClient(client);
    } else if (cioJsClient) {
      setCioClient(cioJsClient);
    }
  }, [apiKey, cioJsClient]);

  return cioClient!;
};

export default useCioClient;
