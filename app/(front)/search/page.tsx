// This is a server component (no need for "use client" here)

import DoctorCard from "@/components/DoctorCard";
import SearchBarSP from "@/components/Frontend/SearchBarSP";
import Adverts from "@/components/Frontend/Adverts";
import { getDoctorsBySearch } from "@/actions/doctors";
import DoctorsListWithPagination from "@/components/DoctorsListWithPagination";
import { separateAndCapitalise } from "@/lib/utils";

// Type definition for the search params
interface SearchParams {
  city?: string;
  profession?: string;
}

// Type definition for the doctor object
interface Doctor {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  availability?: any;
  slug: string
  [key: string]: any; // Add this to accommodate additional fields from doctorProfile
}

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { city, profession } = searchParams;
  

  // Fetch doctor data based on city and profession
  const data = await getDoctorsBySearch(city, profession);
  const doctors: import("@/types/types").Doctor[] = data?.doctors.map(doc => ({
    id: doc.id,
    name: `${doc.firstName} ${doc.lastName}`,
    email: doc.email || '',
    phone: doc.phone || '',
    slug: doc.slug,
    doctorProfile: {
      firstName: doc.firstName,
      lastName: doc.lastName,
      // Add other relevant fields from doc
      gender: null,
      profession: null,
      bio: null,
      profilePicture: null,
      hourlyWage: 0,
      availability: null
    }
  })) || [];
  const formattedProfession = profession
    ? separateAndCapitalise(profession)
    : "";
  const formattedCity = city
    ? separateAndCapitalise(city)
    : "";

  return (
    <div className="max-w-7xl mx-auto py-2 h-screen">
      {/* Search  */}
      <SearchBarSP />

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 lg:gap-10">
        {/* Browse by Location */}
        <div className="col-span-3 border border-gray-200/50 rounded-sm p-6">
          <div className="py-3 flex flex-col text-sm space-y-2">
            <Adverts />
          </div>
        </div>

        {/* Doctor Results with pagination */}
        <div className="col-span-9">
          {doctors && doctors.length > 0 ? (
            <>
              <h2 className="pb-3 text-gray-600 font-medium">
                {formattedCity && formattedProfession
                  ? `Results for ${formattedProfession}s in ${formattedCity}`
                  : formattedCity
                  ? `Professionals in ${formattedCity}`
                  : formattedProfession
                  ? `${formattedProfession}s`
                  : "All professionals"}
              </h2>
              {/* Pass fetched doctors data to client-side pagination component */}
              <DoctorsListWithPagination doctors={doctors} />
            </>
          ) : (
            <p>
              {formattedCity && formattedProfession
                ? `No results found for ${formattedProfession}s in ${formattedCity}.`
                : formattedCity
                ? `No professionals found in ${formattedCity}.`
                : formattedProfession
                ? `No ${formattedProfession} professionals found.`
                : "No professionals found."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
