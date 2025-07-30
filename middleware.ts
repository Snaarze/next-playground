// short way to export his middleware
export { default } from "next-auth/middleware";
// import middleware from "next-auth/middleware";
// middleware is function that runs code before the request is completed on the backend
// this middleware is already built in with nextauth so no need to create this kind of function instead we can import them to our routing so we can use that function
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

// this is the object or pattern that nextjs is looking for
export const config = {
  // using the wildcard symbol it means that it can be zero or multple parameters
  //  + sign meaning that one ore more
  //   while the ? is zero or one
  //   ! is true value
  //  we can protect routing by defining the root folder and with the following of the path* to track that descendants of that folder is gonna be protected
  matcher: ["/users/:id*"],
};
