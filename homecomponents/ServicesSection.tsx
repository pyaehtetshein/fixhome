import SectionTitle from "./SectionTitle";

const ServicesSection = () => (
  <section
    id="services"
    className="h-screen flex flex-col items-center justify-center bg-gray-100 px-6"
  >
    <SectionTitle title="Our Services" />
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {[
        "Plumbing",
        "Electrical",
        "Painting",
        "Cleaning",
        "Appliance Repair",
        "Carpentry",
      ].map((service) => (
        <div key={service} className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-green-700">{service}</h3>
          <p className="text-gray-600 mt-2">Professional & reliable service</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
