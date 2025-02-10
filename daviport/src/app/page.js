import Image from "next/image";
import Header from "./components/header/header";

export default function Home() {
  return (
    <div className="h-screen pb-32 flex flex-col justify-center items-center bg-[#748E63] overflow-x-hidden">
      <Header />
      <main className="bg-[#F9B572]
       p-2 mt-36 w-full flex items-center justify-center space-x-5">
        <Image
          className="border border-transparent rounded-full mb-4"
          src="/images/davi.jpg"
          alt="Davi Souza Braga"
          width={100}
          height={100}
        />
        <div className="flex flex-col justify-center items-center text-[#FAF8ED] font-dmsans pt-11">
          <h1 className="text-2xl">Davi Souza Braga</h1>
          <h2 className="text-xl">Nutricionista</h2>
          <div className="flex">
            <ul>
              <li>Idade: 19 anos.</li>
              <li>Taboão da Serra, SP</li>
              <li>FECAF</li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

      </main>
    </div>
  );
}
