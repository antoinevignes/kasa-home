import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLogements();
  }, []);

  const fetchLogements = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://titi.startwin.fr/logements");

      if (!response.ok) throw new Error("Aucun logement trouvé");

      const data = await response.json();
      console.log(data);

      setLogements(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />

      <div className="relative flex justify-center items-center">
        <img
          src="/landscape-1.png"
          alt="landscape"
          className="w-[90vw] mx-auto rounded-xl h-[40vh] object-cover brightness-75"
        />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white text-[36px] flex justify-center items-center w-full">
          Chez vous, partout et ailleurs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90vw] mx-auto gap-4 my-10 bg-[#F6F6F6] rounded-xl p-10">
        {loading ? (
          <p className="text-3xl col-span-3 text-center">Chargement...</p>
        ) : (
          logements.map((logement, i) => (
            <Card
              key={i}
              name={logement.title}
              id={logement.id}
              cover={logement.cover}
            />
          ))
        )}
      </div>

      <Footer />
    </>
  );
}
