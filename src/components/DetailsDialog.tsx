"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

type Props = {};

const DetailsDialog = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="flex items-center px-2 py-1 text-white rounded-md bg-slate-800 animate-bounce">
          What is this
          <HelpCircle className="w-5 h-5 ml-1" />
        </span>
      </DialogTrigger>
      <DialogContent className="w-[70vw] max-w-[100vw] md:w-[50vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to Quiz@Ease!</DialogTitle>
          <DialogDescription>
            <p className="my-2 mt-4 ">
              Are you tired of mundane and repetitive quizzes? Say goodbye to
              the ordinary and embrace the extraordinary with Quiz@Ease! Our
              platform is revolutionizing the quiz and trivia experience by
              harnessing the immense potential of artificial intelligence.
            </p>
            <hr />
            <p className="my-2 font-semibold">
              <h4 className="text-base font-semibold">Built with</h4>
              <div className="grid justify-around grid-cols-4 mt-2 gap-y-3">
                <div className="flex items-center gap-2">
                  <Image alt="Aiven" src="/aiven.png" width={35} height={35} />
                  <span className="">Aiven</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="nextjs"
                    src="/nextjs.png"
                    width={35}
                    height={35}
                  />
                  <span className="">Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="tailwind"
                    src="/tailwind.png"
                    width={35}
                    height={35}
                  />
                  <span className="">Tailwind</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="nextauth"
                    src="/nextauth.png"
                    width={30}
                    height={30}
                  />
                  <span className="">NextAuth</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="openai"
                    src="/openai.png"
                    width={30}
                    height={30}
                  />
                  <span className="">OpenAI</span>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    alt="react query"
                    src="/react-query.png"
                    width={30}
                    height={30}
                  />
                  <span className="">React Query</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="primsa"
                    src="/prisma.png"
                    width={30}
                    height={30}
                  />
                  <span className="">Prisma</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="typescript"
                    src="/typescript.png"
                    width={30}
                    height={30}
                  />
                  <span className="">TypeScript</span>
                </div>
              </div>
            </p>
            <p className="my-2 font-semibold">
              <h4 className="text-base font-semibold mb-1">Deployed using</h4>
              <div className="grid justify-around grid-cols-4 mt-2 gap-y-3">
                <div className="flex items-center gap-2">
                  <Image
                    alt="Digital Ocean"
                    src="/digitalocean.svg"
                    width={35}
                    height={35}
                  />
                  <span className="">Digital Ocean</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="Docker"
                    src="/docker.svg"
                    width={35}
                    height={35}
                  />
                  <span className="">Docker</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image alt="Nginx" src="/nginx.svg" width={35} height={35} />
                  <span className="">Nginx</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt="certbot"
                    src="/certbot.png"
                    width={30}
                    height={40}
                  />
                  <span className="">certbot</span>
                </div>
              </div>
            </p>
            <p className="my-2 font-semibold">
              <h4 className="text-base font-semibold mb-1">
                No downtime CI/CD ensured using{" "}
              </h4>
              <div className="grid justify-around grid-cols-4 mt-2 gap-y-3">
                <div className="flex items-center gap-2">
                  <Image
                    alt="Github Actions"
                    src="/GitHubActions.svg"
                    width={35}
                    height={35}
                  />
                  <span className="">Github Actions</span>
                </div>
              </div>
            </p>
            <hr />
            <div className="flex flex-row justify-center items-center gap-2">
              <p className="my-2 font-semibold">
                This project is open sourced, feel free to contribute
              </p>
              <Link href={"https://github.com/AnonO6/quiz-at-ease"}>
                <GitHubLogoIcon />
              </Link>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsDialog;
