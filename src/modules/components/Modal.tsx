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
          height: "80vh", // Fast høyde
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
          <X size={36} />
        </button>

        {title && (
          <h2
            style={{
              marginBottom: "1rem",
              backgroundColor: titleColor || "#ccc",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#000",
              textAlign: "center",
              flexShrink: 0,
            }}
          >
            {title}
          </h2>
        )}

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            fontSize: "1.1rem",
            lineHeight: "1.6",
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
