import React, { useState, useEffect, useCallback } from 'react';
import { SITE_CONFIG } from '../config/site';
import { CounterContext } from './CounterContext';

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Consistent initial source of truth across all devices
  const [count, setCount] = useState<number>(SITE_CONFIG.initialClientCount);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch live count from shared backend server / serverless API endpoint
  const fetchLiveCount = useCallback(async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const endpoint = `${SITE_CONFIG.apiBaseUrl}/api/counter`;
      const response = await fetch(endpoint, {
        signal: controller.signal,
        cache: 'no-store',
        headers: {
          'Pragma': 'no-cache',
          'Cache-Control': 'no-cache',
        },
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (data.success && typeof data.count === 'number') {
          const verifiedCount = Math.max(data.count, SITE_CONFIG.initialClientCount);
          setCount(verifiedCount);
        }
      }
    } catch (error) {
      // In offline development or when API is unreachable, preserve the consistent baseline
      console.warn('Live counter API unavailable; displaying consistent baseline statistic:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      if (isMounted) {
        await fetchLiveCount();
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, [fetchLiveCount]);

  // Increment counter upon verified user action (form submission)
  const incrementCount = async (): Promise<number> => {
    let updatedCount = count + 1;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const endpoint = `${SITE_CONFIG.apiBaseUrl}/api/counter/increment`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Pragma': 'no-cache',
          'Cache-Control': 'no-cache',
        },
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (data.success && typeof data.count === 'number') {
          updatedCount = data.count;
        }
      }
    } catch (error) {
      console.warn('Backend increment API unavailable; applying optimistic session increment:', error);
    }

    setCount(updatedCount);
    return updatedCount;
  };

  return (
    <CounterContext.Provider
      value={{
        count,
        isLoading,
        incrementCount,
        refetchCount: fetchLiveCount,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
