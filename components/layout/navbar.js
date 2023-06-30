import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import classes from "./navbar.module.css";

function MainNavigation() {
  return (
    <header className={`${classes.header} bg-emerald-400 text-slate-950`}>
      <div className="flex">
        <Image src="/favicon.ico" alt="vercel" width={50} height={50} />
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
