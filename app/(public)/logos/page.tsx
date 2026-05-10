import Logo from "@/components/Logo";

export default function LogosPage() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center gap-5">
      <div className="light border-border rounded-md border p-4">
        <Logo theme="light" />
      </div>
      <div className="border-border rounded-md border bg-black p-4">
        <Logo theme="dark" />
      </div>
    </div>
  );
}
