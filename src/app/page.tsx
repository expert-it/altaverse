import Image from "next/image";
import Section1 from "@/components/section1/section1";
import Section2 from "@/components/section2/section2";
import Section3 from "@/components/section3/section3";
import Section4 from "@/components/section4/section4";
import Section5 from "@/components/section5/section5";
import Section6 from "@/components/section6/section6";

export default function Home() {
  return (
    <main className="main">

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </main>
  );
}
