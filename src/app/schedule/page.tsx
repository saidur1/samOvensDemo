import { CalendarOff } from "lucide-react";

const Schedule = () => {
  return (
    <>
      <div className="container my-[50px]">
        <h1 className="text-[44px] text-[#2F2F2F] max-w-[930px] mx-auto text-center">
          Schedule Your Breakthrough Strategy Session With Sam Right Now
        </h1>

        <div className="shadow-md w-full h-[500px] border-[1px] mt-10 flex flex-col justify-center items-center text-gray-400 gap-y-3">
          <CalendarOff className="h-20 w-20" />
          <div>
            <p className="text-[18px] text-center">
              No times are currently available.
            </p>
            <p className="text-[18px] text-center">
              Please contact the person you would like to schedule with.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
