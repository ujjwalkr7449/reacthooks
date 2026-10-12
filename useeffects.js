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

//7. What is cleanup in useEffect()?
useEffect(() => {
  const handleResize = () => {
    console.log(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
