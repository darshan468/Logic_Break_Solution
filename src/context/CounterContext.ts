import { createContext } from 'react';
import { SITE_CONFIG } from '../config/site';

export interface CounterContextType {
  count: number;
  isLoading: boolean;
  incrementCount: () => Promise<number>;
  refetchCount: () => Promise<void>;
}

export const CounterContext = createContext<CounterContextType>({
  count: SITE_CONFIG.initialClientCount,
  isLoading: false,
  incrementCount: async () => SITE_CONFIG.initialClientCount + 1,
  refetchCount: async () => {},
});
