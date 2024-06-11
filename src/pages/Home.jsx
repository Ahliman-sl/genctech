import { Suspense, lazy } from "react";
import Spinner from "../components/special/Spinner.jsx"; // Örnek spinner bileşeni

const HeaderTitle = lazy(() => import("../components/common/HeaderTitle"));
const Carousel = lazy(() => import("../components/common/Carousel"));
const CourseStats = lazy(() => import("../components/common/CourseStats"));
const CourseStatistic = lazy(() =>
  import("../components/common/CourseStatistic")
);
const CourseMethod = lazy(() => import("../components/common/CourseMethod"));
const StudentReviews = lazy(() =>
  import("../components/common/StudentReviews")
);

function Home() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        {" "}
        {/* Spinner bileşeni */}
        <HeaderTitle />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Carousel />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <CourseStats />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <CourseStatistic />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <CourseMethod />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <StudentReviews />
      </Suspense>
    </>
  );
}

export default Home;
