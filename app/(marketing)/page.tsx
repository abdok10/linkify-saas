import Hero from "@/components/sections/Hero";
import Companies from "@/components/sections/Companies";


export default function Home() {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      <Hero />
      <Companies />
    </div>
  );
}
