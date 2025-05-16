import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page404() {
  return (
    <div className="text-[#FF6060] h-[100vh] flex flex-col justify-between">
      <Navbar />

      <div className="flex flex-col justify-center items-center">
        <p className="text-[200px]">404</p>

        <p>Oups ! La page que vous demandez n'existe pas...</p>

        <Link className="underline mt-5" to={"/"}>
          Retourner à l'accueil
        </Link>
      </div>

      <Footer />
    </div>
  );
}
