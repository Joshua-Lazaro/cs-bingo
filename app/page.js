"use client";
import Donut from "./donut/page";
import Bingo from "./bingo/page";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F2F0EF] font-sans">
      <Bingo />
    </main>
  );
}