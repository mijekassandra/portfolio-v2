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
    if (activeFilter === "AI/NoCode") {
      return portfolioItems.filter((item) =>
        item.category.some(
          (cat) => cat === "AI" || cat === "Low-Code" || cat === "No-Code",
        ),
      );
    }
    return portfolioItems.filter((item) =>
      item.category.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <>
      <Header />
      <div className="flex flex-col gap-6 py-6 sm:gap-8 sm:py-8 md:gap-12 md:py-12">
        <h1 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
          All Portfolio
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg px-4 py-1.5 text-xs font-medium transition-all duration-300 sm:px-5 sm:py-2 sm:text-sm md:px-6 ${
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
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:gap-8">
            {filteredItems.map((item) => (
              <PortfolioCard
                key={item.id}
                {...item}
                useLongDescription={true}
                lineClamp={7}
              />
            ))}
          </div>
        ) : (
          <div className="py-8 text-center text-sm text-white/70 sm:py-12 sm:text-base">
            No portfolio items found for this category.
          </div>
        )}
      </div>
    </>
  );
};

export default AllPortfolio;
