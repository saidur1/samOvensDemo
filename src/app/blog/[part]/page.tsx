import Image from "next/image";
import PartOneBlog from "./_components/part-one-blog";
import ProfileSection from "./_components/profile-section";

const Page = ({ params }: { params: { part: string } }) => {
  const part = params?.part;
  return (
    <div className="container mt-[100px]">
      <Header part={part} />
      {part === "1" && <PartOneBlog />}
      {part === "2" && <PartTwoBlog />}
      {part === "3" && <PartThreeBlog />}
      <ProfileSection />
    </div>
  );
};

export default Page;

const Header = ({ part }: { part: string }) => {
  return (
    <div className="mb-[50px]">
      <h1 className="text-[22px] text-blue-primary font-medium">
        Demystifying EIN (Employer Identification Number) #{part}
      </h1>
      <p className="text-gray-400">Written by Saidur Rahman on October 2024</p>
      <div className="relative w-full h-[300px] mt-[20px]">
        <Image
          src="https://samovensdemo.com/hosted/images/44/129e013cfe11e782e023068d9967ce/n-RICH-PEOPLE-628x314.jpg"
          alt="img"
          fill
        />
      </div>
    </div>
  );
};

const PartTwoBlog = () => {
  return (
    <div className="pb-[100px] px-[20px]">
      <p className="text-[12px] text-center text-[rgb(136,136,136)] mt-[80px]">
        October 22, 2024
      </p>
      <div className="max-w-[1100px] mx-auto space-y-3">
        <p className="text-gray-500 ">
          Sed laoreet nibh vel turpis posuere sodales. Mauris non pellentesque
          massa. Aenean eleifend neque non iaculis lacinia. Ut nunc risus,
          blandit ut odio eget, porttitor faucibus nisl. Phasellus fringilla
          felis a lobortis tincidunt.
        </p>

        <p className="text-gray-500 ">
          Sed cursus eu dolor ac dignissim. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aenean sed nulla maximus, aliquam purus
          nec, tincidunt elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>

        <p className="text-gray-500">
          Etiam nisl lectus, maximus a nunc eleifend, suscipit mollis elit.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nulla luctus pellentesque diam, in scelerisque
          justo rutrum in.
        </p>
        <p className="text-gray-500 ">
          Quisque suscipit mauris vel augue rutrum lacinia. Ut malesuada est nec
          fringilla accumsan. Donec tristique, enim nec egestas interdum, arcu
          lorem pulvinar lorem, gravida convallis urna velit in enim.
        </p>
        <p className="text-gray-500 ">
          Aenean eget ultrices sem, vel suscipit dolor. Vestibulum mollis
          sollicitudin eros at viverra. Proin porttitor pellentesque felis quis
          ullamcorper. Quisque cursus, felis et dictum porttitor, risus neque
          ornare nibh, imperdiet efficitur sem ligula id arcu.
        </p>
      </div>
    </div>
  );
};

const PartThreeBlog = () => {
  return (
    <div className="pb-[100px] px-[20px]">
      <p className="text-[12px] text-center text-[rgb(136,136,136)] mt-[80px]">
        October 22, 2024
      </p>
      <div className="max-w-[1100px] mx-auto space-y-3">
        <p className="text-gray-500 ">
          Sed laoreet nibh vel turpis posuere sodales. Mauris non pellentesque
          massa. Aenean eleifend neque non iaculis lacinia. Ut nunc risus,
          blandit ut odio eget, porttitor faucibus nisl. Phasellus fringilla
          felis a lobortis tincidunt.
        </p>

        <p className="text-gray-500 ">
          Sed cursus eu dolor ac dignissim. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aenean sed nulla maximus, aliquam purus
          nec, tincidunt elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>

        <p className="text-gray-500">
          Etiam nisl lectus, maximus a nunc eleifend, suscipit mollis elit.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nulla luctus pellentesque diam, in scelerisque
          justo rutrum in.
        </p>
        <p className="text-gray-500 ">
          Quisque suscipit mauris vel augue rutrum lacinia. Ut malesuada est nec
          fringilla accumsan. Donec tristique, enim nec egestas interdum, arcu
          lorem pulvinar lorem, gravida convallis urna velit in enim.
        </p>
        <p className="text-gray-500 ">
          Aenean eget ultrices sem, vel suscipit dolor. Vestibulum mollis
          sollicitudin eros at viverra. Proin porttitor pellentesque felis quis
          ullamcorper. Quisque cursus, felis et dictum porttitor, risus neque
          ornare nibh, imperdiet efficitur sem ligula id arcu.
        </p>
      </div>
    </div>
  );
};
