import Image from "next/image";
import Link from "next/link";
import Logo from "../images/dojo-logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Dojo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>AKM Desk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
