import React from "react";
import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YtSocial from "@/assets/social-youtube.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="py-5 border-t border-white/15">
        <div className="container">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2 lg:flex-1">
              <Logo className="h-6 w-6"/>
              <div className="font-medium">AI Startup Landing Page</div>
            </div>
            <div className="lg:flex-1">
              <nav className="flex flex-col gap-5 lg:flex-row lg:gap-7 lg:justify-center">
                <Link href="#" className="text-white/70 hover:text-white  md:text-md transition">Features</Link>
                <Link href="#" className="text-white/70 hover:text-white  md:text-md transition">Developers</Link>
                <Link href="#" className="text-white/70 hover:text-white  md:text-md transition">Company</Link>
                <Link href="#" className="text-white/70 hover:text-white  md:text-md transition">Blog</Link>
                <Link href="#" className="text-white/70 hover:text-white  md:text-md transition">Changelog</Link>
              </nav>
            </div>
            <div className="flex gap-5 items-center lg:flex-1 lg:justify-end">
              <XSocial className="text-white/40 hover:text-white transition"/>
              <InstaSocial className="text-white/40 hover:text-white transition"/>
              <YtSocial className="text-white/40 hover:text-white transition"/>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
