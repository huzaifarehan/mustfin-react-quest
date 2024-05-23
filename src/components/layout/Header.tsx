import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-transparent border-b backdrop-blur-2xl">
      <div className="sm:container p-2 mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <Image src="/logo.svg" height={40} width={90} alt="Mustfin Logo" />
        </Link>
        {/* <nav className="space-x-4 sm:block hidden">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact">Join</Link>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
