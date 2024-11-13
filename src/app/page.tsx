import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-y-10 items-start justify-center py-[80px] gap-x-[100px]">
        <div>
          <Image
            width={314}
            height={416}
            alt="profile"
            src="https://samovensdemo.com/hosted/images/7b/ee65303cf311e7a03b9505c27d3bf2/sam-ovens.png"
          />
        </div>
        <div className="max-w-[520px] space-y-[30px]">
          <h1 className="text-[32px] text-2F font-bold mb-[50px]">
            I help people start and grow profitable consulting businesses
          </h1>
          <p>Are you a consultant or coach struggling to find clients?</p>
          <p>
            My name is Sam Ovens and I help consultants get high value clients
            using my predictable clients system.
          </p>
          <p>
            If you&apos;re interested in getting more clients with
            predictability click the button below to learn more.
          </p>
          <Button className="rounded-[3px] bg-blue-primary hover:bg-blue-primary/80 text-[20px] w-[240px] h-[50px]">
            FREE Case Study
          </Button>
        </div>
      </div>
    </div>
  );
}
