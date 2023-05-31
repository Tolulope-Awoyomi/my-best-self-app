function Explore() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
     function fetchData() {
        fetch("http://www.boredapi.com/api/activity")
        .then ((r) => r.json())
        .then ((activity) => setData(activity))
    }
  
    return (
      <div>
        <h1>Explore Component</h1>
        {data.map((item) => (
          <div key={item.id}>
            {/* Display the data fetched from the API */}
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Explore;
  