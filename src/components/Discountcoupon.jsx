import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Home, Store, Briefcase, Truck, Gift, Package, ShoppingCart, Wrench, Clock, Star } from "lucide-react";

const discountData = [
  { discount: 10, service: "House Shifting", icon: <Home className="w-8 h-8 text-yellow-300" />, expiry: "2025-02-15", rating: 4 },
  { discount: 15, service: "Shop Shifting", icon: <Store className="w-8 h-8 text-yellow-300" />, expiry: "2025-03-10", rating: 3 },
  { discount: 20, service: "Office Shifting", icon: <Briefcase className="w-8 h-8 text-yellow-300" />, expiry: "2025-04-05", rating: 5 },
  { discount: 25, service: "Warehouse Storage", icon: <Gift className="w-8 h-8 text-yellow-300" />, expiry: "2025-05-20", rating: 4 },
  { discount: 30, service: "Vehicle Shifting", icon: <Truck className="w-8 h-8 text-yellow-300" />, expiry: "2025-06-10", rating: 5 },
  { discount: 35, service: "Rental AC", icon: <Package className="w-8 h-8 text-yellow-300" />, expiry: "2025-07-01", rating: 3 },
  { discount: 40, service: "AMC", icon: <ShoppingCart className="w-8 h-8 text-yellow-300" />, expiry: "2025-08-15", rating: 4 },
  { discount: 45, service: "AC Service Repair", icon: <Wrench className="w-8 h-8 text-yellow-300" />, expiry: "2025-09-05", rating: 5 },
];

const gradients = [
  "from-teal-400 to-green-500",
  "from-indigo-500 to-pink-600",
  "from-yellow-500 to-orange-600",
  "from-pink-400 to-red-500",
];

export default function DiscountScroller() {
  const scrollRef = useRef(null);
  const [hover, setHover] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(2);
  const [discounts, setDiscounts] = useState(discountData);

  const updateSpeed = () => {
    if (window.innerWidth < 640) {
      setSpeed(1);
    } else if (window.innerWidth < 1024) {
      setSpeed(2);
    } else {
      setSpeed(3);
    }
  };

  useEffect(() => {
    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  const handleAutoScroll = () => {
    if (scrollRef.current && !hover && !isPaused) {
      scrollRef.current.scrollLeft += speed;
      if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
        scrollRef.current.scrollLeft = 0;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(handleAutoScroll, 50);
    return () => clearInterval(interval);
  }, [hover, isPaused, speed]);

  const handleRatingClick = (index, value) => {
    setDiscounts((prevDiscounts) =>
      prevDiscounts.map((item, i) => (i === index ? { ...item, rating: value } : item))
    );
  };

  return (
    <div className="w-full overflow-hidden flex justify-center py-1">
      <div
        ref={scrollRef}
        className="w-full max-w-7xl overflow-x-auto whitespace-nowrap p-2 flex space-x-4 scrollbar-hide"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {discounts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 w-[90%] sm:w-64 md:w-72 lg:w-80 h-44"
          >
            <div
              className={`lg:p-4 md:py-4  p-1 bg-gradient-to-r ${gradients[index % gradients.length]} text-white shadow-lg rounded-xl flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer relative w-full`}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="transition transform hover:rotate-6">{item.icon}</div>
                <h2 className="text-lg font-semibold">{item.service} Discount</h2>
                <p className="lg:text-md text-sm">
                  Get <span className="text-yellow-300 font-bold">{item.discount}% OFF</span> on {item.service}.
                </p>
                <p className="text-sm flex items-center space-x-1">
                  <Clock className="w-4 h-4" /> <span>Expiry: {item.expiry}</span>
                </p>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`w-5 h-5 cursor-pointer transition-all ${
                        starIndex < item.rating ? "fill-yellow-400" : "fill-white"
                      }`}
                      onClick={() => handleRatingClick(index, starIndex + 1)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
