"use client";
import Modal from "@/components/ui/modal";
import { ChevronsRight, Lock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CaseStudyForm from "./_components/form";

const texts = [
  "FREE Case Study Reveals:",
  'Why you need a niche and a "proof of concept"',
  "The secret weapon of all 7-figure coaches and consultants",
  "The simple two-step system to get high value clients",
];

const Page = () => {
  return (
    <div className="mb-[150px]">
      <Header />
      <Hero />
    </div>
  );
};

export default Page;

const Hero = () => {
  const [open, setOpen] = useState(false);
  const modalControll = () => {
    setOpen((p) => !p);
  };
  return (
    <>
      <div className="max-w-[1130px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 mt-[80px]">
        <div className="w-[388px] h-[219px] relative">
          <Image
            src="https://samovensdemo.com/hosted/images/58/0452405d9411e6a2e353b2953efb85/ovens1.jpg"
            fill
            alt="profile"
          />
        </div>
        <div>
          <div className="font-raleway text-[#2F2F2F] space-y-[20px]">
            {texts.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <button
            className="bg-[#0174C7] w-[367px] h-[63px] flex justify-center items-center text-[22px] font-raleway text-white font-bold gap-x-2 mt-[20px] rounded-md"
            onClick={modalControll}
          >
            Get Your Case Study Now <ChevronsRight />
          </button>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalUI />
      </Modal>
    </>
  );
};

const Header = () => {
  return (
    <div className="mt-[46px]">
      <p className="text-[20px] text-blue-primary font-semibold text-primary-blue text-center">
        {" "}
        Case Study For Coaches & Consultants:
      </p>
      <h1 className="text-[42px] font-lato font-medium text-[#2F2F2F] max-w-[900px] mx-auto mt-[35px]">
        &ldquo;How I Get 30-50 High Ticket Coaching And Consulting Clients Every
        Single Month With Predictability Down To The Dollar And Day&ldquo;
      </h1>
    </div>
  );
};

const ModalUI = () => {
  return (
    <div className="max-w-[500px] mx-auto space-y-10">
      <Image
        src="https://samovensdemo.com/hosted/images/98/ce74d03d7311e78c4cebad35bb41fa/leadbox_status_bar_gray3.gif"
        alt="loader"
        width={600}
        height={40}
      />

      <h1 className="text-black text-[24px] font-semibold text-center mt-4 max-w-[450px] mx-auto">
        Enter your email to get instant access to the case studys{" "}
      </h1>

      <CaseStudyForm />

      <p className="flex items-center gap-x-2 justify-center text-[14px] pb-[20px]">
        <Lock className="h-4 w-4" /> Your information is 100% secure
      </p>
    </div>
  );
};
