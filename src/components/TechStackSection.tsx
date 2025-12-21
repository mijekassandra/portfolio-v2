import React from "react";

interface TechStackSectionProps {
  title: string;
  icon: React.ReactNode;
  colorVariant: "blue" | "red" | "yellow" | "green" | "purple";
}

const TechStackSection: React.FC<TechStackSectionProps> = ({
  title,
  icon,
  colorVariant,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{icon}</div>
    </div>
  );

  <div>TechStackSection</div>;
};

export default TechStackSection;
