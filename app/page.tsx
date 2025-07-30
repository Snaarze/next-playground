"use client";
import ProductCard from "./components/ProductCard";
import Theme from "./components/Theme";
import { getServerSession } from "next-auth";
import { serverSession } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import { useState } from "react";

// import dynamic to dynamically render a specific component that we want to render in the future
import dynamic from "next/dynamic";
import _ from "lodash";
// we can use a callback to show users loading indicator that we are fetching in at the moment
// by defining an function loading
// no need using a dynamic function if using an external javascript code for lazyLoading which do various features
// such as sorting, manipulating object/arrays
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   // another property available is ssr
//   // when importing a client component by default it is pre rendered on the server side
//   // disable pre render in server
//   ssr: false,
//   loading: () => <p className="loading loading-spinner"></p>,
// });

// remove the async since client side cannot be an async
export default function Home() {
  const [isVisible, setVisible] = useState(false);
  // image component built in by next js are optimiziing/compressing the image based on the platform/devices that user uses
  // const auth = await getServerSession(serverSession);
  return (
    <main
      data-theme="dark"
      className="w-screen flex flex-col justify-center items-center"
    >
      <button
        onClick={async () => {
          // we can load lodash dynamically using lazyLoad since it will render or load i nthe page as a whole which are bad for bloated codes
          // we can minimize the size only when we only need the lodash sorting feature in the future
          // by doing this we only import the lodash only when necessary like when we only click the button that trigger the importing of the file
          const _ = (await import("lodash")).default;
          const user = [{ name: "c" }, { name: "b" }, { name: "a" }];
          // include it on the array which property that we want to mutate using this function
          // in this example we have name properties so that properties are the availabl for mutation
          const sorted = _.orderBy(user, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
      {/* this is effective if there are heavy data that we want to render */}
      {/* this is lazy loading with the combination of dynamic function */}
      {/* {isVisible && } */}
      {/* insert an image here just like the img tag */}
      {/* when using an image from cloud or database this is what we call remotePatterns */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Coffee"
        width={280}
        height={180}
        // use fill for responsive images,
      /> */}
      {/* <h1 className="text-6xl font-extrabold">
        Hello {auth && <span>{auth.user!.name}</span>}
      </h1>
      <ProductCard />
      <Theme /> */}
    </main>
  );
}
