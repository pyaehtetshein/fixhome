type Props = {
  profile: { name: string; email: string; phone: string; address: string };
  onEdit: () => void;
};

export default function ProfileHeader({ profile, onEdit }: Props) {
  return (
    <div className="flex items-center justify-between border-b pb-6">
      <div>
        <h2 className="text-2xl font-bold">{profile.name}</h2>
        <p className="text-sm text-gray-600">{profile.email}</p>
        <p className="text-sm text-gray-600">{profile.phone}</p>
        <p className="text-sm text-gray-600">{profile.address}</p>
      </div>
      <button
        onClick={onEdit}
        className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700"
      >
        Edit Profile
      </button>
    </div>
  );
}
