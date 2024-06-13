import Testimonal from "./Testimonal";

export default function StudentReviews() {
  return (
    <section className="w-full h-max flex flex-col lg:flex-row items-center justify-center p-5 mt-5 relative">
      <div className="studentImage w-full lg:w-1/2 h-96 lg:h-[40rem]"></div>
      <div className="testimonial-container w-full lg:w-1/2 h-full lg:relative">
        <Testimonal />
      </div>
    </section>
  );
}
