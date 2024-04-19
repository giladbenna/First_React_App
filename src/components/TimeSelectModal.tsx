import React, { useState } from "react";
import "../css/PopUpOrderMovieTime.css";

interface TimeSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTime: (time: string) => void;
}

function TimeSelectModal({
  isOpen,
  onClose,
  onSelectTime,
}: TimeSelectModalProps) {
  const [selectedTime, setSelectedTime] = useState("");
  const times = ["1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM", "9:00 PM"]; // Example times

  if (!isOpen) return null;

  const handleConfirm = () => {
    onSelectTime(selectedTime);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-header">Select a Time</div>
        <select
          className="time-select"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Select Time</option>
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <button
          className="confirm-button"
          onClick={handleConfirm}
          disabled={!selectedTime}
        >
          Order
        </button>
      </div>
    </div>
  );
}

export default TimeSelectModal;
