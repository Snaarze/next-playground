# Loading / Error && Custom

    - there are three ways to use of Loading component for global, first is to use built in Component from react which is suspense
        - Suspense works if there are some fetching happening in the background the fallback children defined will be used
        - wrap the children layout for globally implemented
        - use the loading built in component by next js which will be automatically used by default if there are rendering/ fetching in the background

# Not found

    - there are two ways to implement this method by using root not-found which means that the not found will be the same to the whole descendants of the root folder
    - use custom not-found by creating not-found component as the children of the component that you want to have different errors which will overwritten the global notFound
    components
    - Rules : follow the naming pattern of the next.js which start with the lowercase, this applies to all component such as loading, error, route, page, layout

# Router

    - useRouter works the same as useNavigate in react build in functions/hooks which let you direct to the target parameters
        - Example  [router.push("/users")] this will direct you to the page of users component, the only difference is that you need to use push in order to navigate

# Layout

    - Children Props will be the one changing depending on the user actions, in order to navifate to the custom component the Link Hook or Router hook is required.

# Cache Fetching

    - {cache  : 'no-store'}, it won't store any data in the cache
    - {cache : 'revalidate' : { 10}} every 10 seconds - example if the numbers were changed 100, the revalidation will be every 100 seconds

# Route

    - if you want to show an http request component you need to use route files,

# POSTMAN

    - when testing the api that you created/ and want to fetch, use the postman
