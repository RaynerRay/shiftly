import { getDoctors } from "@/actions/users";
import Hero from "@/components/Frontend/Hero";
import React from "react";
import Banner from "@/components/Frontend/Banner";
import LogoClouds from "@/components/Frontend/LogoClouds";
import BannerCarousel from "@/components/BannerCarousel";


export default async function Home() {

 

  const bannerImages = [
    '/banner1.jpg',
    '/banner2.webp',
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
    <section className="">
      <Hero />

      <LogoClouds/>
     

      {/* <OptionsHero /> */}
      {/* <div className="md:my-20 border-b border-gray-50"></div> */}
      <Banner
        title="Care Workers"
        buttonLink="/search?profession=care-worker"
        backgroundImage="/yofte-assets/elements/cta-lines2.svg"
        imageAlt="Product image"
        doctors={careWorkers}
        bgClassName="relative bg-sky-50 overflow-hidden  "
      />
      <div className="bg-white py-6">
      <BannerCarousel images={bannerImages}/>
      </div>
      
      <Banner
        title="Nurses "
        buttonLink="/search?profession=nurses"
        backgroundImage="/yofte-assets/elements/cta-lines2.svg"
        imageAlt="Product image"
        doctors={nurses}
        bgClassName="relative bg-sky-50 overflow-hidden  "
      />
      <Banner
        title="Adult Social Workers"
        buttonLink="/search?profession=social-worker"
        backgroundImage="/yofte-assets/elements/cta-lines2.svg"
        imageAlt="Product image"
        
        doctors={adultSocialWorkers}
        bgClassName="relative bg-sky-50 overflow-hidden  "
      />
      <Banner
        title="Children Social Workers"
        buttonLink="/search?profession=social-worker"
        backgroundImage="/yofte-assets/elements/cta-lines2.svg"
        imageAlt="Product image"
        bgClassName=" bg-sky-50 mx-auto "
        doctors={childrenSocialWorkers}
        
      />
      {/* <DoctorsList doctors={nurses} title="Nurses" /> */}
    
      
    </section>
  );
}
