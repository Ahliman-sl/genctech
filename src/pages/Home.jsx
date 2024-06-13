import HeaderTitle from "../components/common/HeaderTitle.jsx";
import Carousel from "../components/common/Carousel.jsx";
import CourseStats from "../components/common/CourseStats.jsx";
import CourseStatistic from "../components/common/CourseStatistic.jsx";
import CourseMethod from "../components/common/CourseMethod.jsx";
import StudentReviews from "../components/common/StudentReviews.jsx";
import Contact from "../components/common/Contact.jsx";
import Partners from "../components/common/Partners.jsx";
import Footer from "../components/layout/Footer.jsx";
function Home() {
  return (
    <>
      <HeaderTitle />
      <Partners />
      <Carousel />
      <CourseStats />
      <CourseStatistic />
      <CourseMethod />
      <StudentReviews />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
