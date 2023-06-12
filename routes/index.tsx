import type { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Audio from "../islands/Audio.tsx";
import { getCount } from "../utils/db.ts";

interface HomeProps {
  start: number;
}

export const handler: Handlers<HomeProps> = {
  async GET(_req, ctx) {
    let start = await getCount();
    if (start === null) start = 3;
    return ctx.render({ start });
  },
};



export default function Home(props: PageProps<HomeProps>) {
  return (
    <>
      <Head>
        <title>Fresh App with Deno KV</title>
      </Head>
      <Audio />
  

    </>
  );
}
