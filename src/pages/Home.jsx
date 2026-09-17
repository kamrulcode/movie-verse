import { Link } from "react-router";
import Banner from "../assets/banner.png";

function Home() {
  return (
    <section
      className="relative min-h-[calc(100vh-64px)] overflow-hidden"
      style={{
        background: `linear-gradient(
    90deg,
    #080b12 0%,
    rgba(8, 11, 18, 0.00) 40%,
    rgba(8, 11, 18, 0.00) 100%
  ), url(${Banner})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      {/* <img
        src={Banner}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      /> */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,13,25,.95)_0%,rgba(5,13,25,.72)_38%,rgba(5,13,25,.18)_72%,rgba(5,13,25,.0)_100%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-375 items-center px-6 py-16 sm:px-10 lg:px-14">
        <div className="">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[.25em] text-secondaryText">
            Movie & TV discovery
          </p>
          <h1 className="text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl text-mainText">
            Your Next Favorite <br />
            Movie <span className="text-baseColor">Starts Here</span>
          </h1>
          <p className="my-6 text-base leading-7 sm:text-lg  text-secondaryText max-w-lg">
            Explore and discover your favorite movies from around the world.
            Search, browse, and view detailed information in one place.
          </p>
          <Link to="/movies" className="btnPrimary gap-3">
            Explore Now <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Home;
