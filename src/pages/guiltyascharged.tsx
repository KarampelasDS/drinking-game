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
  const [bilingualMode, setBilingualMode] = useState(false);

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
    <div className="p-6 max-w-2xl mx-auto" id={styles.container}>
      <LanguageToggle />
      <div className="flex justify-center w-[100%] mt-2 mb-12">
        <img
          id={styles.imageHeader}
          src="/Images/GuiltyAsCharged.png"
          width={700}
        />
      </div>

      {loading == true ? (
        <div className="flex items-center justify-center w-full">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : (
        <div className={styles.mainContainer}>
          <div className={styles.titleToggle}>
            <div
              className={styles.spicyToggle}
              onClick={() => setSpicy(!spicy)}
            >
              <TbRating18Plus size={45} />:
              {spicy ? (
                <FaCheck size={45} color="green" />
              ) : (
                <FaXmark size={45} color="red" />
              )}
            </div>
            <h1 className="text-center mb-4 italic" id={styles.textHeader}>
              {lang === "en"
                ? "Who's most likely to..."
                : "Ποιός είναι πιο πιθανόν..."}
            </h1>
            <h1 />
            <h1 />
          </div>
          <div
            className={`p-3 bg-gray-100 rounded-md shadow-md text-black text-center ${styles.test}`}
            id={styles.currentQuestion}
          >
            {currentQuestion == null
              ? lang == "en"
                ? "(Click the button to get a random question!)"
                : "(Πάτα το κουμπί για μια τυχαία ερώτηση!)"
              : lang === "en"
              ? currentQuestion.text_en
              : currentQuestion.text_gr}
          </div>
          <div className="my-1" id={styles.nextButton}>
            <Button
              text={lang == "en" ? "Next Question" : "Επόμενη Ερώτηση"}
              function={getRandom}
            />
          </div>
          <br />
          <br />
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
