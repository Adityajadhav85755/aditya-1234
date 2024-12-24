import React, { useEffect, useState } from "react";

// Single Statistic Card Component
const StatisticCard = ({ icon, color, number, label }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number; // Target number to reach
    const duration = 2000; // Duration of animation in ms
    const increment = end / (duration / 20); // Adjust speed

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCurrentNumber(end);
        clearInterval(timer);
      } else {
        setCurrentNumber(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer); // Cleanup timer
  }, [number]);

  return (
    <div className="bg-white shadow-lg rounded-lg flex items-center justify-center flex-col p-1 mx-auto my-2 w-72 h-36 md:w-56 lg:w-55">
      <i className= {`text-4xl ${icon} ${color} mb-1`}></i>
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900">{currentNumber}</h3>
        <p className="text-black-600">{label}</p>
      </div>
    </div>
  );
};

// Main Statistics Component
const Statistics = () => {
  const statsData = [
    { icon: "bi-emoji-smile", color: "text-green-500", number: 232, label: "Happy Clients" },
    { icon: "bi-journal-richtext", color: "text-green-500", number: 521, label: "Projects" },
    { icon: "bi-headset", color: "text-green-500", number: 1463, label: "Hours of Support" },
    { icon: "bi-people", color: "text-green-500", number: 15, label: "Hard Workers" },
  ];

  return (
    <div className="bg-gray-1000 py-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-2">
          {statsData.map((stat, index) => (
            <StatisticCard
              key={index}
              icon={stat.icon}
              color={stat.color}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
