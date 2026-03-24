import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "NISSI",
    description: "Sistema Profesional de Gestion Documental",
    icons: {
        icon: "/nissi_logo_W.png",
    },
    openGraph: {
        title: "NISSI",
        description: "Sistema Profesional de Gestion Documental",
        images: [
            {
                url: "/nissi_completo_W.png",
                width: 1200,
                height: 630,
                alt: "NISSI Logo",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "NISSI",
        description: "Sistema Profesional de Gestion Documental",
        images: ["/nissi_completo_W.png"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            try {
                                var theme = localStorage.getItem('theme');
                                if (theme === 'dark') {
                                    document.documentElement.classList.add('dark');
                                } else if (theme === 'light') {
                                    document.documentElement.classList.remove('dark');
                                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                                    document.documentElement.classList.add('dark');
                                }
                            } catch (_) {}
                        `,
                    }}
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
