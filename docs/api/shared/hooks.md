# Hooks

Custom React hooks for the application.

## useTimer

A hook for managing a timer with start, pause, reset, and formatting capabilities.

```typescript
import { useTimer } from "~/shared/hooks/useTimer";
```

### Parameters

| Parameter     | Type     | Default | Description             |
| ------------- | -------- | ------- | ----------------------- |
| `initialTime` | `number` | `0`     | Initial time in seconds |

### Return Value

```typescript
interface UseTimerReturn {
  time: number; // Current time in seconds
  isRunning: boolean; // Whether the timer is running
  start: () => void; // Start the timer
  pause: () => void; // Pause the timer
  reset: () => void; // Reset to initial time
  formatTime: () => string; // Format time as MM:SS
}
```

### Usage Example

```tsx
function GameTimer() {
  const { time, isRunning, start, pause, reset, formatTime } = useTimer(0);

  return (
    <div>
      <span>{formatTime()}</span>
      <button onClick={isRunning ? pause : start}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```
