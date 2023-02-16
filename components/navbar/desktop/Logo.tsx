import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex">
      <span className="sr-only">Rocky Enterprise Software Foundation</span>
      <picture>
        <img className="h-6 w-auto sm:h-8" src="/icon-text.svg" alt="" />
      </picture>
    </Link>
  );
};

export default Logo;
