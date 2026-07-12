import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import theme from './theme';
import PatientIllustration from './PatientIllustration';
import DoctorIllustration from './DoctorIllustration';
import './App.css';

const PATIENT_URL = import.meta.env.VITE_PATIENT_URL || 'http://localhost:5174';
const DOCTOR_URL = import.meta.env.VITE_DOCTOR_URL || 'http://localhost:5173';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e8eef5 100%)',
          p: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            mb: 1,
            background: 'linear-gradient(135deg, #1976d2 0%, #2e7d32 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Vaidya Assist
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          Choose your portal to continue
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            width: '100%',
            maxWidth: 800,
          }}
        >
          {/* Patient Card */}
          <Card
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              p: 2,
              borderRadius: 4,
              '&:hover': { transform: 'translateY(-4px)', boxShadow: 8 },
              border: '2px solid transparent',
              borderColor: 'primary.light',
            }}
          >
            <CardContent sx={{ width: '100%' }}>
              <PatientIllustration />
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 2 }}>
                <CalendarMonthIcon color="primary" />
                <Typography variant="h2" sx={{ fontSize: '1.5rem' }}>
                  Patient Portal
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
                Book appointments, chat with the AI health assistant, and manage your health records.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                href={PATIENT_URL}
                fullWidth
                sx={{ py: 1.5, fontSize: '1rem', borderRadius: 3 }}
              >
                Go to Patient Portal
              </Button>
            </CardContent>
          </Card>

          {/* Doctor Card */}
          <Card
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              p: 2,
              borderRadius: 4,
              '&:hover': { transform: 'translateY(-4px)', boxShadow: 8 },
              border: '2px solid transparent',
              borderColor: 'secondary.light',
            }}
          >
            <CardContent sx={{ width: '100%' }}>
              <DoctorIllustration />
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 2 }}>
                <LocalHospitalIcon color="secondary" />
                <Typography variant="h2" sx={{ fontSize: '1.5rem' }}>
                  Doctor Portal
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
                Manage appointments, patients, medicines, and clinic operations from your dashboard.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                href={DOCTOR_URL}
                fullWidth
                sx={{ py: 1.5, fontSize: '1rem', borderRadius: 3 }}
              >
                Go to Doctor Portal
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Typography variant="caption" color="text.secondary" sx={{ mt: 6 }}>
          © {new Date().getFullYear()} Vaidya Assist
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;