/* eslint-disable react/prop-types */
export default function CarouselItem({
  title,
  text,
  imgSource,
  buttonTitle,
  link,
}) {
  return (
    <div className="carousel-item relative group">
      <img src={imgSource} className="rounded-box cardImage" />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-full">
          <p className="text-2xl text-slate-50 font-thin p-2 text-center">
            {text}
          </p>
        </div>
        <a href={link} target="_Blank" className="btn text-black font-semibold">
          {buttonTitle}
        </a>
      </div>
      <div className="absolute top-0 left-0 right-0 text-center text-2xl rounded-t-2xl text-white bg-black bg-opacity-50 py-2">
        {title}
      </div>
    </div>
  );
}
