"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./leadform.module.css";
import { useI18n } from "@/components/LanguageProvider";

export default function LeadForm() {
  const r = useRouter();
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    // honeypot
    if ((fd.get("company") as string)?.length > 0) {
      setLoading(false);
      return;
    }

    // TODO: send to your API / email service here if desired
    // await fetch("/api/lead", { method:"POST", body: fd });

    r.push("/thanks");
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label className={styles.col}>
          {t("form_name")}
          <input name="name" required placeholder="Jane Doe" />
        </label>
        <label className={styles.col}>
          {t("form_email")}
          <input name="email" type="email" required placeholder="you@email.com" />
        </label>
        <label className={styles.col}>
          {t("form_phone")}
          <input name="phone" inputMode="tel" placeholder="+352…" />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.col}>
          {t("form_budget_min")}
          <input name="budgetMin" type="number" min={0} placeholder="300000" />
        </label>
        <label className={styles.col}>
          {t("form_budget_max")}
          <input name="budgetMax" type="number" min={0} placeholder="650000" />
        </label>
        <label className={styles.col}>
          {t("form_bedrooms")}
          <select name="bedrooms" defaultValue="">
            <option value="" disabled>{t("form_bedrooms_choose")}</option>
            <option>1</option><option>2</option><option>3</option>
            <option>4</option><option>5+</option>
          </select>
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.colWide}>
          {t("form_locations")}
          <input name="locations" placeholder="Strassen, Bertrange, Luxembourg City…" />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.check}>
          <input type="checkbox" name="garage" /> {t("form_garage")}
        </label>
        <label className={styles.check}>
          <input type="checkbox" name="garden" /> {t("form_garden")}
        </label>
      </div>

      <label className={styles.notesLabel}>
        {t("form_notes")}
        <textarea name="notes" rows={4} placeholder="Tell me what matters to you…" />
      </label>

      {/* honeypot */}
      <input type="text" name="company" autoComplete="off" className={styles.hp} tabIndex={-1} />

      <label className={styles.consent}>
        <input type="checkbox" required /> {t("form_consent")}
      </label>

      <button className="button primary" disabled={loading}>
        {loading ? t("form_sending") : t("form_send")}
      </button>
    </form>
  );
}
