import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  CssBaseline,
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaDiscord, FaVideo } from "react-icons/fa"; // react-icons Discord

// 🎨 Create Material 3-inspired expressive theme with dynamic colors
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#E91E63",
      light: "#F48FB1",
      dark: "#C2185B",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFF0F7",
      light: "#FFF5F9",
      dark: "#FCE4EC",
    },
    background: {
      default: "#FFF5F8",
      paper: "#FFFFFF",
    },
    error: {
      main: "#FF4081",
    },
    text: {
      primary: "#2C1810",
      secondary: "#6D4C41",
    },
  },
  shape: {
    borderRadius: 28,
  },
  typography: {
    fontFamily: "'Google Sans', 'Roboto', sans-serif",
    h1: { 
      fontWeight: 700, 
      fontSize: "3.5rem",
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
    },
    h2: { 
      fontWeight: 600, 
      fontSize: "2.25rem",
      letterSpacing: "-0.01em",
    },
    body1: { 
      fontSize: "1.1rem", 
      lineHeight: 1.6,
      letterSpacing: "0.009em",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      letterSpacing: "0.0125em",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.008em",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 8px 32px rgba(233, 30, 99, 0.08)",
          border: "1px solid rgba(244, 143, 177, 0.15)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 40px rgba(233, 30, 99, 0.12)",
            borderColor: "rgba(244, 143, 177, 0.3)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          padding: "12px 24px",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 20px rgba(233, 30, 99, 0.25)",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #E91E63 0%, #FF4081 100%)",
          boxShadow: "0 4px 16px rgba(233, 30, 99, 0.2)",
        },
        outlined: {
          borderWidth: "2px",
          borderColor: "#F48FB1",
          color: "#E91E63",
          "&:hover": {
            borderWidth: "2px",
            borderColor: "#E91E63",
            backgroundColor: "rgba(233, 30, 99, 0.04)",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          boxShadow: "0 8px 24px rgba(233, 30, 99, 0.15)",
          border: "4px solid #FFF",
        },
      },
    },
  },
});

const base = import.meta.env.BASE_URL || '/';
const friends = [
  `${base}images/friend1.jpg`,
  `${base}images/friend2.jpg`,
  `${base}images/friend3.jpg`,
  `${base}images/friend4.jpg`,
  `${base}images/friend5.jpg`,
  `${base}images/friend6.jpg`,
];

