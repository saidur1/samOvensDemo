import Image from "next/image";

export default function ProfileSection() {
  return (
    <div className="max-w-4xl mx-auto p-6 border-t">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-32 h-32 relative shrink-0">
          <Image
            src="https://samovensdemo.com/hosted/images/23/641ca03cff11e7bde3f9f67dd572b5/sam-ovens-headshot.jpg"
            alt="Profile photo"
            width={128}
            height={128}
            className="rounded-lg object-cover"
            priority
          />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Sam Ovens
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Sam Ovens helps people start and grow successful consulting
            businesses. He is an expert at helping people get clients using
            online methods and making things super simple to understand. If
            you&apos;re interested in starting your own consulting business or
            scaling up and getting clients then definitely reach out and request
            a free strategy session today.
          </p>
        </div>
      </div>
    </div>
  );
}
