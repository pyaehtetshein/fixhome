import Link from "next/link";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center bg-cover bg-center text-white max-h-full max-w-full"
      style={{
        backgroundImage: "url('/assets/images/background.jpg')",
      }}
    >
      <div className="bg-black/60 absolute inset-0 z-0" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to FixHome</h1>
        <p className="text-lg mb-6">Your trusted partner in home repairs</p>
        <Link href="/home">
          <button className="rounded-full bg-green-500 px-6 py-3 font-medium hover:bg-green-600">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeSection;
