import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";
import { useLangContext } from "@/components/LangContext";
import KofiWidget from "@/components/KofiWidget";

export default function Donate() {
  const { lang, toggleLang } = useLangContext();
  return (
    <>
      <LanguageToggle />
      {lang === "en" ? (
        <div className="container">
          <div>☕ Buy Me a Drink!</div>
          <div className="contactparagraph">
            Enjoying 'Bottom’s Up!' and want to support its development? You can
            buy me a drink (or a coffee, if we’re being responsible) over on
            Ko-fi! 🍹☕ Every little bit helps keep the game running and gives
            me the motivation to add even more fun features. Plus, it’s a great
            excuse for me to raise a glass in your honor! 🥂 Hit the button on
            the bottom left to show some love! <br />
          </div>
          <div>🍻 Cheers, and thanks for playing!</div>
        </div>
      ) : (
        <div className="container">
          <div>☕ Κέρασέ με ένα ποτό!</div>
          <div className="contactparagraph">
            Απολαμβάνεις το Bottom’s Up! και θέλεις να στηρίξεις την ανάπτυξή
            του; Μπορείς να κεράσεις ένα ποτό (ή έναν καφέ, αν το πάμε πιο
            υπεύθυνα) στο Ko-fi! 🍹☕ Κάθε στήριξη βοηθά το παιχνίδι να
            συνεχίσει και μου δίνει κίνητρο να προσθέσω ακόμα περισσότερες
            διασκεδαστικές λειτουργίες. Και φυσικά, είναι μια τέλεια αφορμή να
            πιω στην υγειά σου! 🥂 Πάτα το κουμπί κάτω αριστερά αν θέλεις να
            βοηθήσεις.
            <br /> Ευχαριστώ για την υποστήριξη!!
          </div>
          <div> Στην υγειά μας, και ευχαριστώ που παίζεις! 🍻</div>
        </div>
      )}
    </>
  );
}
