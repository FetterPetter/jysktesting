import React from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  titleColor: string; // Farge for tittelen
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  titleColor,
  children,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="modal-backdrop"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Mørk bakgrunn
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "16px",
          position: "relative",
          maxWidth: "600px",
          width: "90%",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <X size={24} />
        </button>
        {title && (
          <h2
            style={{
              marginBottom: "1rem",
              backgroundColor: titleColor, // Bruker fargen for tittelen
              color: "#fff", // Hvit tekst
              padding: "10px",
              borderRadius: "8px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {title}
          </h2>
        )}
        <div>{children}</div>
      </div>
    </div>,
    document.body, // Bruker portal for å vise modal utenfor det normale DOM-treet
  );
};

export default Modal;
