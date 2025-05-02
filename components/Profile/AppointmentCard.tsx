import Link from "next/link";

interface Appointment {
  $id: string;
  status: "completed" | "cancelled" | "pending" | "scheduled";
  schedule: string;
  primaryContractor: string;
  location?: string;
  boq?: string;
  userId: string;
}

const statusStyles: Record<
  Appointment["status"],
  { text: string; bg: string; border: string }
> = {
  completed: {
    text: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-300",
  },
  cancelled: {
    text: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-300",
  },
  pending: {
    text: "text-yellow-700",
    bg: "bg-yellow-50",
    border: "border-yellow-300",
  },
  scheduled: {
    text: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-300",
  },
};

export default function AppointmentCard({ appt }: { appt: Appointment }) {
  const status = appt.status || "scheduled";
  const styles = statusStyles[status] || statusStyles["scheduled"];

  return (
    <div
      className={`rounded-xl p-5 shadow-md ${styles.bg} border ${styles.border} hover:shadow-lg transition-shadow duration-200`}
    >
      <div className="flex justify-between mb-3">
        <span
          className={`text-xs px-3 py-2 rounded-full bg-white border ${styles.text} border-opacity-50`}
        >
          {status}
        </span>
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-700">
            {new Date(appt.schedule).toLocaleString()}
          </p>
          <p className="text-xs text-gray-500">Appointment Time</p>
        </div>
      </div>

      <div className="text-sm text-gray-800 space-y-2">
        <p>
          <strong>Contractor:</strong> {appt.primaryContractor}
        </p>
        <p>
          <strong>Location:</strong> {appt.location || "N/A"}
        </p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        {status === "completed" && appt.boq ? (
          <Link
            href={appt.boq}
            className="text-sm text-green-700 hover:underline"
          >
            Download BOQ
          </Link>
        ) : (
          <div />
        )}
        <div className="flex gap-3">
          <Link
            href={`/appointments/${appt.$id}/cancel`}
            className="text-sm text-red-600 hover:underline"
          >
            Cancel
          </Link>
          {status === "completed" && (
            <Link
              href={`/patients/${appt.userId}/repair-appointment`}
              className="text-sm text-blue-600 hover:underline"
            >
              Repair Appointment
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
