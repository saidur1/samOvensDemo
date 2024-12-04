import { Button } from "@/components/ui/button";
import Image from "next/image";

const Page = () => {
  return (
    <main className="container">
      <section className="flex flex-col md:flex-row gap-y-10 items-start justify-start md:px-5 py-[80px] gap-x-[100px]">
        <div className="max-w-[520px] space-y-[30px]">
          <h1 className="text-[32px] text-2F font-bold mb-[50px]">
            About Sam Ovens
          </h1>
          <p>
            Sam Ovens is an entrepreneur from Auckland, New Zealand who dropped
            out of university and started two successful companies by the age of
            24 working out of his parents garage.
          </p>
          <p>
            Sam is a digital marketing consultant who helps companies profit
            wildly through digital marketing. He has personally managed a large
            digital ad spend on behalf of clients and been able to consistently
            prove ROI.
          </p>
          <p>
            Sams clients are some of the fastest growing companies in New
            Zealand and Australia and he has helped them gain choke holds in
            their respective markets online.
          </p>
          <Button className="rounded-[3px] bg-blue-primary hover:bg-blue-primary/80 text-[20px] w-[240px] h-[50px] font-bold">
            FREE Case Study
          </Button>
        </div>
        <div>
          <Image
            width={314}
            height={416}
            alt="profile"
            src="https://samovensdemo.com/hosted/images/79/4b16503d0e11e7983bbd2478244b72/about-sam-ovens-image.png"
          />
        </div>
      </section>
    </main>
  );
};

export default Page;
