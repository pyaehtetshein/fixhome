"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    { title: "Plumbing", icon: "/assets/icons/plumbing.svg" },
    { title: "Electrical", icon: "/assets/icons/electrical.svg" },
    { title: "Painting", icon: "/assets/icons/painting.svg" },
    { title: "Roofing", icon: "/assets/icons/roof.svg" },
    { title: "Cleaning", icon: "/assets/icons/cleaning.svg" },
    { title: "Carpentry", icon: "/assets/icons/carpentry.svg" },
  ];

  const contractors = [
    {
      name: "John Doe",
      city: "Bangkok",
      image: "/assets/images/contractor1.jpg",
    },
    {
      name: "Jane Smith",
      city: "Chiang Mai",
      image: "/assets/images/contractor2.jpg",
    },
    {
      name: "Michael Brown",
      city: "Phuket",
      image: "/assets/images/contractor3.jpg",
    },
    {
      name: "Emily White",
      city: "Pattaya",
      image: "/assets/images/contractor4.jpg",
    },
  ];

  return (
    <main className="text-white font-sans bg-neutral-950">
      <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-80 backdrop-blur-sm shadow-lg">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link
            href="#"
            className="text-2xl font-bold tracking-widest text-green-500"
          >
            FixHome
          </Link>
          <nav className="hidden gap-10 text-sm font-medium md:flex">
            {["Home", "About", "Services", "Contractors", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-green-500 transition duration-300 ease-in-out"
                >
                  {item}
                </a>
              )
            )}
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col bg-black/80 px-6 pb-4 md:hidden">
            {["Home", "About", "Services", "Contractors", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="py-2 cursor-pointer text-white hover:text-green-400"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex items-center justify-center text-center h-screen bg-[url('/assets/images/home-repair-bg.jpg')] bg-cover bg-center"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl drop-shadow-lg">
            Transform Your Home
            <br className="hidden sm:inline" /> with Professional Repairs
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Seamless. Fast. Reliable. Built for modern living.
          </p>
          <a
            href="/home"
            className="mt-8 inline-block rounded-full bg-green-500 px-8 py-3 text-lg font-semibold text-black hover:bg-green-600 transition-all duration-300"
          >
            Getting Started
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="grid md:grid-cols-2 gap-8 px-8 py-24 items-center min-h-screen"
        data-aos="fade-left"
      >
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-green-400">
            Why Choose FixHome?
          </h2>
          <p className="text-gray-300 text-lg">
            We connect you with top-rated contractors in your area. Whether it's
            plumbing, electrical, painting, or renovations — FixHome delivers
            quality and satisfaction.
          </p>
        </div>
        <div className="h-96 bg-[url('/assets/images/about-bg.jpg')] bg-cover bg-center rounded-xl shadow-lg" />
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="min-h-screen bg-gradient-to-br from-neutral-900 to-neutral-800 px-8 py-24"
        data-aos="fade-up"
      >
        <h2 className="text-center text-4xl font-bold text-green-400 mb-16">
          Our Services
        </h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-neutral-900 p-6 rounded-xl shadow-xl hover:shadow-green-500/30 transition duration-300"
            >
              <img
                src={s.icon}
                alt={s.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl text-center font-semibold text-white">
                {s.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CONTRACTORS */}
      <section
        id="contractors"
        className="min-h-screen px-8 py-24 bg-neutral-950"
        data-aos="fade-up"
      >
        <h2 className="text-center text-4xl font-bold text-green-400 mb-16">
          Top Contractors
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {contractors.map((c) => (
            <div
              key={c.name}
              className="overflow-hidden rounded-xl bg-neutral-900 shadow-lg"
            >
              <img
                src={c.image}
                alt={c.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-white text-center">
                  {c.name}
                </h3>
                <p className="text-gray-400 text-center">{c.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen bg-gradient-to-b from-neutral-900 to-black px-8 py-24"
        data-aos="fade-up"
      >
        <h2 className="text-center text-4xl font-bold text-green-400 mb-12">
          Contact Us
        </h2>
        <form className="mx-auto max-w-2xl space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-lg border border-gray-700 bg-neutral-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-gray-700 bg-neutral-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-green-500"
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="w-full rounded-lg border border-gray-700 bg-neutral-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-green-500"
          />
          <button className="w-full rounded-lg bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-600 transition-all duration-300">
            Send Message
          </button>
        </form>
        <div className="mt-12 flex justify-center gap-6">
          <a href="#" className="text-gray-400 hover:text-green-400">
            Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-green-400">
            Instagram
          </a>
          <a href="#" className="text-gray-400 hover:text-green-400">
            Twitter
          </a>
        </div>
      </section>

      <footer className="bg-black text-gray-500 text-center py-6 border-t border-gray-800">
        <p>© 2025 FixHome. All rights reserved.</p>
      </footer>
    </main>
  );
}
