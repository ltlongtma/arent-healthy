import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <main>
        <div className="grid grid-cols-2">
          <div className="relative h-[312px]">
            <Image
              src="/main-photo.jpg"
              alt="Main photo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl">75%</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
