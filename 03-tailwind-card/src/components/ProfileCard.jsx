import { assets } from "../assets/assets";
import { MicrophoneIcon } from "@heroicons/react/24/solid";

const ProfileCard = () => {
  return (
    <div className="max-w-4xl bg-white flex flex-col md:flex-row gap-6 py-8 px-4 md:py-16 md:px-6 rounded-sm md:rounded-3xl sm:my-8">
      <div className="rounded-sm">
        <div className="relative w-44 h-44 overflow-hidden group">
          <img
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-130"
            src={assets.card_img_1}
            alt=""
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <p className="text-white text-sm font-semibold">Listen Now</p>
          </div>
        </div>
        <div className="border  border-gray-300 px-2 py-1">
          <h4 className="text-sm font-medium text-black text-wrap">
            Janey Carrey Podcast
          </h4>
          <p className="text-xs text-gray-500 font-normal pb-4 ">
            Cards against humanity
          </p>
          <div className="w-full border-t border-gray-300"></div>
          <div className="flex gap-1 items-center">
            <MicrophoneIcon className="w-4 h-4 text-gray-700" />
            <p className="text-xs text-gray-500 font-normal py-4">
              124 Episodes
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-sm">
        <div className="relative w-44 h-44 overflow-hidden group">
          <img
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-130"
            src={assets.card_img_2}
            alt=""
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <p className="text-white text-sm font-semibold">Listen Now</p>
          </div>
        </div>
        <div className="border  border-gray-300 px-2 py-1">
          <h4 className="text-sm font-medium text-black text-wrap">
            Janey Carrey Podcast
          </h4>
          <p className="text-xs text-gray-500 font-normal pb-4 ">
            Cards against humanity
          </p>
          <div className="w-full border-t border-gray-300"></div>
          <div className="flex gap-1 items-center">
            <MicrophoneIcon className="w-4 h-4 text-gray-700" />
            <p className="text-xs text-gray-500 font-normal py-4">
              124 Episodes
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-sm">
        <div className="relative w-44 h-44 overflow-hidden group">
          <img
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-130"
            src={assets.card_img_3}
            alt=""
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <p className="text-white text-sm font-semibold">Listen Now</p>
          </div>
        </div>
        <div className="border  border-gray-300 px-2 py-1">
          <h4 className="text-sm font-medium text-black text-wrap">
            Janey Carrey Podcast
          </h4>
          <p className="text-xs text-gray-500 font-normal pb-4 ">
            Cards against humanity
          </p>
          <div className="w-full border-t border-gray-300"></div>
          <div className="flex gap-1 items-center">
            <MicrophoneIcon className="w-4 h-4 text-gray-700" />
            <p className="text-xs text-gray-500 font-normal py-4">
              124 Episodes
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-sm">
        <div className="relative w-44 h-44 overflow-hidden group">
          <img
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-130"
            src={assets.card_img_4}
            alt=""
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <p className="text-white text-sm font-semibold">Listen Now</p>
          </div>
        </div>
        <div className="border  border-gray-300 px-2 py-1">
          <h4 className="text-sm font-medium text-black text-wrap">
            Janey Carrey Podcast
          </h4>
          <p className="text-xs text-gray-500 font-normal pb-4 ">
            Cards against humanity
          </p>
          <div className="w-full border-t border-gray-300"></div>
          <div className="flex gap-1 items-center">
            <MicrophoneIcon className="w-4 h-4 text-gray-700" />
            <p className="text-xs text-gray-500 font-normal py-4">
              124 Episodes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
