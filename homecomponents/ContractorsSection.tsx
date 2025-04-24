import Image from "next/image";
import SectionTitle from "./SectionTitle";

const ContractorsSection = () => (
  <section
    id="contractors"
    className="h-screen flex flex-col items-center justify-center bg-white px-6"
  >
    <SectionTitle title="Top Contractors" />
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((id) => (
        <div key={id} className="border rounded-lg p-4 shadow-md">
          <Image
            src={`/assets/images/contractor${id}.jpg`}
            alt={`Contractor ${id}`}
            width={300}
            height={200}
            className="rounded-md mx-auto"
          />
          <h4 className="mt-4 font-semibold text-green-700 text-lg">
            Contractor {id}
          </h4>
          <p className="text-sm text-gray-500">Experienced and verified</p>
        </div>
      ))}
    </div>
  </section>
);

export default ContractorsSection;
