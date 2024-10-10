import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  const user = {
    firstName: "Abdo Dev",
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-medium">Welcome {user?.firstName}!</h1>
      <p className="text-gray-500 mt-2">You are signed in.</p>
      <div className="flex items-center justify-center gap-4 mt-4">
        <Link href={"/"}>
          <Button variant="outline">Back to home</Button>
        </Link>
        <Button>Sign Out</Button>
      </div>
    </div>
  );
}
