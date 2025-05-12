import React from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  titleColor?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  titleColor = "#ccc",
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
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "1rem",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "1.5rem",
          borderRadius: "20px",
          position: "relative",
          width: "100%",
          maxWidth: "720px",
          height: "80vh",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
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
            zIndex: 1,
          }}
          aria-label="Lukk"
        >
          <X
            size={36}
            color="#ff0000"
            style={{
              transition: "transform 0.2s, color 0.2s",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as SVGElement).style.transform = "scale(1.2)";
              (e.currentTarget as SVGElement).style.color = "#cc0000";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as SVGElement).style.transform = "scale(1)";
              (e.currentTarget as SVGElement).style.color = "#ff0000";
            }}
          />
        </button>

        {title && (
          <h2
            className="modal-title"
            style={{
              color: "#000",
              fontWeight: "bold",
              textAlign: "center",
              padding: "10px 20px",
              border: "2px solid",
              borderColor: titleColor,
              backgroundColor: titleColor,
              borderRadius: "8px",
            }}
          >
            {title}
          </h2>
        )}

        {/* Modal content */}
        <div
          className="modal-content"
          style={{
            flex: 1,
            overflowY: "auto",
            paddingRight: "10px",
          }}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
