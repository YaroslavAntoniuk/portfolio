import React from 'react';
import { Box } from '@mui/material';

const SVGWaveBackground = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(180deg, #121212 0%, #1a1a2e 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Animated SVG waves */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '70vh',
          minHeight: '300px',
        }}
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f3460" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#16213e" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a1a2e" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#16213e" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f3460" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1a1a2e" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <g>
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="url(#gradient1)"
            style={{
              animation: 'move-forever1 15s linear infinite',
              animationDelay: '0s',
            }}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="url(#gradient2)"
            style={{
              animation: 'move-forever2 25s linear infinite',
              animationDelay: '-5s',
            }}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="url(#gradient3)"
            style={{
              animation: 'move-forever3 30s linear infinite',
              animationDelay: '-2s',
            }}
          />
        </g>

        {/* Add keyframes styles via style tag inside SVG */}
        <style>
          {`
            @keyframes move-forever1 {
              0% { transform: translate(-90px, 0%); }
              100% { transform: translate(85px, 0%); }
            }
            @keyframes move-forever2 {
              0% { transform: translate(-90px, 0%); }
              100% { transform: translate(85px, 0%); }
            }
            @keyframes move-forever3 {
              0% { transform: translate(-90px, 0%); }
              100% { transform: translate(85px, 0%); }
            }
          `}
        </style>
      </svg>

      {/* Optional: Add subtle star field */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at bottom, transparent 0%, #121212 100%)',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5)',
            background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 800 800\'%3E%3Cg fill=\'none\' stroke=\'%23404\' stroke-width=\'1\'%3E%3Cpath d=\'M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63\'/%3E%3Cpath d=\'M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764\'/%3E%3Cpath d=\'M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880\'/%3E%3Cpath d=\'M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382\'/%3E%3Cpath d=\'M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269\'/%3E%3C/g%3E%3Cg fill=\'%23505\'%3E%3Ccircle cx=\'769\' cy=\'229\' r=\'5\'/%3E%3Ccircle cx=\'539\' cy=\'269\' r=\'5\'/%3E%3Ccircle cx=\'603\' cy=\'493\' r=\'5\'/%3E%3Ccircle cx=\'731\' cy=\'737\' r=\'5\'/%3E%3Ccircle cx=\'520\' cy=\'660\' r=\'5\'/%3E%3Ccircle cx=\'309\' cy=\'538\' r=\'5\'/%3E%3Ccircle cx=\'295\' cy=\'764\' r=\'5\'/%3E%3Ccircle cx=\'40\' cy=\'599\' r=\'5\'/%3E%3Ccircle cx=\'102\' cy=\'382\' r=\'5\'/%3E%3Ccircle cx=\'127\' cy=\'80\' r=\'5\'/%3E%3Ccircle cx=\'370\' cy=\'105\' r=\'5\'/%3E%3Ccircle cx=\'578\' cy=\'42\' r=\'5\'/%3E%3Ccircle cx=\'237\' cy=\'261\' r=\'5\'/%3E%3Ccircle cx=\'390\' cy=\'382\' r=\'5\'/%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.1,
          }
        }}
      />
    </Box>
  );
};

export default SVGWaveBackground;