"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Send, Loader2, Check } from "lucide-react";
import SectionHeader from "./SectionHeader";
import MagneticButton from "./MagneticButton";

const socials = [
    { label: "GitHub", href: "https://github.com/agungtri222" },
    { label: "LinkedIn", href: "https://linkedin.com/in/agungtrilaksono/" },
    { label: "WhatsApp · +62 878-5196-78989", href: "https://wa.me/6287851967898" },
    { label: "Surabaya, Indonesia", href: "https://maps.google.com/?q=Surabaya" },
];

function Field({ label, name, type = "text", as = "input", value, onChange }) {
    const Comp = as;
    return (
        <label className="group relative block">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
            <Comp
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                rows={as === "textarea" ? 4 : undefined}
                className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent pb-3 pt-1 text-lg outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
                placeholder=" "
            />
            <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-500 group-focus-within:w-full" />
        </label>
    );
}

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [state, setState] = useState("idle");

    const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    const submit = async (e) => {
        e.preventDefault();

        if (!form.email || !form.message) return;

        setState("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                throw new Error("Failed");
            }

            setState("done");

            setForm({
                name: "",
                email: "",
                message: "",
            });

            setTimeout(() => {
                setState("idle");
            }, 3000);

        } catch (error) {
            console.error(error);
            setState("idle");
        }
    };

    return (
        <section id="contact" className="relative py-32 md:py-40">
            <div className="container mx-auto px-4">
                <div className="grid gap-16 md:grid-cols-2 md:gap-24">
                    <div>
                        <SectionHeader
                            eyebrow="05 / Contact"
                            title={<><span>Let&apos;s build something </span><span className="italic text-muted-foreground">together.</span></>}
                            description="Open to full-time roles, contract work, and ambitious side projects. Tell me a bit about what you're working on — a paragraph is enough to start the conversation."
                        />
                        <div className="flex flex-col gap-3">
                            <a href="mailto:agungtrilaksono123@gmail.com" data-cursor="hover" className="group flex items-center justify-between border-t border-border py-5 text-xl font-serif tracking-tight transition-colors hover:text-muted-foreground sm:text-2xl">
                                agungtrilaksono123@gmail.com
                                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                            </a>
                            {socials.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" data-cursor="hover" className="group flex items-center justify-between border-t border-border py-4 text-base transition-colors hover:text-muted-foreground last:border-b">
                                    {s.label}
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <motion.form
                        onSubmit={submit}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8"
                    >
                        <Field label="Your name" name="name" value={form.name} onChange={onChange} />
                        <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} />
                        <Field label="Tell me about your project" name="message" as="textarea" value={form.message} onChange={onChange} />

                        <MagneticButton
                            as="button"
                            type="submit"
                            data-cursor="hover"
                            disabled={state === "loading"}
                            className="group mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] disabled:opacity-70"
                        >
                            {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
                            {state === "done" && <Check className="h-4 w-4" />}
                            {state === "idle" && <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
                            <span>
                                {state === "loading" ? "Sending…" : state === "done" ? "Message sent" : "Send message"}
                            </span>
                        </MagneticButton>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
