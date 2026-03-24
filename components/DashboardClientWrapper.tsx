"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Menu, X } from "lucide-react";

interface DashboardClientWrapperProps {
    children: React.ReactNode;
    userRole: string;
    userName: string;
    userEmail: string;
}

export default function DashboardClientWrapper({
    children,
    userRole,
    userName,
    userEmail,
}: DashboardClientWrapperProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden" style={{ background: "var(--color-bg)" }}>
            {/* Mobile Header */}
            <header className="lg:hidden fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 z-40 bg-[var(--color-surface-1)] border-b border-[var(--color-border)]">
                <div className="flex items-center gap-2">
                    <img 
                        src="/nissi_logo_W.png" 
                        alt="Logo" 
                        className="w-8 h-8 object-contain"
                    />
                    <span className="font-medium tracking-tight" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem" }}>NISSI</span>
                </div>
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-xl bg-[var(--color-surface-3)] text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface-4)]"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </header>

            {/* Sidebar with overlay on mobile */}
            <div className={`
                fixed inset-0 z-50 transition-all duration-300 lg:relative lg:translate-x-0 lg:z-auto flex
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                {/* Backdrop */}
                {isMobileMenuOpen && (
                    <div 
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity" 
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
                
                <Sidebar
                    userRole={userRole}
                    userName={userName}
                    userEmail={userEmail}
                    onCloseMobile={() => setIsMobileMenuOpen(false)}
                />
            </div>

            <main className="flex-1 overflow-y-auto mt-16 lg:mt-0 transition-all duration-300">
                <div className="min-h-full p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
