"use client"; // Ensure it's a Client Component in Next.js App Router

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) return <p className="fixed text-white">Loading...</p>; // Prevents accessing user before it's loaded

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[80vw] max-md:w-[90vw] flex justify-between p-4 text-white">
      <Link href="/"><h1 className="text-xl font-bold">Linktree</h1></Link>
      <div>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <div className="flex items-center justify-center gap-3">
            <Link href="/page">
              <button>Your Page</button>
            </Link>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
