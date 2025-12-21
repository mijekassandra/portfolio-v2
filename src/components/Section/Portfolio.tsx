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
    <div className="flex flex-col gap-12 py-12">
      <h1 className="bg-gradient-to-r from-white to-white/70 bg-clip-text font-bold text-transparent">
        My Portfolio
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedItems.map((item) => (
          <PortfolioCard key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleViewAll}
          className="rounded-lg bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg"
        >
          View All Portfolio
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
