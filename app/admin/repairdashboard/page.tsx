import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { repaircolumns } from "@/components/table/repaircolumns";
import { RepairDataTable } from "@/components/table/RepairDataTable";
import { getRecentRepairAppointmentList } from "@/lib/actions/repairappointment.actions";
import NavLink from "@/components/NavLink";

const AdminPage = async () => {
  const appointments = await getRecentRepairAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo.png"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        {/* Navigation Switch */}
        <nav className="flex space-x-4">
          <NavLink href="/admin" exact>
            Admin Dashboard
          </NavLink>
          <NavLink href="/admin/repairdashboard">Repair Dashboard</NavLink>
        </nav>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Repair Appointments </h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="appointments"
            count={appointments.completedCount}
            label="Completed Repair"
            icon={"/assets/icons/check.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <RepairDataTable
          columns={repaircolumns}
          data={appointments.documents}
        />
      </main>
    </div>
  );
};

export default AdminPage;
