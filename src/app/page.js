import { Header } from "@/components/Header";


//melakukan get data

async function getData() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/zHtspcONf4Uq", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { data } = await getData();

  return (
    <main className="bg-white">
      <Header data={data}/>
    </main>
  );
}
