import Head from "next/head";
import Footer from "@/components/Frontend/Footer";
import Navbar1 from "@/components/Frontend/Navbar1";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Head>
        <title>Shiftly | Marketplace for Healthcare Workers</title>
        <meta
          name="description"
          content="Shiftly is a marketplace connecting healthcare workers looking for extra shifts with clients seeking reliable, experienced professionals."
        />
        <meta
          name="keywords"
          content="Shiftly, healthcare workers, extra shifts, healthcare marketplace, medical staffing, healthcare jobs"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Shiftly | Marketplace for Healthcare Workers" />
        <meta
          property="og:description"
          content="Connecting healthcare professionals with opportunities for extra shifts and helping clients find trusted medical staff."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftly.uk" />
        <meta property="og:image" content="/images/og-image.jpg" /> {/* Update with your image path */}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shiftly | Marketplace for Healthcare Workers" />
        <meta
          name="twitter:description"
          content="Connecting healthcare professionals with extra shift opportunities and linking clients with trusted staff."
        />
        <meta name="twitter:image" content="/images/twitter-image.jpg" /> {/* Update with your image path */}
      </Head>
      <Navbar1 session={session} />
      {children}
      <Footer />
    </div>
  );
}
