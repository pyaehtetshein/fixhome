import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getRepairAppointment } from "@/lib/actions/repairappointment.actions";
import { formatDateTime } from "@/lib/utils";

const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getRepairAppointment(appointmentId);

  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryContractor
  );

  return (
    <div className="flex h-screen max-h-screen px-[2%]">
      <div className="success-img w-full">
        {/* Logo and View My Profile Button side by side */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Image
              src="/assets/icons/logo.png"
              height={1000}
              width={1000}
              alt="logo"
              className="h-10 w-fit"
            />
          </Link>
        </div>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>
          <p>We&apos;ll be in touch shortly to confirm.</p>
        </section>

        <section className="request-details">
          <p>Requested appointment details: </p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image!}
              alt="doctor"
              width={100}
              height={100}
              className="size-6"
            />
            <p className="whitespace-nowrap"> {doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
            />
            <p> {formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>

        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/profile/${userId}`}>View My Profile</Link>
        </Button>

        <p className="copyright">© 2025 FixHome</p>
      </div>
    </div>
  );
};

export default RequestSuccess;
