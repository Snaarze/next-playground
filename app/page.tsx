
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Theme from "./components/Theme";

export default function Home() {
  return (
    <main data-theme="dark" className="min-h-screen">
      <h1>Hello World!</h1>
      <Link href={"/users"}>Users</Link>
      <ProductCard />
      <Theme />
    </main>
  );
}
