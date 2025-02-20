import { assets } from "../assets/assets";

const ProfileCard = () => {
  return (
    <div className="max-w-4xl bg-white flex gap-6 py-16 px-6 rounded-3xl">
      <div className="rounded-sm">
        <div className="w-44 h-44">
          <img
            className="w-full h-full object-cover"
            src={assets.card_img_1}
            alt=""
          />
        </div>
        <div className="border  border-gray-300 px-2 py-1">
          <h4 className="text-sm font-medium text-black text-wrap">
            Janey Carrey Podcast
          </h4>
          <p className="text-xs text-gray-500 font-normal pb-4 ">
            Cards against humanity
          </p>
          <div className="w-full border-t border-gray-300"></div>
          <div className="flex gap-4">
            <p className="text-xs text-gray-500 font-normal py-4">
              124 Episodes
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-sm">
        <div className="w-44 h-44">
          <img
            className="w-full h-full object-cover"
            src={assets.card_img_2}
            alt=""
          />
        </div>
        <div className="border  border-gray-300 px-2 py-1">
          <h4 className="text-sm font-medium text-black text-wrap">
            Janey Carrey Podcast
          </h4>
          <p className="text-xs text-gray-500 font-normal pb-4 ">
            Cards against humanity
          </p>
          <div className="w-full border-t border-gray-300"></div>
          <div className="flex gap-4">
            <p className="text-xs text-gray-500 font-normal py-4">
              124 Episodes
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-sm">
        <div className="w-44 h-44">
          <img
            className="w-full h-full object-cover"
            src={assets.card_img_3}
            alt=""
          />
        </div>
        <div className="border  border-gray-300 px-2 py-1">
          <h4 className="text-sm font-medium text-black text-wrap">
            Janey Carrey Podcast
          </h4>
          <p className="text-xs text-gray-500 font-normal pb-4 ">
            Cards against humanity
          </p>
          <div className="w-full border-t border-gray-300"></div>
          <div className="flex gap-4">
            <p className="text-xs text-gray-500 font-normal py-4">
              124 Episodes
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-sm">
        <div className="w-44 h-44">
          <img
            className="w-full h-full object-cover"
            src={assets.card_img_4}
            alt=""
          />
        </div>
        <div className="border  border-gray-300 px-2 py-1">
          <h4 className="text-sm font-medium text-black text-wrap">
            Janey Carrey Podcast
          </h4>
          <p className="text-xs text-gray-500 font-normal pb-4 ">
            Cards against humanity
          </p>
          <div className="w-full border-t border-gray-300"></div>
          <div className="flex gap-4">
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
