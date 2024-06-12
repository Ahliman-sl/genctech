export default function CarouselItem({ title, text, buttonTitle, link }) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-700 text-base mb-4">{text}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
            {buttonTitle}
          </button>
        </a>
      </div>
    </div>
  );
}
