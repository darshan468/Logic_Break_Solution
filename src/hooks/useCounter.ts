import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

export const useCounter = () => useContext(CounterContext);
