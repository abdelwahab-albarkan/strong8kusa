"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Strong 8K USA Support Inquiry");
    const message = String(data.get("message") || "");

    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const href = `mailto:${SITE.supportEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Your Name</span>
          <input className={styles.input} name="name" type="text" required autoComplete="name" placeholder="John Doe" />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Email Address</span>
          <input className={styles.input} name="email" type="email" required autoComplete="email" placeholder="john@example.com" />
        </label>
      </div>
      <label className={styles.field}>
        <span className={styles.label}>Subject</span>
        <input className={styles.input} name="subject" type="text" placeholder="Device setup assistance, subscription inquiry..." />
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Message</span>
        <textarea className={styles.textarea} name="message" rows={6} required placeholder="Describe your question, device model, or streaming setup in detail..." />
      </label>
      <button type="submit" className="btn btn-primary btn-lg">
        Send Message
      </button>
      {sent && (
        <p className={styles.note} role="status">
          Your email client will open to send your message to {SITE.supportEmail}.
        </p>
      )}
    </form>
  );
}
