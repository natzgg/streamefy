import { db } from "@/lib/db";

export default function Home() {
  return <div>HomePage</div>;
}

async function test() {
  console.log(await db.query.users.findFirst());
}

test();
