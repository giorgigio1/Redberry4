import Header from "./Header";
import SecondHeader from "./SecondHeader";
import Category from "./Category";
import Blog from "./Blog";
import "../App.css";

const Main = () => {
  return (
    <main className="main">
      <Header />
      <SecondHeader />
      <Category />
      <section className="blogSection">
        <Blog />
      </section>
    </main>
  );
};

export default Main;
