import { useState } from "react";
import axios from "axios";
import {
  FiCode,
  FiLayout,
  FiGlobe,
  FiCpu,
  FiSend,
} from "react-icons/fi";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [framework, setFramework] = useState("React");
  const [theme, setTheme] = useState("Modern");
  const [websiteType, setWebsiteType] = useState("Portfolio");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const generateWebsite = async () => {
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8080/website", {
        prompt,
        framework,
        theme,
        websiteType,
      });

      setResult(res.data);
    } catch (err) {
      alert("Backend not connected");
    }

    setLoading(false);
  };

  return (
    <div className="app">

      <div className="left">

        <span className="badge">
          <FiCpu />
         WebCraft AI
        </span>

        <h1>
          Build Stunning
          <span> Websites </span>
          using AI
        </h1>

        <p>
          Describe your website in simple words. Our AI Agent will generate
          the complete frontend with modern UI and responsive design.
        </p>

      </div>

      <div className="right">

        <div className="card">

          <h4>Generate Website</h4>

          <label>Website Description</label>

          <textarea
            placeholder="Example: Build a modern restaurant website with hero section, menu, testimonials and contact form..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <div className="row">

            <div className="box">
              <FiLayout />
              <select
                value={websiteType}
                onChange={(e) => setWebsiteType(e.target.value)}
              >
                <option>Portfolio</option>
                <option>E-Commerce</option>
                <option>Restaurant</option>
                <option>Landing Page</option>
                <option>Education</option>
              </select>
            </div>

            <div className="box">
              <FiGlobe />
              <select
                value={framework}
                onChange={(e) => setFramework(e.target.value)}
              >
                <option>React</option>
                <option>Next.js</option>
                <option>HTML/CSS</option>
              </select>
            </div>

            <div className="box">
              <FiCode />
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              >
                <option>Modern</option>
                <option>Minimal</option>
                <option>Glassmorphism</option>
                <option>Dark</option>
              </select>
            </div>

          </div>

          <button onClick={generateWebsite}>
            {loading ? "Generating..." : "✨ Generate Website"}
          </button>

          {result && (
            <div className="output">
              <h3>Generated Result</h3>

              <pre>{result}</pre>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default App;