export default function App() {
  React.useEffect(() => {
    try {
      const bg = document.querySelector('.dynamic-bg');
      if (!bg) return;

      const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const lowCpu = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
      const highDPR = window.devicePixelRatio && window.devicePixelRatio > 2.5;

      if (prefersReduce || lowCpu || highDPR) {
        bg.classList.add('reduced');
      } else {
        bg.classList.remove('reduced');
      }
    } catch (e) {
      // silent
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* dynamic blurred flowing background */}
      <div className="dynamic-bg" aria-hidden="true" style={{
        background: `
          radial-gradient(circle at 80% 20%, rgba(244, 143, 177, 0.15) 0%, rgba(255, 255, 255, 0) 30%),
          radial-gradient(circle at 20% 80%, rgba(233, 30, 99, 0.1) 0%, rgba(255, 255, 255, 0) 30%),
          radial-gradient(circle at 50% 50%, rgba(255, 64, 129, 0.05) 0%, rgba(255, 255, 255, 0) 60%)
        `
      }}>
        <div className="blob blob--a" style={{ background: "linear-gradient(135deg, rgba(244, 143, 177, 0.4) 0%, rgba(233, 30, 99, 0.1) 100%)" }} />
        <div className="blob blob--b" style={{ background: "linear-gradient(135deg, rgba(255, 64, 129, 0.2) 0%, rgba(244, 143, 177, 0.1) 100%)" }} />
        <div className="blob blob--c" style={{ background: "linear-gradient(135deg, rgba(233, 30, 99, 0.15) 0%, rgba(255, 64, 129, 0.05) 100%)" }} />
        <div className="blob blob--d" style={{ background: "linear-gradient(135deg, rgba(244, 143, 177, 0.3) 0%, rgba(233, 30, 99, 0.1) 100%)" }} />
        <div className="blob blob--e" style={{ background: "linear-gradient(135deg, rgba(255, 64, 129, 0.1) 0%, rgba(244, 143, 177, 0.05) 100%)" }} />
      </div>

      <Container 
        maxWidth="md" 
        sx={{ 
          py: { xs: 4, sm: 6 },
          px: { xs: 2, sm: 3 }
        }}>
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
        >
          <Box 
            sx={{ 
              display: "flex", 
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "center" },
              textAlign: { xs: "center", sm: "left" },
              gap: { xs: 2, sm: 4 },
              mb: 4 
            }}
          >
            <Avatar
              src={`${base}images/my-avatar.jpg`}
              alt="My Avatar"
              sx={{
                width: { xs: 100, sm: 120 },
                height: { xs: 100, sm: 120 },
                border: "4px solid",
                borderColor: "primary.main",
              }}
            />
            <Box>
              <Typography 
                variant="h1" 
                color="primary" 
                gutterBottom
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem" },
                  textAlign: { xs: "center", sm: "left" }
                }}
              >
                Kananosa
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                gutterBottom
                sx={{ textAlign: { xs: "center", sm: "left" } }}
              >
                这里急需一个文案！
              </Typography>
              <Typography 
                variant="body1"
                sx={{ textAlign: { xs: "center", sm: "left" } }}
              >
                牛逼 · 是个人 · 我到底有什么特点！
              </Typography>
            </Box>
          </Box>

          <Box 
            sx={{ 
              display: "flex", 
              flexDirection: { xs: "column", sm: "row" },
              gap: 2, 
              mb: 6,
              width: { xs: "100%", sm: "auto" }
            }}
          >
            <Button
              variant="contained"
              color="primary"
              href="https://discord.gg/mJsWM6RrHy"
              target="_blank"
              startIcon={<FaDiscord />}
              fullWidth={true}
              sx={{
                px: { xs: 2, sm: 3 },
                py: 1.5,
                borderRadius: "18px",
                textTransform: "none",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              去往Kananosa Hub
            </Button>

            <Button
              variant="outlined"
              onClick={() =>
                document
                  .getElementById("friends")
                  .scrollIntoView({ behavior: "smooth" })
              }
              fullWidth={true}
              sx={{
                px: { xs: 2, sm: 3 },
                py: 1.5,
                borderRadius: "18px",
                textTransform: "none",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              有何朋友！
            </Button>
          </Box>
        </motion.div>

        <Card sx={{ mb: 6, mx: { xs: 0, sm: 2 } }}>
          <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
            <Typography 
              variant="h2" 
              gutterBottom
              sx={{
                fontSize: { xs: "1.75rem", sm: "2.25rem" },
                textAlign: { xs: "center", sm: "left" }
              }}
            >
              About Me
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{
                textAlign: { xs: "center", sm: "left" }
              }}
            >
              Hi — 我是 <strong>Kananosa</strong>. 一个人。
            </Typography>
            <Box 
              sx={{ 
                mt: 2, 
                display: "flex", 
                gap: { xs: 1, sm: 2 }, 
                flexWrap: "wrap",
                justifyContent: { xs: "center", sm: "flex-start" }
              }}
            >
              {["🎨 设计", "💻 代码", "🎧 音乐", "🌿 草"].map((tag) => (
                <Typography
                  key={tag}
                  variant="body2"
                  sx={{
                    px: { xs: 1.5, sm: 2 },
                    py: 1,
                    borderRadius: 100,
                    bgcolor: "secondary.main",
                    color: "primary.dark",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    boxShadow: "0 2px 12px rgba(103, 80, 164, 0.12)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      bgcolor: "primary.light",
                      boxShadow: "0 4px 16px rgba(103, 80, 164, 0.2)",
                    },
                  }}
                >
                  {tag}
                </Typography>
              ))}
            </Box>
          </CardContent>
        </Card>


        <Box id="friends" sx={{ mb: 8 }}>
          <Typography variant="h2" gutterBottom>
            Friends
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            没人想在这里被展示吗？？？如果你想要被展示，联系我。
          </Typography>

          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {friends.map((src, i) => (
              <Grid item xs={6} sm={4} md={3} key={i}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  style={{ height: "100%" }}
                >
                  <Card sx={{ height: "100%" }}>
                    <Avatar
                      src={src}
                      alt={`Friend ${i + 1}`}
                      variant="rounded"
                      sx={{
                        width: "100%",
                        height: { xs: 120, sm: 160 },
                        borderRadius: 3,
                        objectFit: "cover",
                      }}
                    />
                    <Box sx={{ p: { xs: 1.5, sm: 2 }, textAlign: "center" }}>
                      <Typography 
                        variant="body2" 
                        fontWeight={500}
                        sx={{
                          fontSize: { xs: "0.875rem", sm: "1rem" }
                        }}
                      >
                        朋友 {i + 1}
                      </Typography>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ textAlign: "center", py: 4, color: "text.secondary" }}>
          © {new Date().getFullYear()} Kananosa — Powered by React & MUI,Github Pages deployment.
        </Box>
      </Container>
    </ThemeProvider>
  );
}
