import Animated, {
  Clock,
  Value,
  block,
  cond,
  clockRunning,
  set,
  startClock,
  timing,
  stopClock,
} from 'react-native-reanimated';

export const runTiming = (
  clock: Clock,
  position: number,
  toValue: number,
  duration: number,
  easing: Animated.EasingFunction,
) => {
  const timingState: Animated.TimingState = {
    finished: new Value(0),
    position: new Value(position),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const configState: Animated.TimingConfig = {
    duration,
    toValue: new Value(toValue),
    easing,
  };

  return block([
    cond(
      clockRunning(clock),
      [set(configState.toValue, toValue)],
      [
        set(timingState.finished, 0),
        set(timingState.position, position),
        set(timingState.time, 0),
        set(timingState.frameTime, 0),
        set(configState.toValue, 0),
        startClock(clock),
      ],
    ),
    timing(clock, timingState, configState),
    cond(timingState.finished, stopClock(clock)),
    timingState.position,
  ]);
};
