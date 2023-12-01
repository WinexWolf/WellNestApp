import { StyledEngineProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//  React Router
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error";
import Layout from "./routes/layout";
import Features from "./routes/features";
import PlayStart from "./routes/play/PlayStart";
import PlayChallenges from "./routes/play/PlayChallenges";
import BreathingExercise from "./components/play/BreathingExercise";
import Rewards from "./routes/rewards/Rewards";
import MatchingWelcomePage from "./routes/matching/MatchingWelcomePage";
import MatchingMainPage from "./routes/matching/MatchingMainPage";


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />
      },
      {
        path: "/features",
        element: <Features />
      },
      {
        path: "/play",
        element: <PlayStart/>,
      },
      {
        path: "/play/challenges",
        element: <PlayChallenges />
      },
      {
        path: "/play/challenges/breathing",
        element: <BreathingExercise />,
        // Redirect if local storage indicates that breathing exercise has been completed (prevent from completing it again)
        loader: () => ((localStorage.getItem('challenges') && JSON.parse(localStorage.getItem('challenges'))[0].isCompleted) ? redirect('/play/challenges') : null)
      },
      {
        path: "/therapy_matching/main",
        element: <MatchingMainPage />
      },
      {
        path: "/therapy_matching/welcome",
        element: <MatchingWelcomePage />
      },
      {
        path: "/rewards",
        element: <Rewards/>,
      },
      
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/*
        <StyledEngineProvider injectFirst>
            <App />
            </StyledEngineProvider>
    */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
