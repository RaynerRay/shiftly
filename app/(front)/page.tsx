import Head from "next/head";
import { getDoctors } from "@/actions/users";
import Hero from "@/components/Frontend/Hero";
import React from "react";
import Banner from "@/components/Frontend/Banner";
import LogoClouds from "@/components/Frontend/LogoClouds";
import BannerCarousel from "@/components/BannerCarousel";

export default async function Home() {
  const bannerImages = [
    '/banner2.webp',
    '/banner1.jpg',
    
    '/banner3.jpg'
  ];

  const doctors = (await getDoctors()) || [];
  const careWorkers = doctors.filter(
    (doctor) => doctor.doctorProfile?.profession === "careWorker"
  );
  const nurses = doctors.filter(
    (doctor) => doctor.doctorProfile?.profession === "nurse"
  );
  const adultSocialWorkers = doctors.filter(
    (doctor) => doctor.doctorProfile?.profession === "adultSocialWorker"
  );
  const childrenSocialWorkers = doctors.filter(
    (doctor) => doctor.doctorProfile?.profession === "childrenSocialWorker"
  );
  return (
    <>
      <Head>
        <title>Shiftly | Home - Marketplace for Healthcare Workers</title>
        <meta
          name="description"
          content="Shiftly connects healthcare professionals – including care workers, nurses, and social workers – with extra shift opportunities and clients seeking reliable staff."
        />
        <meta
          name="keywords"
          content="Shiftly, healthcare workers, extra shifts, care workers, nurses, social workers, healthcare marketplace, medical staffing"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Shiftly | Home - Marketplace for Healthcare Workers" />
        <meta
          property="og:description"
          content="Discover extra shift opportunities and trusted healthcare staffing solutions on Shiftly."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftly.com" />
        <meta property="og:image" content="/images/og-image.jpg" /> {/* Replace with your image path */}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shiftly | Home - Marketplace for Healthcare Workers" />
        <meta
          name="twitter:description"
          content="Shiftly connects healthcare professionals with extra shift opportunities and helps clients find trusted staff."
        />
        <meta name="twitter:image" content="/images/twitter-image.jpg" /> {/* Replace with your image path */}
      </Head>
      <section className="">
        <Hero />
        <LogoClouds />

        <Banner
          title="Care Workers"
          buttonLink="/search?profession=careWorker"
          backgroundImage="/yofte-assets/elements/cta-lines2.svg"
          imageAlt="Product image"
          doctors={careWorkers}
          bgClassName="relative bg-sky-50 overflow-hidden"
        />
        {/* <div className="bg-white py-6">
          <BannerCarousel images={bannerImages} />
        </div> */}
        <Banner
          title="Nurses"
          buttonLink="/search?profession=nurse"
          backgroundImage="/yofte-assets/elements/cta-lines2.svg"
          imageAlt="Product image"
          doctors={nurses}
          bgClassName="relative bg-sky-50 overflow-hidden"
        />
        <Banner
          title="Adult Social Workers"
          buttonLink="/search?profession=adultSocialWorker"
          backgroundImage="/yofte-assets/elements/cta-lines2.svg"
          imageAlt="Product image"
          doctors={adultSocialWorkers}
          bgClassName="relative bg-sky-50 overflow-hidden"
        />
        <Banner
          title="Children Social Workers"
          buttonLink="/search?profession=childrenSocialWorker"
          backgroundImage="/yofte-assets/elements/cta-lines2.svg"
          imageAlt="Product image"
          bgClassName="bg-sky-50 mx-auto"
          doctors={childrenSocialWorkers}
        />
      </section>
    </>
  );
}
