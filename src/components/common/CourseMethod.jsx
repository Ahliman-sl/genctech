import office1 from "../../assets/office1.webp";
import office2 from "../../assets/office2.webp";
import office3 from "../../assets/office3.webp";
import office4 from "../../assets/office4.webp";

function CourseMethod() {
  return (
    <section className="w-full h-max flex flex-col mt-10 lg:mt-5">
      <div className="w-full h-max flex flex-col gap-5">
        <h3 className="text-center text-3xl lg:text-6xl font-bold text-sky-950">
          Genc Tech Life-a qoşul
        </h3>
        <p className="p-5 font-semibold bg-sky-950 text-slate-50 rounded-md">
          Kursumuzda sosial həyat çox canlı və rəngarəngdir. Siz burada yeni
          dostlar qazanacaq, komanda işini öyrənəcək və müxtəlif tədbirlərdə
          iştirak edərək peşəkar şəbəkənizi genişləndirəcəksiniz. Həyatınızı
          dəyişdirmək üçün bizə qoşulun və sizə ən uyğun variantı seçin.
        </p>
      </div>
      <div className="container px-6 m-auto mt-10 shadow-xl">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-3">
            <img
              src={office1}
              className="lifeImage rounded-xl w-full h-[20rem] lg:h-[30rem]"
            />
          </div>
          <div className="col-span-4 lg:col-span-3">
            <img
              src={office2}
              className="lifeImage rounded-xl w-full h-[20rem] lg:h-[30rem]"
            />
          </div>
          <div className="col-span-4 lg:col-span-3">
            <img
              src={office3}
              className="lifeImage rounded-xl w-full h-[20rem] lg:h-[30rem]"
            />
          </div>
          <div className="col-span-4 lg:col-span-3">
            <img
              src={office4}
              className="lifeImage rounded-xl w-full h-[20rem] lg:h-[30rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseMethod;
