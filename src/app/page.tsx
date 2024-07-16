import DetailsDialog from "@/components/DetailsDialog";
import Footer from "@/components/Footer";
import SignInButton from "@/components/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    //User is already logged in
    redirect("/dashboard");
  }
  return (
    <div className="h-[calc(100vh-96px)] overflow-hidden bg-scroll bg-[url('/trippybg.jpg')]">
      <div className="absoulute translate-x-40 translate-y-40">
        <DetailsDialog />
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Welcome to Quiz@Ease!</CardTitle>
            <CardDescription>
              Create, take and share quizes on any topic in the world using the
              powers of AI at Quiz@Ease.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignInButton text="Sign In with Google" />
          </CardContent>
        </Card>
      </div>
      <div className="fixed inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
}
