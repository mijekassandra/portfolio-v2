import { useState, useMemo } from "react";
import PortfolioCard from "../PortfolioCard";
import Header from "../Header";
import { portfolioItems } from "../../data/portfolio";

const AllPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Frontend", "Backend", "UX/UI", "AI/NoCode"];

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return portfolioItems;
    }
    return portfolioItems.filter((item) =>
      item.category.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <>
      <Header />
      <div className="flex flex-col gap-12 py-12">
        <h1 className="bg-gradient-to-r from-white to-white/70 bg-clip-text font-bold text-transparent">
          All Portfolio
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-white/20 text-white shadow-lg backdrop-blur-sm"
                  : "bg-white/10 text-white/70 backdrop-blur-sm hover:bg-white/15 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <PortfolioCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-white/70">
            No portfolio items found for this category.
          </div>
        )}
      </div>
    </>
  );
};

export default AllPortfolio;
