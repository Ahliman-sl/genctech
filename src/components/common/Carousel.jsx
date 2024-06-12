import { useState } from "react";
import CarouselItem from "./CarouselItem.jsx";
import carouselItems from "./CarouselData.jsx";

export default function Carousel() {
  const itemsPerPage = 3; // Her sayfada gösterilecek öğe sayısı
  const [currentPage, setCurrentPage] = useState(1); // Mevcut sayfa

  // Mevcut sayfa için gösterilecek öğeleri hesapla
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = carouselItems.slice(startIndex, endIndex);

  // Sayfa sayısını hesapla
  const totalPages = Math.ceil(carouselItems.length / itemsPerPage);

  // Sayfa değiştirme işlevi
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="w-full px-6 py-10 flex flex-col items-center gap-6">
      <div>
        <p className="text-4xl font-semibold text-sky-900 text-center">
          Hansı sahə üzrə <span className="font-bold">ƏJDAHA</span> olmaq
          istəyirsən?
        </p>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full h-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item, index) => (
            <CarouselItem
              key={index}
              title={item.title}
              text={item.text}
              buttonTitle={item.buttonTitle}
              link={item.link}
            />
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`btn ${
                currentPage === index + 1
                  ? "btn-active bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
