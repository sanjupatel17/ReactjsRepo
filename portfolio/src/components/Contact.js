import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ showNotification }) => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.message) {
      showNotification("Please fill all fields ❗", "error");
      return;
    }

    setLoading(true);

    emailjs.send(
      "service_kdysh1b",      // your Service ID
      "template_pqby3vc",     // your Template ID
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message
      },
      "VbKzjSxcy4BULLMe3"      // your Public Key
    )
    .then(() => {
      showNotification("Message Sent Successfully ✅", "success");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    })
    .catch((error) => {
      console.log("EmailJS Error:", error);
      showNotification("Failed to send message ❌", "error");
      setLoading(false);
    });
  };

  return (
    <section className="container">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
