import ProductCard from "./components/ProductCard";
import Theme from "./components/Theme";
import { getServerSession } from "next-auth";
import { serverSession } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const auth = await getServerSession(serverSession);
  return (
    <main
      data-theme="dark"
      className="w-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-6xl font-extrabold">
        Hello {auth && <span>{auth.user!.name}</span>}
      </h1>
      <ProductCard />
      <Theme />
    </main>
  );
}
