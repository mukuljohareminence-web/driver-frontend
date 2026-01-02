import React from 'react';

const GreenCheckedIcon = (): React.JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
    >
      <g filter="url(#filter0_dd_7_8104)">
        <path
          d="M5 15C5 7.26801 11.268 1 19 1C26.732 1 33 7.26801 33 15C33 22.732 26.732 29 19 29C11.268 29 5 22.732 5 15Z"
          fill="#10B981"
          shapeRendering="crispEdges"
        />
        <g clipPath="url(#clip0_7_8104)">
          <path
            d="M18.9997 21.6667C22.6816 21.6667 25.6663 18.6819 25.6663 15C25.6663 11.3181 22.6816 8.33337 18.9997 8.33337C15.3178 8.33337 12.333 11.3181 12.333 15C12.333 18.6819 15.3178 21.6667 18.9997 21.6667Z"
            stroke="white"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 15L18.3333 16.3333L21 13.6666"
            stroke="white"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dd_7_8104"
          x="0"
          y="0"
          width="38"
          height="38"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_7_8104"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7_8104"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_7_8104"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_7_8104"
            result="effect2_dropShadow_7_8104"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_7_8104"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_7_8104">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(11 7)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GreenCheckedIcon;
