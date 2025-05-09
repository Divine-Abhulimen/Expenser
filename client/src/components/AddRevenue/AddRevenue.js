import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import "../../pages/assets/styles/RevenueTracker.css";
import { db } from "../../config.js";
import { Timestamp } from "firebase/firestore";

function AddRevenue({ closeModal }) {
  const [formData, setFormData] = useState({
    date: "",
    source: "",
    amount: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const collectionRef = collection(db, "revenue");
      await addDoc(collectionRef, {
        ...formData,
        date: Timestamp.fromDate(new Date(formData.date)), // Save as Firestore Timestamp
        amount: parseFloat(formData.amount), // Ensure amount is saved as a number
      });
      console.log("Revenue added successfully");
      closeModal();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add an Revenue</h2>
        <form onSubmit={handleSubmit}>
          <label className="label">
            Transaction Date:
            <input
              className="field"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          <label className="label">
            Source:
            <input
              className="field"
              type="text"
              name="source"
              value={formData.source}
              onChange={handleChange}
              required
            />
          </label>
          <label className="label">
            Amount:
            <input
              className="field"
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </label>
          <label className="label">
            Note:
            <input
              className="field"
              type="text"
              name="note"
              value={formData.note}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="modal-button save">
            Add Revenue
          </button>
        </form>
        <button className="cancel-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default AddRevenue;
