# React useEffect setInterval Stops Prematurely

This repository demonstrates a common error in React's `useEffect` hook when using `setInterval`. The counter stops incrementing once it reaches 10 because the `useEffect` dependency array is only checking the `count` value during the initial render.