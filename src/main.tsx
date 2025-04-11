import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, ErrorBoundary } from "@rollbar/react"; // Provider imports 'rollbar'
import "./index.css";
import Rollbar from "rollbar";

const rollbarConfig: Rollbar.Configuration = {
  accessToken: import.meta.env.VITE_ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: "testenv",
    client: {
      javascript: {
        source_map_enabled: true, // false by default

        // -- Add this into your configuration ---
        code_version: "v1.0.0",
        // ---------------------------------------

        // Optionally have Rollbar guess which frames the error was
        // thrown from when the browser does not provide line
        // and column numbers.
        guess_uncaught_frames: true,
      },
    },
  },
};

function TestError() {
  return (
    <>
      <h1>Test Rollbar</h1>
      <button
        onClick={() => {
          // This will be caught by the ErrorBoundary
          throw new Error("Test error");
        }}
      >
        Throw error
      </button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider config={rollbarConfig}>
      <ErrorBoundary>
        <TestError />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
