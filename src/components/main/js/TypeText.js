import React, { useEffect, useState } from "react";

const TypeText = ({ text, delay, initialDelay, element }) => {
  // State za prikazani tekst
  const [displayedText, setDisplayedText] = useState("");

  // State za praćenje trenutnog indeksa teksta
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efekt za postupno prikazivanje teksta
  useEffect(() => {
    // Interval koji dodaje tekst na svakom koraku
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      } else {
        // Tekst je cijeli prikazan, zaustavi interval
        clearInterval(interval);
      }
    }, delay);

    // Vraća se čišćenje intervala kako bi se izbjegle curenja
    return () => {
      clearInterval(interval);
    };
  }, [text, delay, currentIndex]);

  // Prikazuje tekst koristeći zadani element (npr. h1, p)
  return React.createElement(element, null, displayedText);
};

export default TypeText;
