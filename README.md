# React useEffect setInterval Unexpected Behavior

This repository demonstrates a common issue when using the `setInterval` function within a React `useEffect` hook.  The problem stems from not using the functional update method for updating state variables within the interval callback.  This can lead to unexpected behavior and potentially missed updates.

## Problem

The original `MyComponent` function uses `setInterval` to increment a counter every second. However, it directly updates `setCount` with `setCount(count + 1)`, causing unexpected behavior. This is because if the component re-renders during the interval, the `count` variable may not reflect the latest value from the state.

## Solution

The solution utilizes the functional form of `setCount`, `setCount(prevCount => prevCount + 1)`.  This ensures that the update always uses the most current value of `count` from the state.