import Image from "next/image";
import Link from "next/link";
export default function BrandLogo() {
  return <Link href="/" className="brand-lockup" aria-label="Imperial Cleaning Inc home">
    <Image src="/hero-logo.webp" alt="" width={48} height={54} priority />
    <span><strong>IMPERIAL</strong><span>CLEANING INC.</span></span>
  </Link>;
}
