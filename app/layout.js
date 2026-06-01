import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
    title: "Agung Trilaksono — Full-Stack Software Engineer",
    description: "Agung Trilaksono is a full-stack software engineer based in Surabaya, Indonesia. 9+ years building production web applications in Laravel, Node.js, React, Vue and TypeScript across fintech, edtech and e-commerce.",
    keywords: ["Agung Trilaksono", "full-stack engineer", "software engineer", "Laravel developer", "React developer", "Node.js", "Vue.js", "Surabaya", "Indonesia", "portfolio"],
    authors: [{ name: "Agung Trilaksono" }],
    openGraph: {
        title: "Agung Trilaksono — Full-Stack Software Engineer",
        description: "9+ years building production web apps in Laravel, React, Node.js and Vue.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Agung Trilaksono — Full-Stack Software Engineer",
        description: "9+ years building production web apps in Laravel, React, Node.js and Vue.",
    },
};

export const viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
