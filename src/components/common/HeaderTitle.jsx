import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1717854499100.json";

export default function HeaderTitle() {
  return (
    <section>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 items-center">
          <div className="col-span-4 lg:col-span-6">
            <Lottie animationData={animationData} />
          </div>
          <div className="col-span-4 lg:col-span-6 flex flex-col gap-4">
            <div className="text-4xl font-semibold text-sky-950">
              <p className="font-bold text-6xl py-2">
                Rəqəmsal İnqilaba Qoşul Gələcəyi Yarat!
              </p>
            </div>
            <p className="text-md text-gray-150">
              Texnologiya kurslarımızla, müasir bilikləri öyrənərək yarının
              lideri olun. İstər proqramlaşdırma, istər süni intellekt, hər
              sahədə sizə bələdçilik edirik. Gələcəyi bizimlə qurmağa
              hazırsınız?
            </p>
            <button className="btn btn-wide text-slate-50 font-semibold bg-orange-500 hover:bg-orange-600 transition duration-300">
              Bizə qoşul
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
