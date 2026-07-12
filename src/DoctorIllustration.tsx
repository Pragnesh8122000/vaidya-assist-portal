import Box from '@mui/material/Box';

export default function DoctorIllustration() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 200,
        aspectRatio: '1',
        mx: 'auto',
      }}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle */}
        <circle cx="100" cy="100" r="95" fill="#E8F5E9" />

        {/* Head */}
        <circle cx="100" cy="68" r="28" fill="#A5D6A7" />
        <circle cx="100" cy="68" r="24" fill="#C8E6C9" />

        {/* Eyes */}
        <circle cx="90" cy="64" r="3" fill="#2E7D32" />
        <circle cx="110" cy="64" r="3" fill="#2E7D32" />

        {/* Smile */}
        <path d="M90 76 Q100 86 110 76" stroke="#2E7D32" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* White coat body */}
        <path d="M60 110 Q60 95 100 95 Q140 95 140 110 L140 165 L60 165 Z" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="1" />

        {/* Coat lapels */}
        <path d="M85 95 L80 130" stroke="#E0E0E0" strokeWidth="2" />
        <path d="M115 95 L120 130" stroke="#E0E0E0" strokeWidth="2" />

        {/* Coat pocket */}
        <rect x="115" y="130" width="18" height="12" rx="2" fill="none" stroke="#E0E0E0" strokeWidth="1" />

        {/* Arms in coat */}
        <path d="M60 115 Q45 118 38 128" stroke="#FAFAFA" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M140 115 Q155 118 162 128" stroke="#FAFAFA" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M60 115 Q45 118 38 128" stroke="#E0E0E0" strokeWidth="1" fill="none" strokeLinecap="round" />

        {/* Stethoscope around neck */}
        <path d="M82 95 Q75 100 78 110 Q80 120 90 125" stroke="#37474F" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M118 95 Q125 100 122 110 Q120 120 110 125" stroke="#37474F" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="100" cy="128" r="6" fill="#546E7A" />
        <circle cx="100" cy="128" r="3" fill="#37474F" />

        {/* Cross on pocket */}
        <line x1="124" y1="133" x2="124" y2="139" stroke="#E53935" strokeWidth="2" strokeLinecap="round" />
        <line x1="121" y1="136" x2="127" y2="136" stroke="#E53935" strokeWidth="2" strokeLinecap="round" />

        {/* Name badge */}
        <rect x="70" y="130" width="28" height="16" rx="3" fill="#2E7D32" />
        <line x1="76" y1="136" x2="92" y2="136" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="76" y1="141" x2="87" y2="141" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </Box>
  );
}