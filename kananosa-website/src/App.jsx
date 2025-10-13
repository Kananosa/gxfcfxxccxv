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

// 🎨 Create Material 3-inspired expressive theme (粉紫风格)
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#b44cff", // 粉紫主色
    },
    secondary: {
      main: "#f06292",
    },
    background: {
      default: "#faf7fd",
      paper: "#ffffff",
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: "Google Sans, Roboto, sans-serif",
    h1: { fontWeight: 800, fontSize: "3rem" },
    h2: { fontWeight: 600, fontSize: "2rem" },
    body1: { fontSize: "1.1rem", lineHeight: 1.6 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 8px 28px rgba(186,104,200,0.15)",
        },
      },
    },
  },
});

const friends = [
  "/images/friend1.jpg",
  "/images/friend2.jpg",
  "/images/friend3.jpg",
  "/images/friend4.jpg",
  "/images/friend5.jpg",
  "/images/friend6.jpg",
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 6 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
        >
          <Typography variant="h1" color="primary" gutterBottom>
            Kananosa
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            牛逼 · 是个人 · I make small things that bring a smile.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 6 }}>
            <Button
              variant="contained"
              color="primary"
              href="https://4kmp.com/movie/003670-wolf-warriors-2/"
              target="_blank"
              startIcon={<FaVideo />}
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: "18px",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              美味吴京演绎战狼免费看
            </Button>

            <Button
              variant="outlined"
              onClick={() =>
                document
                  .getElementById("friends")
                  .scrollIntoView({ behavior: "smooth" })
              }
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: "18px",
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              See Friends
            </Button>
          </Box>
        </motion.div>

        {/* About Section */}
        <Card sx={{ mb: 6 }}>
          <CardContent>
            <Typography variant="h2" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Hi — I'm <strong>Kananosa</strong>. 你猜怎么着，啥事没有
            </Typography>
            <Box sx={{ mt: 2, display: "flex", gap: 2, flexWrap: "wrap" }}>
              {["🎨 Design", "💻 Coding", "🎧 Music", "🌿 Nature"].map((tag) => (
                <Typography
                  key={tag}
                  variant="body2"
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                    bgcolor: "primary.main",
                    color: "white",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </Typography>
              ))}
            </Box>
          </CardContent>
        </Card>

        {/* My Avatar Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Avatar
            src="/images/my-avatar.jpg" // 请将头像图片放置在 /public/images/ 并命名为 my-avatar.jpg
            alt="My Avatar"
            sx={{
              width: 120,
              height: 120,
              margin: "0 auto",
              border: "4px solid",
              borderColor: "primary.main",
            }}
          />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Kananosa
          </Typography>
          <Typography variant="body2" color="text.secondary">
            这是我的头像，欢迎来到我的网站！
          </Typography>
        </Box>

        {/* Friends Section */}
        <Box id="friends" sx={{ mb: 8 }}>
          <Typography variant="h2" gutterBottom>
            Friends
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            These are placeholders — replace them with your own images in /public/images/.
          </Typography>

          <Grid container spacing={3}>
            {friends.map((src, i) => (
              <Grid item xs={6} sm={4} md={3} key={i}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Card>
                    <Avatar
                      src={src}
                      alt={`Friend ${i + 1}`}
                      variant="rounded"
                      sx={{
                        width: "100%",
                        height: 160,
                        borderRadius: 3,
                        objectFit: "cover",
                      }}
                    />
                    <Box sx={{ p: 1, textAlign: "center" }}>
                      <Typography variant="body2" fontWeight={500}>
                        Friend {i + 1}
                      </Typography>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Footer */}
        <Box sx={{ textAlign: "center", py: 4, color: "text.secondary" }}>
          © {new Date().getFullYear()} kananosa — built with Material 3 expressive design
        </Box>
      </Container>
    </ThemeProvider>
  );
}
