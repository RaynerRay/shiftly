"use client"; // Mark this as a client-side component

import { useState } from "react";
import DoctorCard from "@/components/DoctorCard";

// Type definition for the doctor object
interface Doctor {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  availability?: any;
  [key: string]: any; // Add this to accommodate additional fields from doctorProfile
}

interface DoctorsListWithPaginationProps {
  doctors: Doctor[];
}

const ITEMS_PER_PAGE = 2;

const DoctorsListWithPagination: React.FC<DoctorsListWithPaginationProps> = ({
  doctors,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(doctors.length / ITEMS_PER_PAGE);

  // Slice the doctors array to get the doctors for the current page
  const paginatedDoctors = doctors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {paginatedDoctors.map((doctor: Doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-200 rounded ${
            currentPage === 1 ? "cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-gray-200 rounded ${
            currentPage === totalPages ? "cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default DoctorsListWithPagination;
