import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { site } from "data/site";

export default function ContactSection() {
  const form = useRef();
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a3tj6t4", "template_651pgju", form.current, {
        publicKey: "ybw-MdbAn3iyFWH9G",
      })
      .then(
        () => {
          setStateMessage("Message sent! I'll get back to you as soon as I can :)");
          setTimeout(() => setStateMessage(null), 5000);
        },
        () => {
          setStateMessage("Something went wrong, please try again later");
          setTimeout(() => setStateMessage(null), 5000);
        }
      );
    e.target.reset();
  };

  return (
    <footer
      id="contact"
      className="mt-10 grid gap-10 bg-dark px-6 py-14 text-soft-blue md:grid-cols-[1.5fr_1fr] md:items-end md:gap-10 md:px-[60px] md:py-14"
    >
      <div>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-sky">
          § 04 — Contact
        </p>
        <h2 className="font-display text-[44px] font-medium leading-none tracking-[-0.03em] text-soft-blue md:text-[56px]">
          Say <em className="italic text-sky">hi</em>.
        </h2>
        <p className="mt-4 max-w-[440px] font-display text-lg leading-[1.4] text-on-dark-muted md:text-xl">
          {site.contactIntro}
        </p>
      </div>

      <div className="flex flex-col gap-2.5 font-mono text-[13px]">
        {site.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="flex items-center justify-between rounded-lg bg-white/[0.06] px-4 py-3 transition-colors duration-150 hover:bg-white/10"
          >
            <span>{link.label}</span>
            <span className="text-sky">↗</span>
          </a>
        ))}
      </div>

      <form
        id="contact-form"
        ref={form}
        onSubmit={sendEmail}
        className="col-span-full mt-2 grid gap-3 border-t border-white/10 pt-8 md:grid-cols-2"
      >
        <input
          type="text"
          name="user_name"
          required
          placeholder="Name"
          className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 font-mono text-sm text-soft-blue placeholder:text-on-dark-muted focus:border-sky focus:outline-none"
        />
        <input
          type="email"
          name="user_email"
          required
          placeholder="Email"
          className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 font-mono text-sm text-soft-blue placeholder:text-on-dark-muted focus:border-sky focus:outline-none"
        />
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Your message"
          className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 font-mono text-sm text-soft-blue placeholder:text-on-dark-muted focus:border-sky focus:outline-none md:col-span-2"
        />
        <div className="md:col-span-2">
          <button
            type="submit"
            className="rounded-full bg-sky px-4 py-2 font-mono text-xs font-semibold text-dark transition duration-150 hover:scale-[1.02] hover:shadow-md"
          >
            Send message
          </button>
          {stateMessage && (
            <p className="mt-3 font-mono text-xs text-on-dark-muted">{stateMessage}</p>
          )}
        </div>
      </form>
    </footer>
  );
}
