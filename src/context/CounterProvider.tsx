import React, { useState, useEffect, useCallback } from 'react';
import { SITE_CONFIG } from '../config/site';
import { CounterContext } from './CounterContext';

const LOCAL_STORAGE_KEY = 'lb_client_count';

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = useState<number>(() => {
    const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cached) {
      const parsed = parseInt(cached, 10);
      if (!isNaN(parsed) && parsed >= SITE_CONFIG.initialClientCount) {
        return parsed;
      }
    }
    return SITE_CONFIG.initialClientCount;
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch live count from backend server endpoint
  const fetchLiveCount = useCallback(async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      const response = await fetch(`${SITE_CONFIG.apiBaseUrl}/api/counter`, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (data.success && typeof data.count === 'number') {
          const newCount = Math.max(data.count, SITE_CONFIG.initialClientCount);
          setCount(newCount);
          localStorage.setItem(LOCAL_STORAGE_KEY, newCount.toString());
        }
      }
    } catch (error) {
      console.warn('Backend counter endpoint unavailable, using local client count state:', error);
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

  // Increment counter upon successful form submission
  const incrementCount = async (): Promise<number> => {
    let updatedCount = count + 1;

    try {
      const response = await fetch(`${SITE_CONFIG.apiBaseUrl}/api/counter/increment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && typeof data.count === 'number') {
          updatedCount = data.count;
        }
      }
    } catch (error) {
      console.warn('Backend increment API unavailable, incrementing local count state:', error);
    }

    setCount(updatedCount);
    localStorage.setItem(LOCAL_STORAGE_KEY, updatedCount.toString());
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
