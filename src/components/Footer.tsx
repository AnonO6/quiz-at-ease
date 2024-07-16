import { Github, GithubIcon, Linkedin, User } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="inset-x-0 bottom-0 bg-white dark:bg-gray-950 z-[10] h-fit border-t border-zinc-30 dark:border-none py-2 ">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        <p className="text-l font-bold">
          Developed with ❤️ by{" "}
          <Link href={"https://www.github.com/AnonO6"}>Aviral Shukla</Link>{" "}
        </p>
        <div className="flex items-center justify-between gap-4">
          <Link href={"https://www.linkedin.com/in/aviral-shukla-85b112228/"}>
            <Linkedin />
          </Link>
          <Link href={"https://www.github.com/AnonO6"}>
            <GithubIcon />
          </Link>
          <Link href={"https://aviral.software"}>
            <User />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
