useEffect(() => {
  console.log("Component rendered");
}, []);

//With dependency
useEffect(() => {
  console.log("Count changed");
}, [count]);

//Without dependency array
useEffect(() => {
  console.log("Runs after every render");
});