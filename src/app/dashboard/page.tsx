import DetailsDialog from "@/components/DetailsDialog";
import Footer from "@/components/Footer";
import HistoryCard from "@/components/dashboard/HistoryCard";
import HotTopicsCard from "@/components/dashboard/HotTopicsCard";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export const metadata = {
  title: "Dashboard | Quizzzy",
  description: "Quiz yourself on anything!",
};

const Dasboard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div>
      <main className="p-8 mx-auto w-max-screen overflow-hidden bg-[url('/trippybg.jpg')]">
        <div className="flex items-center">
          <h2 className="mr-2 text-3xl text-white font-bold tracking-tight">
            Dashboard
          </h2>
          <DetailsDialog />
        </div>

        <div className="grid gap-4 mt-4 md:grid-cols-2">
          <QuizMeCard />
          <HistoryCard />
        </div>
        <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
          <HotTopicsCard />
          <RecentActivityCard />
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Dasboard;
