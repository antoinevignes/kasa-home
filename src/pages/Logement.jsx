import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";

export default function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchLogement();
  }, []);

  const fetchLogement = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://titi.startwin.fr/logements/${id}`);

      if (!response.ok)
        throw new Error("Aucun logement ne correspond à cet identifiant");

      const data = await response.json();
      console.log(data);
      setLogement(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <span
            key={i}
            className={
              i < rating ? "text-[#FF6060] text-3xl" : "text-gray-300 text-3xl"
            }
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 text-[#FF6060] w-[90vw] mx-auto">
        {!isLoading && logement ? (
          <>
            <img
              src={logement.cover}
              alt={logement.title}
              className="rounded-xl object-cover mx-auto mb-10 w-[90vw]"
            />
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="space-y-2">
                <h1 className="text-[36px]">{logement.title}</h1>
                <p className="text-[18px]">{logement.location}</p>

                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center gap-2">
                    {logement.tags?.map((tag, i) => (
                      <p
                        key={i}
                        className="bg-[#FF6060] rounded-lg text-white px-2 py-1"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-row-reverse justify-between items-center lg:inline-block">
                <div className="flex flex-row-reverse items-center gap-4">
                  <img
                    src={logement.host?.picture}
                    alt={logement.host?.name}
                    className="rounded-full w-20 h-20"
                  />
                  <p className="text-[18px] text-right whitespace-pre-line">
                    {logement.host?.name
                      ? logement.host.name.split(" ").join("\n")
                      : ""}
                  </p>
                </div>

                <div className="lg:absolute lg:right-15 lg:mt-4">
                  {renderStars(logement.rating)}
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between mt-10 gap-5">
              <div className="lg:w-1/2">
                <Dropdown
                  title={"Description"}
                  content={logement.description}
                />
              </div>

              <div className="lg:w-1/2">
                <Dropdown
                  title={"Équipements"}
                  content={
                    logement.equipments
                      ? logement.equipments.map((eqp, i) => (
                          <p key={i} className="py-1">
                            {eqp}
                          </p>
                        ))
                      : null
                  }
                />
              </div>
            </div>
          </>
        ) : (
          <p className="text-3xl text-center p-10">Chargement...</p>
        )}
      </div>

      <Footer />
    </div>
  );
}
