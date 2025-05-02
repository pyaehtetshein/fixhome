import Image from "next/image";
import Link from "next/link";

import { RepairAppointmentForm } from "@/components/forms/RepairAppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

// This component displays the appointment form and the option to view the user's profile
const RepairAppointment = async ({ params: { userId } }: SearchParamProps) => {
  // Fetch the patient's details using the userId
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          {/* Logo and View Profile Button - Aligned side by side */}
          <div className="flex items-center justify-between mb-12">
            {/* Logo */}
            <Image
              src="/assets/icons/logo.png"
              height={1000}
              width={1000}
              alt="logo"
              className="h-10 w-fit"
            />

            <Link
              href={`/profile/${userId}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-3 text-white shadow-lg hover:from-teal-600 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A4 4 0 0111 14h2a4 4 0 015.879 3.804M15 11a3 3 0 10-6 0 3 3 0 006 0z"
                />
              </svg>
              View My Profile
            </Link>
          </div>

          {/* Appointment Form */}
          <RepairAppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />

          {/* Footer */}
          <p className="copyright mt-10 py-12">© 2025 FixHome</p>
        </div>
      </section>

      {/* Image on the right side */}
      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default RepairAppointment;
