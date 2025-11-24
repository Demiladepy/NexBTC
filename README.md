# NexBTC — Bitcoin Wallet & Bridge on ICP

A decentralized Bitcoin wallet built with the Internet Computer Protocol (ICP), leveraging Chain-Key Bitcoin for native BTC transactions without intermediaries.
NexBTC allows users to send, receive, and manage Bitcoin directly on-chain, with a fast React frontend and secure Motoko backend canister.

# Overview

NexBTC is built to showcase how developers can combine:

ICP Canisters

Motoko

Chain-Key Bitcoin

Secure wallet interfaces

Modern React frontends

This project demonstrates a minimal, production-ready example of integrating a Bitcoin wallet UI with an ICP Motoko canister that interacts with Bitcoin.

The application was originally scaffolded as a Hello World! ICP Ninja template, then expanded into a full Bitcoin wallet prototype.

# Project Structure
NexBTC/
│
├── backend/
│   ├── app.mo               # Main Motoko canister logic
│   ├── mops.toml            # Dependency management for Motoko
│   └── BUILD.md             # ICP Ninja → local setup migration guide
│
├── frontend/
│   ├── src/
│   │   ├── App.tsx          # Main React Application
│   │   ├── components/      # UI Components (Sidebar, Navigation, Cards, etc.)
│   │   ├── common/          # Reusable logic + utility modules
│   │   ├── layout/          # App layout (header, footer, wrappers)
│   │   ├── types/           # TypeScript typings
│   │   ├── pages/           # Route pages
│   │   └── styles/          # TailwindCSS + global styles
│   └── index.html           # Entry HTML file
│
├── README.md
└── package.json

# Tech Stack
Frontend

React + TypeScript

TailwindCSS v4

React Router

ICP Agent JS (for canister connection)

Backend

Motoko

ICP Canisters

Chain-Key Bitcoin integration

# Installation & Setup
1️⃣ Clone the Project
git clone https://github.com/Demiladepy/NexBTC
cd NexBTC

# Frontend Setup
2️⃣ Install Dependencies
cd frontend
npm install

3️⃣ Start the Frontend
npm run dev


Your app will be live at:

http://localhost:5173/

# Backend (Motoko) Setup
From ICP Ninja

This project can be deployed directly on ICP Ninja.

Open the project in ICP Ninja.

Click Run (top right).

Your Motoko canister deploys instantly to mainnet—for free.

🔗 Open ICP Ninja: (add your project URL)

# Running the Canister Locally (dfx)

To run the canister locally, you must migrate the Ninja project to your machine:

1. Download your project

Click “Download files” under the pink ninja star icon inside ICP Ninja.

2. Install DFX
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"

3. Start a local replica
dfx start --background

4. Deploy the backend
dfx deploy

# Motoko Canister Logic (Summary)

The backend handles:

Generating and storing Bitcoin addresses

Querying Bitcoin balances

Processing BTC transfers

Communicating with ICP’s Chain-Key Bitcoin API

Core file:
backend/app.mo

# Example Output (Hello World Template)

The minimal starting point for the Motoko application is:

import Debug "mo:base/Debug";

actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};


NexBTC extends this with complete Bitcoin logic.

# Environment Variables

Create a .env file inside /frontend:

VITE_CANISTER_ID={id}
VITE_DFX_NETWORK=local


(If you are using the production deployment, replace with mainnet IDs.)

# Build for Production
Frontend
npm run build

Backend
dfx deploy --network ic

# Hackathon-Ready Notes

This README follows the Encode Club format, emphasizing:

clarity

structure

ease of review

developer reproducibility

Add these sections before submission:

Architecture Diagram

User Flow

Security Notes

Demo Link

Pitch Deck Link

Team Information

I can generate all of these next.

# Support & Contribution

Pull requests are welcome.

If you'd like help improving the canister or adding Bitcoin transactions, open an issue.

🟧 License

MIT License.
