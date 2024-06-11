import CarouselItem from "./CarouselItem.jsx";
import carouselItems from "./CarouselData.jsx";

export default function Carousel() {
  return (
    <section className="w-full h-max flex flex-col items-center gap-10 mt-10 lg:mt-7">
      <div>
        <p className="text-4xl font-semibold text-sky-900 text-center">
          Hansı sahə üzrə <span className="font-bold">ƏJDAHA</span> olmaq
          istəyirsən?
        </p>
      </div>
      <div className="carousel carousel-center mx-6 p-4 space-x-4 bg-neutral rounded-box">
        {carouselItems.map((item, index) => (
          <CarouselItem
            key={index}
            title={item.title}
            text={item.text}
            imgSource={item.imgSource}
            buttonTitle={item.buttonTitle}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}
