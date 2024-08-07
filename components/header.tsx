import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Header({ children, className }: HeaderProps) {
  return (
    <div className="header">
      <Link href="/" className={cn("", className)}>
        <Image
          src="/assets/icons/logo.svg"
          alt="Logo with name"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/assets/icons/logo.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
}
