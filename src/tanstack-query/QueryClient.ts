import { createContext, type Dispatch, type SetStateAction } from 'react';

export type CacheEntry =
    | {
          state: 'success';
          data: unknown;
          timestamp: Date;
      }
    | {
          state: 'loading';
      }
    | {
          state: 'error';
          error: Error;
      };

interface ClientContext {
    cache: Map<string, CacheEntry>;
    setStateId: Dispatch<SetStateAction<number>>;
    stateId: number;
}

export const QueryClientContext = createContext<ClientContext>({
    cache: new Map(),
    setStateId: () => {},
    stateId: 0,
});
