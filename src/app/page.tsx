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
            We Help Businesses Secure Their EIN Quickly and Hassle-Free
          </h1>
          <p>Starting a business and need an EIN?</p>
          <p>
            Our streamlined process simplifies applying for and obtaining your
            Employer Identification Number so you can focus on growing your
            business.
          </p>
          <p>
            If you&apos;re ready to get your EIN without the stress, click the
            button below to get started today.
          </p>
          <Button className="rounded-[3px] bg-blue-primary hover:bg-blue-primary/80 text-[20px] w-[240px] h-[50px]">
            Get Your EIN
          </Button>
        </div>
      </div>
    </div>
  );
}
