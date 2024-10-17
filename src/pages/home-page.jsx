import headerImage from "@/assets/images/home-page-header.png";
const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mb-8">
        Wikipedia Grand Line Adventures
      </h1>
      <img src={headerImage} alt="banner" className="mx-auto" />
    </div>
  );
};

export default HomePage;
