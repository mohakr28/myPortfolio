import React, { useState } from "react";

function PercentageCircle({ percentage, color }) {
  // Calculate the dash offset based on the percentage
  const dashOffset = 251.2 - (251.2 * percentage) / 100;
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;
  const height = 200;
  const width = 200;

  return (
    <svg width={width} height={height}>
      {/* Background circle */}
      <circle
        cx={width / 2}
        cy={height / 2}
        r={radius}
        stroke="#434242"
        strokeWidth="8"
        fill="none"
      />
      {/* Percentage filled circle */}
      <circle
        cx={width / 2}
        cy={height / 2}
        r={radius}
        stroke={`${color}`}
        strokeWidth="8"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
      {/* Display the percentage value in the center of the circle */}
      <text
        x={width / 2}
        y={height / 2 + 5}
        textAnchor="middle"
        fontSize="18"
        fill="#fff"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
}
export default PercentageCircle;
