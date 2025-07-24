
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Theme from "./components/Theme";

export default function Home() {
  return (
    <main data-theme="dark" className="w-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold">Hello World!</h1>
      <ProductCard />
      <Theme />
    </main>
  );
}
