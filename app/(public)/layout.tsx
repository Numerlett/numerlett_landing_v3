import PageEffects from "@/components/PageEffects";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import MainNav from "@/components/sections/MainNav";
import SiteFooter from "@/components/sections/SiteFooter";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnnouncementBar />
      <MainNav />
      {children}
      <SiteFooter />
      <PageEffects />
    </>
  );
}
