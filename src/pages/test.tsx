import { get } from "http";
import { set } from "mongoose";
import { useEffect, useState, useContext } from "react";
import { Button, Typography } from "@mui/material";
import { useLangContext } from "@/components/LangContext";

export default function TestPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [spicy, setSpicy] = useState(false);
  const { lang, toggleLang } = useLangContext();

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch("/api/test");
        if (!response.ok) throw new Error("Failed to fetch questions");

        const data = await response.json();
        setQuestions(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  const getRandom = () => {
    let question = "";
    if (!spicy) {
      let safeQuestions = questions.filter((q) => q.spicy === false);
      question =
        safeQuestions[Math.floor(Math.random() * safeQuestions.length)];
    } else {
      question = questions[Math.floor(Math.random() * questions.length)];
    }
    setCurrentQuestion(question);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Test Query</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <h1>Random</h1>
        <div className="p-3 bg-gray-100 rounded-md shadow-md text-black">
          {currentQuestion == null
            ? "Click the button to get a random question!"
            : lang === "en"
            ? currentQuestion.text_en
            : currentQuestion.text_gr}
        </div>
        <Button onClick={getRandom}>Refresh</Button>
        <br />
        <Button onClick={() => setSpicy(!spicy)}>
          Spicy:{spicy ? "true" : "false"}
        </Button>
        <br />
        <Button onClick={toggleLang}>Language:{lang}</Button>
      </div>
      <div>Current languageContext is {lang}</div>
    </div>
  );
}
