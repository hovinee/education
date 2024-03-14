import MainArea from "@/components/MainArea";
import { getData } from "@/libs/data";
import { Suspense } from "react";
import classes from "./page.module.css";

async function Main() {
  const eduData = await getData();
  return <MainArea data={eduData} />;
}

const MainPage = () => {
  return (
    <Suspense fallback={<p className={classes.loading}>Loading..</p>}>
      <Main />
    </Suspense>
  );
};

export default MainPage;
