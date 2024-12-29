import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Link from "next/link";
import Button from "@/components/Button";

const Header = () => {
  return (
    <>
      <header className="py-4 border-b border-white/15 md:border-none">
        <div className="container">
          <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
            <div>
              <div className="border border-white/15 rounded-lg h-10 w-10 inline-flex items-center justify-center">
                <LogoIcon className="h-8 w-8" />
              </div>
            </div>
            <div className="hidden md:block">
              <nav className="flex gap-8 text-sm ">
                <Link
                  href={"#"}
                  className="text-white/70 hover:text-white transition"
                >
                  Features
                </Link>
                <Link
                  href={"#"}
                  className="text-white/70 hover:text-white transition"
                >
                  Developers
                </Link>
                <Link
                  href={"#"}
                  className="text-white/70 hover:text-white transition"
                >
                  Pricing
                </Link>
                <Link
                  href={"#"}
                  className="text-white/70 hover:text-white transition"
                >
                  Changelog
                </Link>
              </nav>
            </div>
            <div className="flex gap-4 items-center">
              {/* Button here */}
              <Button>Join Waitlist</Button>
              <MenuIcon className="md:hidden" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
