import { useNavigate } from "react-router-dom";
import PortfolioCard from "../PortfolioCard";
import { portfolioItems } from "../../data/portfolio";

const Portfolio = () => {
  const navigate = useNavigate();
  // Display only the first 3 portfolio items
  const displayedItems = portfolioItems.slice(0, 3);

  const handleViewAll = () => {
    navigate("/portfolio");
  };

  return (
    <div className="flex flex-col gap-8 py-8 sm:gap-10 sm:py-10 md:gap-12 md:py-12">
      <h1 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
        My Portfolio
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedItems.map((item) => (
          <PortfolioCard key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleViewAll}
          className="rounded-lg bg-white/10 px-5 py-2.5 text-sm text-white backdrop-blur-sm transition-all duration-300 sm:px-6 sm:py-3 sm:text-base hover:bg-white/20 hover:shadow-lg"
        >
          View All Portfolio
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
