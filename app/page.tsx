"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between m-32">
      <div
        className="font-bold text-black cursor-pointer"
        onClick={() => router.push("/login")}
      >
        Sign In
      </div>
      <div
        className="font-bold text-black cursor-pointer"
        onClick={() => router.push("/signup")}
      >
        Sign Up
      </div>
    </div>
  );
};

export default Home;
