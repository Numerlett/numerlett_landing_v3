import AdminShell from "@/components/admin/AdminShell";
import AdminUnlockScreen from "@/components/admin/AdminUnlockScreen";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.isAdmin) {
    return <AdminUnlockScreen />;
  }

  return <AdminShell>{children}</AdminShell>;
}
