"use client";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 mt-[500px] text-neutral-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Branding */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Osmium</h2>
            <p className="text-sm text-neutral-400 mt-2">
              AI mentor personlised by you for you.
            </p>
          </div>



          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="https://twitter.com/osmium_ai" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 hover:text-white transition" />
            </a>
            <a href="https://linkedin.com/company/osmium" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 hover:text-white transition" />
            </a>
            <a href="https://github.com/osmium-ai" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Osmium. All rights reserved.
        </div>
      </div>
    </footer>
);
}
