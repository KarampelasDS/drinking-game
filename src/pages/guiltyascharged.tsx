import { useEffect, useState, useContext } from "react";
import Button from "@/components/Button/Button";
import { Button as MuiButton } from "@mui/material";
import { useLangContext } from "@/components/LangContext";
import styles from "../styles/guiltyascharged.module.css";
import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";
import { TbRating18Plus } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Guiltyascharged() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [spicy, setSpicy] = useState(false);
  const { lang, toggleLang } = useLangContext();

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch("/api/guiltyascharged");
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
      <LanguageToggle />
      <div className="flex justify-center w-[100%] mt-6 mb-12">
        <img
          id={styles.imageHeader}
          src="/Images/GuiltyAsCharged.png"
          width={700}
        />
      </div>

      {loading == true ? (
        "loading..."
      ) : (
        <div>
          <div className={styles.titleToggle}>
            <div
              className={styles.spicyToggle}
              onClick={() => setSpicy(!spicy)}
            >
              <TbRating18Plus size={40} />:
              {spicy ? <FaCheck size={40} /> : <FaXmark size={40} />}
            </div>
            <h1 className="text-center mb-4 italic" id={styles.textHeader}>
              {lang === "en"
                ? "Who's most likely to..."
                : "Ποιός είναι πιο πιθανόν να..."}
            </h1>
            <h1 />
            <h1 />
          </div>
          <div
            className="p-3 bg-gray-100 rounded-md shadow-md text-black text-center"
            id={styles.currentQuestion}
          >
            {currentQuestion == null
              ? "Click the button to get a random question!"
              : lang === "en"
              ? currentQuestion.text_en
              : currentQuestion.text_gr}
          </div>
          <div className="my-4" id={styles.nextButton}>
            <Button text="Next Question" function={getRandom} />
          </div>
          <br />
          <br />
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
