export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);

  return (
    <div className="bg-black text-white flex flex-col justify-center items-center pt-10 pb-5 gap-2">
      <img src="/logo-white.svg" alt="logo kasahome" />
      <p>&copy; {year} Kasa. All rights reserved.</p>
    </div>
  );
}
