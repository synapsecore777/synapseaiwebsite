import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function NeuralNetwork() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const nodes = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * dimensions.width,
    y: Math.random() * dimensions.height,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 10,
  }));

  // Create connections between nearby nodes
  const connections: { id: string; x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = Math.sqrt(
        Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2)
      );
      if (dist < 250) {
        connections.push({
          id: `${i}-${j}`,
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
        });
      }
    }
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <svg className="h-full w-full opacity-30">
        {connections.map((conn) => (
          <motion.line
            key={conn.id}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="#f97316"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: Math.random() * 2 }}
          />
        ))}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="#f97316"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
    </div>
  );
}
