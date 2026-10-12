const expensiveValue = useMemo(() => {
  return calculateSomething(data);
}, [data]);