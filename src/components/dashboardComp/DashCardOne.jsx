import AvatarMessage from "./AvatarMessage";

const DashCardOne = () => {
  return (
    <article className="bg-white text-base shadow-md font-bold w-80 rounded-md">
      <div className="flex flex-col gap-2 p-6 pb-2">
        <div className="flex justify-between items-center text-green-30">
          <h3>#2309742097</h3>
          <h3>N72,627.07</h3>
        </div>

        <p className="text-black-50">07-Sept-2023</p>
      </div>

      <div className="border-t border-b border-black-30 px-6 py-2 flex flex-col gap-3">
        <ul className="flex flex-wrap gap-5 gap-y-1">
          <li>20X Tubers of Yam</li>
          <li>1x bag of rice</li>
          <li>17x basket of potatoes</li>
        </ul>

        <p className="text-green-30 text-sm">+4 more orders</p>
      </div>

      <div className="px-7">
        <AvatarMessage name="Toma John" text="I am waiting woo" />
      </div>
    </article>
  );
};

export default DashCardOne;
