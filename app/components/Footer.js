import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full flex flex-col items-center justify-between px-4 py-4 md:px-6 md:py-6 mt-auto">
      <div className="w-full flex items-center justify-between px-4 py-4 md:px-6 md:py-6 mt-auto">
        <Link href="/" className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[grey] rounded">
          <Image
            src="/Uplift church.png"
            alt="Uplift Church - Home"
            width={100}
            height={40}
            className="h-8 w-auto md:h-10 opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>
        <nav aria-label="Footer navigation">
          <Link
            href="/events"
            className="text-sm md:text-base font-medium hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[grey] rounded px-1"
          >
            Events
          </Link>
        </nav>
      </div>
      <p>&copy; {currentYear} Uplift Church. All rights reserved.</p>
    </footer>
  );
}
