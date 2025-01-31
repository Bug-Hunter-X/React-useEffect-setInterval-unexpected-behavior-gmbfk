```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Correct usage of the callback function
      setCount(prevCount => prevCount + 1); 
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```