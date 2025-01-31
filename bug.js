```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of the callback function
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId); // This cleanup function is correct
  }, []); // Empty dependency array, so it runs only once

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```