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
      gender: doc.doctorProfile.gender || null,
      profession:doc.doctorProfile.profession  || null,
      bio: doc.doctorProfile.bio || null,
      profilePicture: doc.doctorProfile.profilePicture || null,
      hourlyWage: doc.doctorProfile.hourlyWage,
      availability: doc.doctorProfile.availability || null
    }
  })) || [];
  const formattedProfession = profession
    ? separateAndCapitalise(profession)
    : "";
  const formattedCity = city
    ? separateAndCapitalise(city)
    : "";
      
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      {/* Search */}
      <div className="mb-8">
        <SearchBarSP />
      </div>
        
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-1 order-1">
         
            
          {/* Advertisements - Only visible on desktop */}
          <div className="hidden lg:block">
            <Adverts />
          </div>
        </div>
          
        {/* Main Content - Right Column on Desktop, Middle on Mobile */}
        <div className="lg:col-span-4 order-2">
          {/* Doctor Results with pagination */}
          <div className="bg-white rounded-lg shadow p-4">
            {doctors && doctors.length > 0 ? (
              <>
                <h1 className="text-2xl font-bold mb-6">
                  {formattedCity && formattedProfession
                    ? `Results for ${formattedProfession}s in ${formattedCity}`
                    : formattedCity
                    ? `Professionals in ${formattedCity}`
                    : formattedProfession
                    ? `${formattedProfession}s`
                    : "All professionals"}
                </h1>
                {/* Pass fetched doctors data to client-side pagination component */}
                <DoctorsListWithPagination doctors={doctors} />
              </>
            ) : (
              <div className="text-center py-10">
                <h2 className="text-xl font-semibold mb-4">
                  {formattedCity && formattedProfession
                    ? `No results found for ${formattedProfession}s in ${formattedCity}.`
                    : formattedCity
                    ? `No professionals found in ${formattedCity}.`
                    : formattedProfession
                    ? `No ${formattedProfession} professionals found.`
                    : "No professionals found."}
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Advertisements - Only visible on mobile, at the bottom */}
      <div className="mt-8 lg:hidden">
        <Adverts />
      </div>
    </div>
  );
}