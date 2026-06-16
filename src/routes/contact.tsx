import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/site/Marquee";
import { CTASection } from "@/components/site/Sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abraham Olufowobi" },
      {
        name: "description",
        content: "Start a project with Abraham Olufowobi. Reply within 24 hours.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const first = String(f.get("first") || "");
    const last = String(f.get("last") || "");
    const email = String(f.get("email") || "");
    const phone = String(f.get("phone") || "");
    const message = String(f.get("message") || "");

    const subject = `New enquiry from ${first} ${last}`.trim();
    const body = `Name: ${first} ${last}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

    // Send to email
    window.location.href = `mailto:abrahamolufowobi.web@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    // Then open WhatsApp prefilled
    setTimeout(() => {
      const wa = `Hi Abraham, my name is ${first} ${last}.\n\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;
      window.open(`https://wa.me/447823765197?text=${encodeURIComponent(wa)}`, "_blank");
      setSent(true);
    }, 400);
  };

  return (
    <>
      <section className="px-5 pt-32 md:px-10 md:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">Contact</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,8rem)] font-medium leading-[0.95] tracking-tighter">
              Let's <span className="text-[#D6FF3D]">talk</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-white/70">
              Tell me about your project. I reply within 24 hours, usually faster. Sending the form
              opens WhatsApp with your message pre-filled and also emails me a copy.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">Email</p>
              <a
                href="mailto:abrahamolufowobi.web@gmail.com"
                className="mt-3 block break-all font-display text-base text-white hover:text-[#D6FF3D]"
              >
                abrahamolufowobi.web@gmail.com
              </a>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-[#0a0a0a] p-6">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">Phone</p>
              <a href="tel:+447823765197" className="mt-3 block font-display text-base text-white hover:text-[#D6FF3D]">
                +44 7823 765197
              </a>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-[#0a0a0a] p-6">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">WhatsApp</p>
              <a
                href="https://wa.me/447823765197"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block font-display text-base text-white hover:text-[#D6FF3D]"
              >
                Send a message →
              </a>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-[#0a0a0a] p-6">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">Hours</p>
              <p className="mt-3 font-display text-base">Mon — Fri · 9:00 — 18:00 GMT</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-8">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 md:p-10"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="First name" name="first" required />
                <Field label="Last name" name="last" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div className="mt-5">
                <label className="font-display text-xs uppercase tracking-[0.25em] text-white/50">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project, timeline and budget."
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 font-sans text-base text-white outline-none placeholder:text-white/30 focus:border-[#D6FF3D]"
                />
              </div>
              <button
                type="submit"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D6FF3D] px-7 py-4 font-display text-base font-medium text-black hover:scale-105 transition-transform"
              >
                Send message <span>↗</span>
              </button>
              {sent && (
                <p className="mt-4 font-display text-sm text-[#D6FF3D]">
                  Opening WhatsApp & your mail client — thank you.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-display text-xs uppercase tracking-[0.25em] text-white/50">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 font-sans text-base text-white outline-none placeholder:text-white/30 focus:border-[#D6FF3D]"
      />
    </div>
  );
}
