"use client"; // Forms usually require client-side interaction

import React, { useState } from "react";
import styles from "./page.module.css";
import SectionTitle from "@/components/Shared/SectionTitle"; // Reuse the title component

const PurchaseInfoPage = () => {
  // Basic state handling for form fields (can be expanded)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission logic (e.g., send data to an API)
    console.log("Form Data Submitted:", formData);
    alert("Thông tin đã được gửi! Chúng tôi sẽ liên hệ lại với bạn sớm."); // Simple feedback
    // Optionally clear form or redirect
  };

  return (
    <main className={styles.purchaseInfoPage}>
      <div className="container">
        <SectionTitle>Thông tin mua hàng</SectionTitle>

        <form onSubmit={handleSubmit} className={styles.infoForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Họ và tên *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Số điện thoại *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.label}>
              Địa chỉ nhận hàng *
            </label>
            <textarea
              id="address"
              name="address"
              rows={4}
              value={formData.address}
              onChange={handleChange}
              className={styles.textarea}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="notes" className={styles.label}>
              Ghi chú (tùy chọn)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>

          <div className={styles.formActions}>
            <button type="submit" className={styles.submitButton}>
              Gửi thông tin
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default PurchaseInfoPage;
