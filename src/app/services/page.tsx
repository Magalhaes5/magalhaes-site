"use client";
import { motion } from "framer-motion";

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:.5}} };

export default function Services() {
  return (
    <motion.section className="section card" initial="hidden" whileInView="show" viewport={{ once:true, amount:.2 }} variants={fadeUp}>
      <h1>Services</h1>

      <div className="grid4" style={{marginTop:12}}>
        <div className="card mini">
          <h3>🏠 Property Sales</h3>
          <p>Valuation, marketing, visits, negotiation, and closing.</p>
        </div>
        <div className="card mini">
          <h3>🔍 Buyer Advisory</h3>
          <p>Tell me your criteria — I’ll source and pre-qualify options.</p>
        </div>
        <div className="card mini">
          <h3>📝 Rental Management</h3>
          <p>Tenant screening, contracts, inventory, and care.</p>
        </div>
        <div className="card mini">
          <h3>💻 Digital Solutions</h3>
          <p>Websites for agents, restaurants, and local businesses.</p>
        </div>
      </div>

      <h2 style={{marginTop:20}}>Website Packages</h2>
      <div className="grid3" style={{marginTop:12}}>
        <div className="card mini">
          <h3>Starter</h3>
          <ul>
            <li>1–3 pages (Home, About, Contact)</li>
            <li>Lead form + WhatsApp</li>
            <li>Basic SEO & analytics</li>
            <li>Mobile-first, fast</li>
          </ul>
          <p><span className="pill">from €690</span></p>
        </div>
        <div className="card mini">
          <h3>Pro</h3>
          <ul>
            <li>Up to 7 pages + Blog</li>
            <li>Areas pages + Featured listings</li>
            <li>Advanced SEO (hreflang, OG, schema)</li>
            <li>Performance tuning</li>
          </ul>
          <p><span className="pill">from €1,290</span></p>
        </div>
        <div className="card mini">
          <h3>Custom</h3>
          <ul>
            <li>Apimo integration</li>
            <li>n8n automations (Telegram/Email/Sheets)</li>
            <li>Design system & CMS</li>
            <li>Training & support</li>
          </ul>
          <p><span className="pill">from €2,400</span></p>
        </div>
      </div>

      <p style={{marginTop:16}}><a className="button primary lift" href="/contact">Request a quote</a></p>
    </motion.section>
  );
}
