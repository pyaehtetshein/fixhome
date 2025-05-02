type Props = {
  profile: { name: string; email: string; phone: string; address: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function ProfileEditModal({
  profile,
  onChange,
  onClose,
  onSubmit,
}: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black rounded-lg p-8 w-full max-w-lg border-2 border-gray-600">
        <h2 className="text-2xl font-semibold text-center text-white">
          Edit Profile
        </h2>
        <form onSubmit={onSubmit} className="space-y-4 mt-6">
          {["name", "email", "phone", "address"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm text-gray-300 capitalize"
              >
                {field}
              </label>
              <input
                id={field}
                name={field}
                type="text"
                value={(profile as any)[field]}
                onChange={onChange}
                className="mt-2 p-4 border border-gray-500 rounded-md w-full bg-gray-800 text-gray-200"
              />
            </div>
          ))}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
