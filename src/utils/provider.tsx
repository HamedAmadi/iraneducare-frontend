"use client";
// import {UserContextProvider} from "@/context/UserContext";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {useState} from "react";

const Providers = ( {children}: React.PropsWithChildren ) => {
  const [client] = useState(
    new QueryClient( {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          retry: false,
        },
      },
    } )
  );

  return (
    // <UserContextProvider>
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
    // </UserContextProvider>
  );
}

export default Providers;
