import CardsList from "./components/CardsList";

export default async function Home() {

  const data = await fetch("https://pluga.co/ferramentas_search.json");
  const tools = await data.json();
  return (
    <>
      <main className="w-4/5 mx-auto ">

        <div className="w-4/5 mx-auto p-4 m-3 border-2 border-black-500 border-solid">

          <input className="w-full p-4" type="search" name="search_tool" id="search_tool" placeholder="BUSCAR FERRAMENTA" />
        </div>

        <CardsList tools={tools}  ></CardsList>
      </main>
    </>
  );
}
