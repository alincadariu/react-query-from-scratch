import { useCallback, useContext, useEffect } from 'react';
import { type CacheEntry, QueryClientContext } from './QueryClient';

interface UseQueryOptions<TData> {
    queryKey: string[];
    queryFn: () => Promise<TData>;
}

type UseQueryResult<TData> =
    | {
          state: 'success';
          data: TData;
          isLoading: false;
      }
    | {
          state: 'loading';
          isLoading: true;
      }
    | {
          state: 'error';
          isLoading: false;
          error: Error;
      };

const STALE_TIME = 1000; // one second

interface UseLoadEffectOptions {
    simplifiedKey: string;
    queryFn: () => Promise<unknown>;
    setCacheEntry: (key: string, value: CacheEntry) => void;
    cache: Map<string, CacheEntry>;
}

const useLoadEffect = ({
    simplifiedKey,
    queryFn,
    setCacheEntry,
    cache,
}: UseLoadEffectOptions) => {
    useEffect(() => {
        const cachedEntry = cache.get(simplifiedKey);
        const isStale =
            cachedEntry == null ||
            (cachedEntry.state === 'success' &&
                cachedEntry.timestamp.getTime() + STALE_TIME < Date.now());
        const fetchData = async () => {
            try {
                const promise = queryFn();
                setCacheEntry(simplifiedKey, {
                    state: 'loading',
                });
                const data = await promise;
                setCacheEntry(simplifiedKey, {
                    data,
                    state: 'success',
                    timestamp: new Date(),
                });
            } catch (error) {
                setCacheEntry(simplifiedKey, {
                    state: 'error',
                    error: error as Error,
                });
            }
        };

        const isFetching = cachedEntry?.state === 'loading';
        if (isFetching || !isStale) {
            return;
        }
        fetchData();
    }, [simplifiedKey, setCacheEntry, cache]);
};

export const useQuery = <TData>({
    queryFn,
    queryKey,
}: UseQueryOptions<TData>): UseQueryResult<TData> => {
    const { cache, setStateId } = useContext(QueryClientContext);
    const simplifiedKey = queryKey.join('|');
    const cachedEntry = cache.get(simplifiedKey);

    const setCacheEntry = useCallback(
        (key: string, value: CacheEntry) => {
            cache.set(key, value);
            setStateId(prev => prev + 1);
        },
        [cache, setStateId],
    );

    useLoadEffect({ simplifiedKey, queryFn, setCacheEntry, cache });

    if (cachedEntry == null || cachedEntry.state === 'loading') {
        return { state: 'loading', isLoading: true };
    }

    if (cachedEntry.state === 'error') {
        if (!cachedEntry?.error) throw new Error('Error is null');
        return { state: 'error', isLoading: false, error: cachedEntry.error };
    }

    return {
        state: 'success',
        isLoading: false,
        data: cachedEntry.data as TData,
    };
};
