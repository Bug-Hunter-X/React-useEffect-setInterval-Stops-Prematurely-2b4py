```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: only updates count if count is less than 10
    if (count < 10) {
      const interval = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```