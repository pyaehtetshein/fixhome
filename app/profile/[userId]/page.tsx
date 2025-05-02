"use client";

import { useState, useEffect } from "react";
import {
  getUserProfileWithAppointments,
  getUserProfileWithRepairAppointments,
  updateUserProfile,
} from "@/lib/actions/profile.actions";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import AppointmentCard from "@/components/Profile/AppointmentCard";
import RepairAppointmentCard from "@/components/Profile/RepairAppointmentCard";
import ProfileEditModal from "@/components/Profile/ProfileEditModal";

export default function ProfilePage({
  params,
}: {
  params: { userId: string };
}) {
  const [data, setData] = useState<any>(null);
  const [repairData, setRepairData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const colorPalette = [
    "bg-blue-50",
    "bg-green-50",
    "bg-yellow-50",
    "bg-red-50",
    "bg-purple-50",
    "bg-pink-50",
    "bg-teal-50",
    "bg-orange-50",
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const profileData = await getUserProfileWithAppointments(params.userId);
        const repairProfileData = await getUserProfileWithRepairAppointments(
          params.userId
        );
        if (repairProfileData) {
          const coloredRepairAppointments = repairProfileData.appointments.map(
            (appt: any) => ({
              ...appt,
              cardColor:
                colorPalette[Math.floor(Math.random() * colorPalette.length)],
            })
          );
          setRepairData({
            ...repairProfileData,
            appointments: coloredRepairAppointments,
          });
        }
        if (profileData) {
          const coloredAppointments = profileData.appointments.map(
            (appt: any) => ({
              ...appt,
              cardColor:
                colorPalette[Math.floor(Math.random() * colorPalette.length)],
            })
          );
          setData({ ...profileData, appointments: coloredAppointments });
          setUpdatedProfile(profileData.profile);
        } else setError("User not found or error occurred.");
      } catch {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [params.userId]);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUserProfile(params.userId, updatedProfile);
      setShowModal(false);
      setData((prev) => ({ ...prev, profile: updatedProfile }));
    } catch {
      setError("Failed to update profile.");
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-600 py-10 font-semibold">
        {error}
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10 font-sans">
      <ProfileHeader profile={data.profile} onEdit={() => setShowModal(true)} />

      <div>
        <h2 className="text-xl font-semibold mb-4 tracking-wide text-white-800">
          My Appointments
        </h2>
        {data.appointments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.appointments.map((appt: any) => (
              <AppointmentCard key={appt.$id} appt={appt} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm tracking-wide text-center">
            No appointments found.
          </p>
        )}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4 tracking-wide text-white-800">
          My Repair Appointments
        </h2>
        {repairData.appointments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {repairData.appointments.map((appt: any) => (
              <RepairAppointmentCard key={appt.$id} appt={appt} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm tracking-wide text-center">
            No Repair appointments found.
          </p>
        )}
      </div>

      <footer className="text-center text-gray-400 text-sm mt-16">
        <p>© 2025 FixHome. All rights reserved.</p>
      </footer>

      {showModal && (
        <ProfileEditModal
          profile={updatedProfile}
          onChange={handleProfileChange}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmitProfile}
        />
      )}
    </div>
  );
}
