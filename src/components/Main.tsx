import Header from "./Header";
import SecondHeader from "./SecondHeader";
import Sort from "./Sort";
import Blog from "./Blog";
import "../App.css";

const Main = () => {
  return (
    <main className="main">
      <Header />
      <SecondHeader />
      <Sort />
      <section className="blogSection">
        <Blog />
      </section>
    </main>
  );
};

export default Main;
