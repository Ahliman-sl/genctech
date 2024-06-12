import HeaderTitle from "../components/common/HeaderTitle.jsx";
import Carousel from "../components/common/Carousel.jsx";
import CourseStats from "../components/common/CourseStats.jsx";
import CourseStatistic from "../components/common/CourseStatistic.jsx";
import CourseMethod from "../components/common/CourseMethod.jsx";
import StudentReviews from "../components/common/StudentReviews.jsx";
function Home() {
  return (
    <>
      <HeaderTitle />

      <Carousel />
      <CourseStats />
      <CourseStatistic />
      <CourseMethod />
      <StudentReviews />
    </>
  );
}

export default Home;
