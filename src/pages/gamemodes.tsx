import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";
import styles from "../styles/gamemodes.module.css";
import { useLangContext } from "@/components/LangContext";
import Button from "@/components/Button/Button";

export default function Gamemodes() {
  const { lang } = useLangContext();
  return (
    <>
      <LanguageToggle />
      <div className={styles.container}>
        <div className={styles.game}>
          <img className={styles.gameImage} src="/Images/GuiltyAsCharged.png" />
          <div className={styles.gameDescription}>
            {lang === "en" ? (
              <>
                <p>
                  In <strong>Guilty as Charged</strong>, a question or scenario
                  will appear on the screen
                </p>
                <p>(e.g., 'Who is most likely to skip a workout?').</p>
                <p>
                  Players will openly point to the person they think the
                  question applies to the most.
                </p>
                <p>
                  The person with the most votes has to drink the amount of sips
                  the question declares.
                </p>
                <p>
                  The amount of sips is dictated by how hardcore or awkward the
                  question is.
                </p>
                <p>The game continues with new questions.</p>
              </>
            ) : (
              <>
                <p>
                  Στο <strong>Guilty as Charged</strong>, μια ερώτηση ή σενάριο
                  θα εμφανιστεί στην οθόνη
                </p>
                <p>
                  (π.χ., ' Ποιος είναι πιο πιθανό να παραλείψει την προπόνηση;
                  ').
                </p>
                <p>
                  Οι παίκτες δείχνουν ανοιχτά το άτομο στο οποίο θεωρούν ότι
                  ταιριάζει η ερώτηση περισσότερο.
                </p>
                <p>
                  Το άτομο με τις περισσότερες ψήφους πρέπει να πιει τον αριθμό
                  των γουλιών που λέει η ερώτηση.
                </p>
                <p>
                  Ο αριθμός των γουλιών εξαρτάται από το πόσο ακραία ή άβολη
                  είναι η ερώτηση.
                </p>
                <p>Το παιχνίδι συνεχίζεται με νέες ερωτήσεις.</p>
              </>
            )}
          </div>
          <Button
            link="/guiltyascharged"
            text={lang === "en" ? "Play Now" : "Παίξτε Τώρα"}
          />
        </div>
        <div className={styles.game}>
          <img className={styles.gameImage} src="/Images/TruthOrDrink.png" />
          <div className={styles.gameDescription}>
            {lang === "en" ? (
              <>
                <p>
                  In <strong>Truth or Drink</strong>, players take turns
                  choosing between answering a truth or completing a dare.
                </p>
                <p>
                  If they don&apos;t answer or complete the dare, they must take
                  the number of sips dictated by the challenge.
                </p>
                <p>
                  Questions and dares range from fun and lighthearted to bold
                  and daring.
                </p>
                <p>
                  The game continues with each player taking turns, pushing
                  boundaries and testing courage.
                </p>
                <p>Will you reveal your secrets or take a sip?</p>
              </>
            ) : (
              <>
                <p>
                  Στο <strong>Truth or Drink</strong>, οι παίκτες διαλέγουν αν
                  θα απαντήσουν μια ερώτηση ή θα εκτελέσουν μια πρόκληση.
                </p>
                <p>
                  Αν δεν απαντήσουν ή εκτελέσουν την πρόκληση, πρέπει να πιουν
                  τον αριθμό των γουλιών που ορίζει η δοκιμασία.
                </p>
                <p>
                  Οι ερωτήσεις και οι προκλήσεις κυμαίνονται από διασκεδαστικές
                  και ανάλαφρες έως τολμηρές και προκλητικές.
                </p>
                <p>
                  Το παιχνίδι συνεχίζεται με τη σειρά των παικτών, δοκιμάζοντας
                  τα όριά τους και το θάρρος τους.
                </p>
                <p>Θα αποκαλύψεις τα μυστικά σου ή θα πιεις;</p>
              </>
            )}
          </div>
          <Button
            link="/truthordrink"
            text={lang === "en" ? "Play Now" : "Παίξτε Τώρα"}
          />
        </div>
        <div className={styles.game} id={styles.DrinkReaper}>
          <img
            className={styles.gameImage}
            src="/Images/DrinkReaper.png"
            id={styles.gameImageDrinkReaper}
          />
          <div className={styles.gameDescription} id={styles.DrinkReaperButton}>
            {lang === "en" ? (
              <>
                <p>
                  In <strong>Drink Reaper</strong>, the phone or mouse is passed
                  around based on the given prompt.
                </p>
                <p>
                  A player starts by reading a statement like{" "}
                  <em>
                    "Hand the device to the person who is most likely to be late
                    to their own wedding."
                  </em>
                </p>
                <p>
                  The device is then handed to the chosen person, who must take
                  a sip as their "punishment."
                </p>
                <p>
                  That player then reads the next question and chooses who to
                  pass the device to next.
                </p>
              </>
            ) : (
              <>
                <p>
                  Στο <strong>Drink Reaper</strong>, το κινητό ή το ποντίκι
                  περνάει από χέρι σε χέρι με βάση την εκάστοτε πρόταση.
                </p>
                <p>
                  Ένας παίκτης ξεκινά διαβάζοντας μια δήλωση όπως{" "}
                  <em>
                    "Δώσε τη συσκευή στο άτομο που είναι πιο πιθανό να αργήσει
                    στον ίδιο του τον γάμο."
                  </em>
                </p>
                <p>
                  Η συσκευή δίνεται στο επιλεγμένο άτομο, το οποίο πρέπει να
                  πιει μια γουλιά ως "τιμωρία."
                </p>
                <p>
                  Ο παίκτης που πήρε τη συσκευή διαβάζει την επόμενη ερώτηση και
                  επιλέγει σε ποιον θα τη δώσει μετά.
                </p>
              </>
            )}
          </div>
          <Button
            link="/drinkreaper"
            text={lang === "en" ? "Play Now" : "Παίξτε Τώρα"}
          />
        </div>
      </div>
    </>
  );
}
