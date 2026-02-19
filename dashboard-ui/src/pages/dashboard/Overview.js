import { useEffect, useContext } from "react";
import axios from "axios";
import { DashboardContext } from "../../context/DashboardContext";
import Card from "../../components/Card";

const Overview = () => {

  const { data, setData, loading, setLoading, error, setError }
    = useContext(DashboardContext);

  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(res.data.slice(0, 5));
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();

  }, [setData, setLoading, setError]);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div className="cardContainer">
      {data.map(item => (
        <Card key={item.id} title={item.title} value={item.id}/>
      ))}
    </div>
  );
};

export default Overview;
