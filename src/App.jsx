import { useState } from "react";
import BookCard from "./components/BookCard";

function App() {
  const [books, setBooks] = useState([
    { id: 1, titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", estDisponible: true },
    { id: 2, titre: "Une si longue lettre", auteur: "Mariama Bâ", estDisponible: true },
    { id: 3, titre: "L'Aventure ambiguë", auteur: "Cheikh Hamidou Kane", estDisponible: false },
    { id: 4, titre: "Les Misérables", auteur: "Victor Hugo", estDisponible: true },
  ]);

  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");

  const nbDisponibles = books.filter((b) => b.estDisponible).length;

  function onClickEmprunt(bookId) {
    setBooks(
      books.map((book) =>
        book.id === bookId
          ? { ...book, estDisponible: !book.estDisponible }
          : book
      )
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (titre.trim() === "" || auteur.trim() === "") return;

    const nouveauLivre = {
      id: Date.now(),
      titre: titre.trim(),
      auteur: auteur.trim(),
      estDisponible: true,
    };

    setBooks([...books, nouveauLivre]);
    setTitre("");
    setAuteur("");
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>
        Bibliothèque universitaire : {nbDisponibles} livre(s) disponible(s) sur {books.length}
      </h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Titre du livre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          style={{ padding: "8px", marginRight: "8px" }}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
          style={{ padding: "8px", marginRight: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 14px", cursor: "pointer" }}>
          Ajouter
        </button>
      </form>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            titre={book.titre}
            auteur={book.auteur}
            estDisponible={book.estDisponible}
            onClickEmprunt={() => onClickEmprunt(book.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;