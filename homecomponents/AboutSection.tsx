import SectionTitle from "./SectionTitle";

const AboutSection = () => (
  <section
    id="about"
    className="h-screen flex items-center justify-center bg-white text-center px-6"
  >
    <div>
      <SectionTitle title="About Us" />
      <p className="mt-4 max-w-3xl mx-auto text-gray-700">
        FixHome connects homeowners with trusted contractors. From plumbing to
        carpentry, we bring skilled experts to your doorstep, on time, every
        time.
      </p>
    </div>
  </section>
);

export default AboutSection;
