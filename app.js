import React from "react";

export default function App() {
  return (
    <div style={styles.container}>
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h1 style={styles.logo}>MIITY</h1>

        <div style={styles.menu}>
          <div style={styles.menuItem}>🏠 Home</div>
          <div style={styles.menuItem}>🤖 AI</div>
          <div style={styles.menuItem}>💬 Chats</div>
          <div style={styles.menuItem}>🎬 Reels</div>
          <div style={styles.menuItem}>🌍 Communities</div>
          <div style={styles.menuItem}>⚙ Settings</div>
        </div>
      </div>

      {/* MAIN */}
      <div style={styles.main}>
        {/* HERO */}
        <div style={styles.hero}>
          <div>
            <h1 style={styles.heroTitle}>
              The Future Beyond Social Apps
            </h1>

            <p style={styles.heroText}>
              AI-powered communication, futuristic communities,
              ultra-fast chats, immersive reels, and premium design.
            </p>

            <button style={styles.heroButton}>
              Launch Miity
            </button>
          </div>

          <div style={styles.heroGlow}></div>
        </div>

        {/* FEATURE CARDS */}
        <div style={styles.grid}>
          <div style={styles.card}>
            <h2>🤖 AI Assistant</h2>
            <p>
              Generate ideas, answer questions, and automate your world.
            </p>
          </div>

          <div style={styles.card}>
            <h2>💬 Smart Chats</h2>
            <p>
              Realtime messaging with futuristic performance.
            </p>
          </div>

          <div style={styles.card}>
            <h2>🎬 Ultra Reels</h2>
            <p>
              Scroll immersive next-generation content feeds.
            </p>
          </div>

          <div style={styles.card}>
            <h2>🌍 Communities</h2>
            <p>
              Join creators, gamers, developers, and innovators.
            </p>
          </div>
        </div>

        {/* TRENDING */}
        <div style={styles.trending}>
          <h2 style={styles.sectionTitle}>Trending Spaces</h2>

          <div style={styles.trendRow}>
            <div style={styles.trendCard}>🚀 AI Creators</div>
            <div style={styles.trendCard}>🎮 Gaming Universe</div>
            <div style={styles.trendCard}>💎 Digital Future</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#040B1A",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },

  sidebar: {
    width: "260px",
    background: "#081120",
    padding: "30px",
    borderRight: "1px solid #172033",
  },

  logo: {
    fontSize: "38px",
    fontWeight: "bold",
    background: "linear-gradient(90deg,#7C3AED,#06B6D4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "50px",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  menuItem: {
    background: "#101A2D",
    padding: "18px",
    borderRadius: "18px",
    cursor: "pointer",
    transition: "0.3s",
    fontSize: "18px",
  },

  main: {
    flex: 1,
    padding: "40px",
  },

  hero: {
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(135deg,#7C3AED,#2563EB,#06B6D4)",
    borderRadius: "35px",
    padding: "60px",
    marginBottom: "40px",
    boxShadow: "0 0 50px rgba(124,58,237,0.4)",
  },

  heroTitle: {
    fontSize: "58px",
    maxWidth: "700px",
    lineHeight: "1.1",
    marginBottom: "20px",
  },

  heroText: {
    fontSize: "22px",
    maxWidth: "700px",
    color: "#E2E8F0",
    marginBottom: "30px",
  },

  heroButton: {
    background: "white",
    color: "#7C3AED",
    border: "none",
    padding: "18px 40px",
    borderRadius: "20px",
    fontWeight: "bold",
    fontSize: "20px",
    cursor: "pointer",
  },

  heroGlow: {
    position: "absolute",
    right: "-100px",
    top: "-100px",
    width: "350px",
    height: "350px",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "50%",
    filter: "blur(40px)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "25px",
    marginBottom: "50px",
  },

  card: {
    background: "#101A2D",
    padding: "30px",
    borderRadius: "28px",
    border: "1px solid #1E293B",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
  },

  trending: {
    marginTop: "20px",
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: "20px",
  },

  trendRow: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  trendCard: {
    background:
      "linear-gradient(135deg,#111827,#1E293B)",
    padding: "25px",
    borderRadius: "25px",
    minWidth: "220px",
    fontSize: "20px",
    border: "1px solid #334155",
  },
};
