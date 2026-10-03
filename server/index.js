
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const path = require("path");

const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

// Load environment variables
require("dotenv").config({
  path: path.join(__dirname, ".env")
});

// Import Firebase Admin credentials
const serviceAccount = require("./serviceAccountKey.json");

// Connect to Firebase
initializeApp({
  credential: cert(serviceAccount)
});

// Connect to Firestore
const db = getFirestore();

// Create Express application
const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("DEV@Deakin backend is running!");
});

// Sign Up API
app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check that all fields are provided
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        message: "Please fill in all fields."
      });
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({
        message: "Please enter a valid email address."
      });
    }

    // Check password length
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must contain at least 6 characters."
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    // Check whether the email already exists
    const existingUser = await db.collection("users")
      .where("email", "==", cleanEmail)
      .limit(1)
      .get();

    if (!existingUser.empty) {
      return res.status(400).json({
        message: "This email is already registered."
      });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user details in Firestore
    await db.collection("users").add({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: cleanEmail,
      password: hashedPassword,
      createdAt: new Date().toISOString()
    });

    res.status(201).json({
      message: "Account created successfully!"
    });

  } catch (error) {
    console.error("Sign Up Error:", error);

    res.status(500).json({
      message: "Something went wrong. Please try again."
    });
  }
});

// Login API
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check that both fields are provided
    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter your email and password."
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    // Find the user in Firestore
    const userSnapshot = await db.collection("users")
      .where("email", "==", cleanEmail)
      .limit(1)
      .get();

    // Check whether the user exists
    if (userSnapshot.empty) {
      return res.status(401).json({
        message: "Incorrect email or password. Please try again or sign up."
      });
    }

    // Get the user's saved details
    const userDoc = userSnapshot.docs[0];
    const userData = userDoc.data();

    // Compare the entered password with the stored bcrypt hash
    const passwordMatch = await bcrypt.compare(
      password,
      userData.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Incorrect email or password. Please try again or sign up."
      });
    }

    // Login successful
    res.status(200).json({
      message: "Login successful!",
      user: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email
      }
    });

  } catch (error) {
    console.error("Login Error:", error);

    res.status(500).json({
      message: "Something went wrong. Please try again."
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});