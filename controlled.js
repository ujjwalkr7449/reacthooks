const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>