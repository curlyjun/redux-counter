// 액션 타입을 고유하게 가져고 싶어서. 겹치는 것 방지!
//action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

//action creators
export function increment() {
  return {
    type: INCREMENT
  }
}
export function decrement() {
  return {
    type: DECREMENT
  }
}
export function setDiff(value) {
  return {
    type: SET_DIFF,
    diff: value
  }
}
