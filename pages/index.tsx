import { server } from "@/config";

export default function Home({
  data,
}: {
  data: {
    name: string;
  };
}) {
  return <h1 className='text-3xl font-bold flex-row'>{data.name}</h1>;
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/hello`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
