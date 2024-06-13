import { Suspense } from "react";
import Statics from "./Statics";
import Accordion from "./Accordion";
import statisticProfileImage from "../../assets/statisticProfileImage.webp";

// const Lottie = lazy(() => import("lottie-react"));
// import animationData from "../../assets/Animation - 1718042257297.json";

function CourseStatistic() {
  return (
    <section className="w-full h-max bg-[#1e201e]">
      <div className="container px-6 m-auto py-6">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-7 flex flex-col 2xl:items-center 2xl:justify-center">
            <Statics />
            <Accordion />
          </div>
          <div className="col-span-4 lg:col-span-5 gap-5 flex flex-col items-center justify-center">
            <h1 className="text-2xl lg:text-5xl font-bold text-slate-50 text-center tracking-[1.75rem]">
              Genc Tech
            </h1>
            <Suspense fallback={<div>Loading animation...</div>}>
              <img
                src={statisticProfileImage}
                className="w-[20rem] h-[20rem] object-cover rounded-xl"
                alt="profilImage"
              />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseStatistic;
