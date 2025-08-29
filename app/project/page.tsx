import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-16">
        <div className="grid grid-cols-2 gap-6">
          <Link
            href="https://github.com/LeeGukgeon/poss"
            className="bg-white rounded-2xl shadow overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src="/poss_img.png"
                alt="POSS_project_image"
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                priority
                className="object-cover"
              />
            </div>

            <div className="p-4 space-y-2">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  PyQt5
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  Optimization
                </span>
              </div>
              <p className="text-lg font-semibold">POSS</p>
              <p className="text-sm text-gray-600">
                PyQt Program for Optimized Manufacture Plan
              </p>
              <div className="text-right text-blue-600 hover:underline text-sm">
                Github
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/LeeGukgeon/thewater"
            className="bg-white rounded-2xl shadow overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src="/thewater_img.png"
                alt="POSS_project_image"
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                priority
                className="object-cover"
              />
            </div>

            <div className="p-4 space-y-2">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  Flutter
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  Google Map API
                </span>
              </div>
              <p className="text-lg font-semibold">TheWater</p>
              <p className="text-sm text-gray-600">
                angler assistant all-in-one app
              </p>
              <div className="text-right text-blue-600 hover:underline text-sm">
                Github
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/LeeGukgeon/bgs/tree/develop"
            className="bg-white rounded-2xl shadow overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src="/bgs_img.png"
                alt="POSS_project_image"
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                priority
                className="object-cover"
              />
            </div>

            <div className="p-4 space-y-2">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  React
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  Web
                </span>
              </div>
              <p className="text-lg font-semibold">BGS</p>
              <p className="text-sm text-gray-600">
                A fitness community that records exercise easily and enjoyably
                and grows together.
              </p>
              <div className="text-right text-blue-600 hover:underline text-sm">
                Github
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
{
  /* <div className="bg-gray-100">
  <div className="relative w-full h-24">
    <Image
      src="/dice2.png"
      alt="TheWater_project_image"
      width={100}
      height={100}
    />
  </div>
</div>; */
}
