import { useEffect, useState } from 'react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';

export type CioClientOptions = { apiKey?: string; cioJsClient?: ConstructorIOClient };
type UseCioClient = (cioClientOptions: CioClientOptions) => ConstructorIOClient;

const useCioClient: UseCioClient = ({ apiKey, cioJsClient }) => {
  const [cioClient, setCioClient] = useState(cioJsClient);

  useEffect(() => {
    if (apiKey && !cioJsClient) {
      const client = new ConstructorIOClient({
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
