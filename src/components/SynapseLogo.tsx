import { motion } from "motion/react";

export default function SynapseLogo({ className = "w-32 h-32" }: { className?: string }) {
  const nodes = [
    { x: 72, y: 18, color: "#f97316", size: 6, ring: true }, // Top Right Orange
    { x: 45, y: 22, color: "#fff", size: 4 }, // Top Left
    { x: 27, y: 44, color: "#fff", size: 4 }, // Left
    { x: 34, y: 78, color: "#fff", size: 6 }, // Bottom Left
    { x: 63, y: 75, color: "#fff", size: 4 }, // Bottom Right
    { x: 81, y: 49, color: "#fff", size: 4 }, // Right
  ];

  const center = { x: 53, y: 49 };

  return (
    <div className={className}>
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {/* Eye Shape Background */}
        <motion.path
          d="M 35 49 Q 53 25 71 49 Q 53 73 35 49"
          fill="rgba(249, 115, 22, 0.05)"
          stroke="rgba(249, 115, 22, 0.1)"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Synapse Bond - Rotating dashed paths */}
        <motion.circle
          cx={center.x}
          cy={center.y}
          r="42"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.5"
          strokeDasharray="1 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Neural Pathways */}
        {nodes.map((node, i) => (
          <g key={i}>
            <motion.line
              x1={center.x}
              y1={center.y}
              x2={node.x}
              y2={node.y}
              stroke={node.color === "#f97316" ? "#f97316" : "rgba(255,255,255,0.15)"}
              strokeWidth={node.color === "#f97316" ? "1.2" : "0.6"}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
            />
          </g>
        ))}

        {/* Central Node Glow */}
        <motion.circle
          cx={center.x}
          cy={center.y}
          r="10"
          fill="#f97316"
          initial={{ opacity: 0.05 }}
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Central Node */}
        <motion.circle
          cx={center.x}
          cy={center.y}
          r="5"
          fill="#fff"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />

        {/* Outer Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            {node.ring && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.size + 4}
                fill="none"
                stroke={node.color}
                strokeWidth="0.5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            )}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={node.color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5 + i * 0.1,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
