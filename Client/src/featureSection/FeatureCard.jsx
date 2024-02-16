import React from "react";
import "./FeatureCard.css";

export default function FeatureCard(props) {
  return (
    <div className="bg-white w-2/3 rounded-3xl img-overlay-wrap flex">
      <svg
        width="403"
        height="454"
        viewBox="0 0 403 454"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          opacity="0.8"
          cx="63.924"
          cy="226.121"
          r="338.5"
          fill="url(#paint0_linear_3007_1807)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3007_1807"
            x1="63.924"
            y1="-112.379"
            x2="63.924"
            y2="564.621"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#39A7FF" />
            <stop offset="1" stopColor="#0074D1" />
          </linearGradient>
        </defs>
      </svg>
      <img src={props.imageSrc} alt="props.heading"></img>
      <div className="">
        <h3>{props.heading}</h3>
        <svg
          width="130"
          height="20"
          viewBox="0 0 130 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.10252 10.3112H124.597"
            stroke="url(#paint0_linear_3007_1813)"
            strokeWidth="7.24207"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3007_1813"
              x1="8.83672"
              y1="6.81104"
              x2="124.12"
              y2="16.8095"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#49108B" />
              <stop offset="1" stopColor="#39A7FF" />
            </linearGradient>
          </defs>
        </svg>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
