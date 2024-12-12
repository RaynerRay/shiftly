import { getServices } from "@/actions/services";
import NavBar from "@/components/Dashboard/NavBar";
import Footer from "@/components/Frontend/Footer";
import MegaMenu from "@/components/Frontend/MegaMenu";
import NavTop from "@/components/Frontend/NavTop";
import Navbar from "@/components/Frontend/Navbar";
import { SiteHeader } from "@/components/site-header";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <div className="">
      {/* <SiteHeader session={session} /> */}
      <NavTop/>
      <Navbar session={session} />
      {children}
      <Footer />
    </div>
  );
}
