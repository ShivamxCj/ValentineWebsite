import { useState } from "react";
import Loader from "./components/Loader";
import Welcome from "./components/Welcome";
import Proposal from "./components/Proposal";
import MainPage from "./components/MainPage";

export default function App() {
  const [stage, setStage] = useState("loading");

  return (
    <div className="w-full h-screen overflow-hidden">
      {stage === "loading" && <Loader next={() => setStage("welcome")} />}

      {stage === "welcome" && <Welcome next={() => setStage("proposal")} />}

      {stage === "proposal" && (
        <Proposal next={() => setStage("main")} />
      )}

      {stage === "main" && <MainPage />}
    </div>
  );
}
