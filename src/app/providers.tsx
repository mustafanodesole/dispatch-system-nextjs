// app/providers.tsx
"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <NextUIProvider>
        {children}
      </NextUIProvider>
{/*       <Footer/> */}
    </>
  );
}
