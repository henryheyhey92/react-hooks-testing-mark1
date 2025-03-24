import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../hooks/useCounter';

// Jest syntax - no need to import describe/it/expect
describe('useCounter', () => {
  test('should initialize with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  test('should initialize with custom value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  test('should increment counter', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });

  test('should decrement counter', () => {
    const { result } = renderHook(() => useCounter(5));
    
    act(() => {
      result.current.decrement();
    });
    
    expect(result.current.count).toBe(4);
  });

  test('should reset counter', () => {
    const { result } = renderHook(() => useCounter(5));
    
    act(() => {
      result.current.increment();
      result.current.reset();
    });
    
    expect(result.current.count).toBe(5);
  });

  test('should update hook when props change', () => {
    const { result, rerender } = renderHook(({ initialValue }) => useCounter(initialValue), {
      initialProps: { initialValue: 0 }
    });
    
    // Change the initial value prop
    rerender({ initialValue: 10 });
    
    // Reset should use the new initial value
    act(() => {
      result.current.reset();
    });
    
    expect(result.current.count).toBe(10);
  });
});