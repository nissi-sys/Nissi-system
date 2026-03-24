import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardClientWrapper from "@/components/DashboardClientWrapper";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();
    if (!session?.user) redirect("/login");

    return (
        <DashboardClientWrapper
            userRole={session.user.role}
            userName={session.user.name ?? ""}
            userEmail={session.user.email ?? ""}
        >
            {children}
        </DashboardClientWrapper>
    );
}
