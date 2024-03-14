import MainArea from "@/components/MainArea";
import { getData } from "@/libs/data";
import { Suspense } from "react";
import classes from "./page.module.css";

const MainPage = () => {
  const eduData = getData();

  return (
    <Suspense fallback={<p className={classes.loading}>Loading..</p>}>
      <MainArea data={eduData} />
    </Suspense>
  );
};

export default MainPage;
