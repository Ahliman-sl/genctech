import HeaderTitle from "../components/common/HeaderTitle";
import Carousel from "../components/common/Carousel";
import CourseStats from "../components/common/CourseStats";
import CourseStatistic from "../components/common/CourseStatistic";
import CourseMethod from "../components/common/CourseMethod";
import StudentReviews from "../components/common/StudentReviews";

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
