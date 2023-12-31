import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//  React Router
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
import Mood0 from "./routes/moodTrack/mood0";
import Mood1 from "./routes/moodTrack/mood1";
import Mood2 from "./routes/moodTrack/mood2";
import Mood3 from "./routes/moodTrack/mood3";
import Mood4 from "./routes/moodTrack/mood4";
import Mood5 from "./routes/moodTrack/mood5";
import Mood6 from "./routes/moodTrack/mood6";
import Mood7 from "./routes/moodTrack/mood7";
import Mood8 from "./routes/moodTrack/mood8";


// Material-UI theme
const theme = createTheme({
  typography: {
    fontFamily: 'Cabin, sans-serif', // Set "Cabin" as the default font family
  },
});

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/features",
        element: <Features />,
      },

      {
        path: "/play",
        element: <PlayStart />,
      },
      {
        path: "/play/challenges",
        element: <PlayChallenges />,
      },
      {
        path: "/play/challenges/breathing",
        element: <BreathingExercise />,
        // Redirect if local storage indicates that breathing exercise has been completed (prevent from completing it again)
        loader: () =>
          localStorage.getItem("challenges") &&
          JSON.parse(localStorage.getItem("challenges"))[0].isCompleted
            ? redirect("/play/challenges")
            : null,
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
        element: <Rewards />,
      },

      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/moodTrack/mood0",
        element: <Mood0 />,
      },
      {
        path: "/moodTrack/mood1",
        element: <Mood1 />,
      },
      {
        path: "/moodTrack/mood2",
        element: <Mood2 />,
      },
      {
        path: "/moodTrack/mood3",
        element: <Mood3 />,
      },
      {
        path: "/moodTrack/mood4",
        element: <Mood4 />,
      },
      {
        path: "/moodTrack/mood5",
        element: <Mood5 />,
      },
      {
        path: "/moodTrack/mood6",
        element: <Mood6 />,
      },
      {
        path: "/moodTrack/mood7",
        element: <Mood7 />,
      },
      {
        path: "/moodTrack/mood8",
        element: <Mood8/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
