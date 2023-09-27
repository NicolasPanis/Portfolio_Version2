import { useState, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { Link } from "react-router-dom";
import "./Carrousel.scss";

function Carrousel() {
  useEffect(() => {
    const mytext = new SplitType(".projectTitle");

    gsap.from(".char", {
      yPercent: 130,
      stagger: 0.05,
      delay: 0.2,
      duration: 1,
      ease: "back.out",
    });
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour ouvrir le modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="slider">
      <h2 className="projectTitle">Projects</h2>
      <div className="slider1" onClick={openModal}></div>
      <div className="slider2" onClick={openModal}></div>
      <div className="slider3" onClick={openModal}></div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>This is your modal content.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrousel;
