import { GrWorkshop } from "react-icons/gr";
import { GrCertificate } from "react-icons/gr";
import { MdWorkHistory } from "react-icons/md";
import courseImage from "../../assets/courseImage.webp";
function CourseStats() {
  return (
    <section className="mt-5 mb-10">
      <div
        className="w-full h-max py-2 lg:py-0 px-4  lg:h-[30rem]  flex flex-col lg:flex-row items-center gap-5 text-slate-50 relative"
        style={{
          backgroundImage: `url(${courseImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="flex flex-col 2xl:flex-row ">
          <div className="w-full 2xl:w-[15rem]  h-max flex flex-col items-start p-2 mx-2 z-[100]">
            <div className="flex flex-row gap-2 items-center justify-center">
              <MdWorkHistory className="text-4xl" />
              <p className="text-4xl">Təcrübə</p>
            </div>
            <p>
              Bu kurs, müxtəlif texnologiya sahələrində geniş təcrübə qazanmaq
              üçün ideal bir mühit yaradır. Kurs müddətində proqramlaşdırma,
              məlumat analizi və layihə idarəetməsi kimi sahələrdə dərin
              biliklər əldə edəcəksiniz. Komanda işi və problemlərin həlli
              bacarıqlarınızı inkişaf etdirə biləcəksiniz.
            </p>
          </div>
          <div className="w-full 2xl:w-[15rem] h-max flex flex-col items-start p-2 mx-2 z-[100]">
            <div className="flex flex-row gap-2 items-center justify-center">
              <GrWorkshop className="text-4xl" />
              <p className="text-4xl">Təhsil</p>
            </div>
            <p>
              Kursumuz, kompüter elmləri üzrə dərin nəzəri biliklər təqdim edir.
              Burada proqramlaşdırma dilləri, məlumat bazaları və sistem
              arxitekturası kimi mövzuları əhatə edən dərslər alacaqsınız.
              Təhsil müddətində əldə edəcəyiniz nəzəri biliklər, praktiki
              layihələrdə uğurla tətbiq etməyinizə kömək edəcək.
            </p>
          </div>
          <div className="w-full 2xl:w-[15rem] h-max flex flex-col items-start p-2 mx-2 z-[100]">
            <div className="flex flex-row gap-2 items-center justify-center">
              <GrCertificate className="text-4xl" />
              <p className="text-4xl">Sertifikat</p>
            </div>
            <p>
              Kursu bitirdikdən sonra, Microsoft, Google və Cisco kimi tanınmış
              şirkətlərin sertifikatlarına sahib olma imkanı əldə edəcəksiniz.
              Bu sertifikatlar sizin texnoloji bacarıqlarınızı təsdiq edəcək və
              müasir iş dünyasında rəqabət qabiliyyətinizi artıracaq.
            </p>
          </div>
        </div>
        <div className=" w-full h-[20rem] md:h-[15rem] lg:w-[40rem] lg:h-[20rem] bg-slate-50 text-[#000300]  z-[100] flex flex-col items-center justify-center text-center gap-3">
          <h3>Öz Sürətinizlə Öyrənin</h3>
          <p className="text-3xl font-semibold">
            Yüksək Tələb Gören Bacarıqları Öyrənərək Karyeranızı Gücləndirin
          </p>
          <button className="btn btn-primary ">Bizimlə Əlaqə</button>
        </div>
      </div>
    </section>
  );
}

export default CourseStats;
