import SectionTitle from "./SectionTitle";

const ContactSection = () => (
  <section
    id="contact"
    className="h-screen flex flex-col items-center justify-center bg-green-50 px-6 text-center"
  >
    <SectionTitle title="Contact Us" />
    <p className="text-gray-700 mt-2">📧 support@fixhome.com</p>
    <p className="text-gray-700 mt-1">📞 +66 123 456 789</p>
  </section>
);

export default ContactSection;
