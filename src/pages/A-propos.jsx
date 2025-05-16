import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Apropos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="w-[90vw] mx-auto relative">
          <img
            src="/landscape-2.png"
            alt="landscape"
            className="object-cover rounded-lg brightness-75 h-[40vh] w-[90vw]"
          />
          <p className="text-[36px] text-white absolute inset-0 flex items-center justify-center">
            À propos
          </p>
        </div>

        <div className="space-y-4 my-10 w-[90vw] mx-auto">
          <Dropdown title={"Fiabilité"} titleSize={"text-3xl"} />
          <Dropdown title={"Respect"} titleSize={"text-3xl"} />
          <Dropdown title={"Service"} titleSize={"text-3xl"} />
          <Dropdown title={"Sécurité"} titleSize={"text-3xl"} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
