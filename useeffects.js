useEffect(() => {
  console.log("Component rendered");
}, []);

//With dependency
useEffect(() => {
  console.log("Count changed");
}, [count]);