// import React from "react";
// import { Doctor, DoctorProfileAvailability } from "@/types/types";
// import generateSlug from "@/utils/generateSlug";
// import { getDayName } from "@/utils/getDayName";
// import { getFormattedDate } from "@/utils/getFormatedShortDate";
// import { Star, Video, MapPin } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { separateAndCapitalise } from "@/lib/utils";

// interface DoctorCardProps {
//   isInPerson?: boolean;
//   doctor: Doctor;
// }

// const DoctorCard: React.FC<DoctorCardProps> = ({
//   isInPerson = false,
//   doctor,
// }) => {
//   const today: keyof DoctorProfileAvailability = getDayName();
//   const times = doctor.doctorProfile?.availability?.[today] ?? null;
//   const formattedDate = getFormattedDate();

//   if (!times || times.length === 0) return null;

//   // Apply the formatting function to the profession field
//   const formattedProfession = doctor.doctorProfile?.profession
//     ? separateAndCapitalise(doctor.doctorProfile.profession)
//     : "";

//   return (
//     <div className="w-72 p-4 bg-white dark:bg-sky-800 rounded-lg border border-gray-200 dark:border-gray-600 shadow-md hover:border-gray-400 transition-all duration-300">
//       <Link href={`/doctors/${doctor.slug}?id=${doctor.id}`} className="block">
//         <div className="flex flex-wrap items-center  mb-2">
//           <h2 className="text-lg font-bold text-gray-900 dark:text-white">
//             {`${doctor.doctorProfile?.firstName} ${doctor.doctorProfile?.lastName}`}
//           </h2>
          
//           <span className="px-2 py-1 text-xs bg-gray-50 text-sky-800 dark:bg-yellow-700 dark:text-yellow-100 rounded-md">
//               {formattedProfession} {/* Display the formatted profession */}
//             </span>
//         </div>

//         <div className="flex mb-2 justify-between">
//           <div className="">
//             <Image
//               src={doctor.doctorProfile?.profilePicture ?? "/doc-profile.jpeg"}
//               width={96}
//               height={96}
//               alt={doctor.name}
//               className="rounded-full object-cover"
//             />
//           </div>
         
//           <div className="flex flex-wrap gap-2 mb-2 items-end">
           
         
            
//             <span className="px-2 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100 rounded-sm">
//               Available today
//             </span>
//             <span className="px-2 py-1 text-xs bg-purple-50 text-purple-800 dark:bg-green-700 dark:text-green-100  rounded-sm">
//                {doctor.doctorProfile?.gender}
//             </span>
//           </div>
//         </div>

//         <p className="text-xs text-gray-800 dark:text-gray-300 mb-2 truncate">
//           He worked with us as we had connectivity issues originally; looked at
//           the information already provided to give us the best course of
//           medication; very courteous and professional
//         </p>
//       </Link>
//       <div className="mb-2 flex justify-between">
//         <span className="text-sm font-semibold">{formattedDate}</span>
//         <span className="text-sm text-sky-600 dark:text-blue-400 ml-2">
//           from <span className="font-bold"> £</span>
//           {doctor.doctorProfile?.hourlyWage}
//         </span>
//       </div>
//       <div className="grid grid-cols-2 gap-2">
//         {times.slice(0, 5).map((time, index) => (
//           <Link
//             key={index}
//             href={`/doctors/${doctor.slug}?id=${doctor.id}`}
//             className="py-1 px-2 text-sm bg-sky-600 text-white rounded hover:bg-sky-700 transition-colors text-center"
//           >
//             {time}
//           </Link>
//         ))}
//         {times.length > 5 && (
//           <Link
//             href={`/doctors/${doctor.slug}?id=${doctor.id}`}
//             className="py-1 px-2 text-sm bg-sky-100 text-sky-600 rounded hover:bg-sky-200 transition-colors text-center"
//           >
//             More times
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DoctorCard;

import React from "react";
import { Doctor, DoctorProfileAvailability } from "@/types/types";
import { getDayName } from "@/utils/getDayName";
import { getFormattedDate } from "@/utils/getFormatedShortDate";
import { Star, Video, MapPin, Clock, Calendar, BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { separateAndCapitalise } from "@/lib/utils";

interface DoctorCardProps {
  isInPerson?: boolean;
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ isInPerson = false, doctor }) => {
  const today: keyof DoctorProfileAvailability = getDayName();
  const times = doctor.doctorProfile?.availability?.[today] ?? null;
  const formattedDate = getFormattedDate();
  const formattedProfession = doctor.doctorProfile?.profession
    ? separateAndCapitalise(doctor.doctorProfile.profession)
    : "";

  if (!times || times.length === 0) return null;

  return (
    <div className="w-80 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-400/40 dark:border-slate-700">
      <Link href={`/doctors/${doctor.slug}?id=${doctor.id}`} className="block">
        {/* Header Section with Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
          <Image
            src={doctor.doctorProfile?.profilePicture ?? "/doc-profile.jpeg"}
            width={320}
            height={200}
            alt={doctor.name}
            className="rounded-full h-32 w-32"
          />
          <div className="absolute bottom-4  right-2 z-20">
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 text-xs font-semibold bg-green-500/90 text-white rounded-full flex items-center">
                <BadgeCheck className="w-3 h-3 mr-1" />
                Available today
              </span>
              <span className="px-2 py-1 text-xs font-semibold bg-purple-500/90 text-white rounded-full">
                {doctor.doctorProfile?.gender}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Doctor Info */}
          <div className="mb-4">
          
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white truncate">
                {` ${doctor.doctorProfile?.firstName} ${doctor.doctorProfile?.lastName}`}
              </h2>
            </div>
            
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full">
              {formattedProfession}
            </span>
          </div>
          

          {/* Review Section */}
          <div className="mb-4">
            <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-1 italic">
              {doctor.doctorProfile?.bio}
            </p>
          </div>

          {/* Date and Price */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <div className="flex items-center text-slate-600 dark:text-slate-300">
              <Calendar className="w-4 h-4 mr-1" />
              {formattedDate}
            </div>
            <div className="flex items-center font-medium text-blue-600 dark:text-blue-400">
              from <span className="mx-1">£</span>
              {doctor.doctorProfile?.hourlyWage}
            </div>
          </div>

          {/* Available Times */}
          <div className="space-y-2">
            {/* <div className="flex items-center text-sm text-slate-600 dark:text-slate-300 mb-2">
              <Clock className="w-4 h-4 mr-1" />
              Available slots
            </div> */}
            <div className="grid grid-cols-3 gap-2">
              {times.slice(0, 5).map((time, index) => (
                <div
                  key={index}
                  className="py-1.5 px-3 text-sm bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  {time}
                </div>
              ))}
              {times.length > 5 && (
                <div className="py-1.5 px-3 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-center hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors font-medium">
                  +{times.length - 5} more
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DoctorCard;