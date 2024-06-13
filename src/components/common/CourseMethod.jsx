import office1 from "../../assets/office1.webp";
import office2 from "../../assets/office2.webp";
import office3 from "../../assets/office3.webp";
import office4 from "../../assets/office4.webp";

function CourseMethod() {
  return (
    <section className="w-full h-auto flex flex-col mt-10 lg:mt-10">
      <div className="flex flex-col gap-5 items-center">
        <h3 className="text-center text-3xl lg:text-6xl font-bold text-sky-950">
          Genc Tech Life-a qoşul
        </h3>
        <p className="p-5 font-semibold bg-sky-950 text-slate-50 rounded-md max-w-3xl">
          Kursumuzda sosial həyat çox canlı və rəngarəngdir. Siz burada yeni
          dostlar qazanacaq, komanda işini öyrənəcək və müxtəlif tədbirlərdə
          iştirak edərək peşəkar şəbəkənizi genişləndirəcəksiniz. Həyatınızı
          dəyişdirmək üçün bizə qoşulun və sizə ən uyğun variantı seçin.
        </p>
      </div>
      <div className="px-6 mx-auto mt-10 shadow-xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1">
            <img
              src={office1}
              alt="Office 1"
              className="rounded-xl w-full h-auto"
            />
          </div>
          <div className="col-span-1">
            <img
              src={office2}
              alt="Office 2"
              className="rounded-xl w-full h-auto"
            />
          </div>
          <div className="col-span-1">
            <img
              src={office3}
              alt="Office 3"
              className="rounded-xl w-full h-auto"
            />
          </div>
          <div className="col-span-1">
            <img
              src={office4}
              alt="Office 4"
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseMethod;
