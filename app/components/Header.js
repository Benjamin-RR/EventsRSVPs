import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-4 md:px-6 md:py-6">
      <Link href="/" className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[grey] rounded">
        <Image
          src="/Uplift church.png"
          alt="Uplift Church - Home"
          width={120}
          height={48}
          className="h-10 w-auto md:h-12"
          priority
        />
      </Link>
      <nav aria-label="Main navigation">
        <Link
          href="/events"
          className="text-base md:text-lg font-medium hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[grey] rounded px-1"
        >
          Events
        </Link>
      </nav>
    </header>
  );
}
