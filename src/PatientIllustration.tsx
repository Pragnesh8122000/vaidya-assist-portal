import Box from '@mui/material/Box';

export default function PatientIllustration() {
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
        <circle cx="100" cy="100" r="95" fill="#E3F2FD" />

        {/* Head */}
        <circle cx="100" cy="68" r="28" fill="#90CAF9" />
        <circle cx="100" cy="68" r="24" fill="#BBDEFB" />

        {/* Eyes */}
        <circle cx="90" cy="64" r="3" fill="#1565C0" />
        <circle cx="110" cy="64" r="3" fill="#1565C0" />

        {/* Smile */}
        <path d="M90 76 Q100 86 110 76" stroke="#1565C0" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Body */}
        <path d="M60 110 Q60 95 100 95 Q140 95 140 110 L140 155 Q140 165 130 165 L70 165 Q60 165 60 155 Z" fill="#42A5F5" />

        {/* Stethoscope */}
        <path d="M85 115 Q85 130 75 135 Q65 140 65 150" stroke="#1565C0" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="65" cy="153" r="5" fill="#1565C0" />

        {/* Arms */}
        <path d="M60 115 Q45 120 40 135" stroke="#42A5F5" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M140 115 Q155 120 160 135" stroke="#42A5F5" strokeWidth="8" fill="none" strokeLinecap="round" />

        {/* Clipboard in hand */}
        <rect x="150" y="125" width="20" height="28" rx="3" fill="#E8F5E9" stroke="#388E3C" strokeWidth="1.5" />
        <line x1="155" y1="134" x2="165" y2="134" stroke="#388E3C" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="155" y1="140" x2="163" y2="140" stroke="#388E3C" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="155" y1="146" x2="160" y2="146" stroke="#388E3C" strokeWidth="1.5" strokeLinecap="round" />

        {/* Heart icon */}
        <path d="M96 105 Q96 100 100 97 Q104 100 104 105 Q104 110 100 115 Q96 110 96 105 Z" fill="#E53935" opacity="0.7" />
      </svg>
    </Box>
  );
}