function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        margin: "10px",
        width: "220px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ margin: "0 0 6px" }}>{titre}</h3>
      <p style={{ margin: "0 0 10px", color: "#555" }}>{auteur}</p>

      <p style={{ fontWeight: "bold" }}>
        {estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}
      </p>

      <button
        onClick={onClickEmprunt}
        style={{
          padding: "8px 14px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          color: "white",
          backgroundColor: estDisponible ? "#2e7d32" : "#c62828",
        }}
      >
        {estDisponible ? "Emprunter" : "Rendre"}
      </button>
    </div>
  );
}

export default BookCard;