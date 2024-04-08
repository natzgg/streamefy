import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

const Actions = async () => {
  const user = await currentUser();

  return (
    <div className="flex gap-x-4 items-center lg:mr-5">
      {!user && (
        <SignInButton>
          <Button size="sm" variant="primary">
            Login
          </Button>
        </SignInButton>
      )}
      {!!user && (
        <div className="flex gap-x-2 items-center">
          <Button
            variant="ghost"
            size="sm"
            className="hover:text-primary dark:text-muted-foreground text-white"
            asChild
          >
            <Link href={`/u/${user.username}`}>
              <Clapperboard className="w-5 h-5 lg:mr-2" />
              <p className="hidden lg:block">Dashboard</p>
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
};

export default Actions;
