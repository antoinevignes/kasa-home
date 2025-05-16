import { Link } from "react-router";

export default function Card({ name, id, cover }) {
  return (
    <Link
      to={`/logements/${id}`}
      className="bg-[#FF6060] cursor-pointer text-white h-[30vh] relative rounded-lg hover:bg-[#d94c4c] transition-all flex flex-col items-center"
    >
      <img
        src={cover}
        alt={name}
        className="rounded-lg object-cover mt-5 w-[90%] h-[70%] mx-auto"
      />
      <span className="absolute bottom-3 left-3 p-2">{name}</span>
    </Link>
  );
}
