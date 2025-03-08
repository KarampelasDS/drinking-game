import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";
import { useLangContext } from "@/components/LangContext";

export default function Contact() {
  const { lang } = useLangContext();
  return (
    <>
      <LanguageToggle />
      {lang === "en" ? (
        <div className="container">
          <div>🍻 Get in Touch!</div>
          <div className="contactparagraph">
            Found a bug? Got a wild idea for a new feature? Or just want to chat
            about the game (or drinks)? 🍹🍺 <br />
            I’d love to hear from you! Shoot me an email by clicking{" "}
            <a className="underline" href="mailto:24dimitris@gmail.com">
              here
            </a>
            , and I’ll get back to you as soon as I can!
            <br /> Thanks for playing!
          </div>
          <div> 🥂Cheers!</div>
        </div>
      ) : (
        <div className="container">
          <div>🍻 Ας μιλήσουμε!</div>
          <div className="contactparagraph">
            Βρήκες κάποιο bug; Έχεις καποια τρελή ιδέα για νέα λειτουργία; Ή
            απλά θέλεις να πιάσουμε την κουβέντα για το παιχνίδι (ή τα ποτά);
            🍹🍺
            <br />
            Θα χαρώ να ακούσω νέα σου! Στείλε μου ένα email πατώντας {""}
            <a className="underline" href="mailto:24dimitris@gmail.com">
              εδώ
            </a>
            , και θα σου απαντήσω το συντομότερο δυνατό!
            <br /> Ευχαριστώ για την υποστήριξη!!
          </div>
          <div> 🥂Για μας!</div>
        </div>
      )}
    </>
  );
}
