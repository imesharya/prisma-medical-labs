import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      <Hero />
      <Metrics />
    </div>
  );
}
