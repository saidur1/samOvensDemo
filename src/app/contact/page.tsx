import { Button } from "@/components/ui/button";
import Image from "next/image";

const Page = () => {
  return (
    <main className="container">
      <section className="flex flex-col md:flex-row gap-y-10 items-start justify-start md:px-5 py-[80px] gap-x-[100px]">
        <div className="max-w-[520px] space-y-[30px]">
          <h1 className="text-[32px] text-2F font-bold mb-[50px]">
            Want to get in touch? Let&apos;s talk!
          </h1>
          <p>
            To contact Sam or his staff please use the following information.
          </p>
          <p>
            Sam Ovens and his staff operate Monday – Friday 9am – 5pm Eastern
            Time (New York). To contact Sam Ovens or his team please use the
            information below:
          </p>
          <div>
            <h3 className="font-semibold">Email:</h3>
            <p>support@samovens.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Phone:</h3>
            <p>+1 212 500 5050</p>
          </div>
          <Button className="rounded-[3px] bg-blue-primary hover:bg-blue-primary/80 text-[20px] w-[240px] h-[50px]">
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
