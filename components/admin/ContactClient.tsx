"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  deleteContactForm,
  updateContactFormStatus,
} from "@/actions/contactForm";
import { ContactFormStatus } from "@/database/types";
import { cn } from "@/lib/utils";
import {
  CalendarIcon,
  MailIcon,
  MessageSquareIcon,
  PhoneIcon,
  TrashIcon,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactForm {
  id: string;
  email: string;
  name: string;
  mobile: string;
  message: string;
  status: ContactFormStatus;
  adminNotes: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const statusConfig: Record<
  ContactFormStatus,
  { label: string; className: string }
> = {
  PENDING: {
    label: "Pending",
    className: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  },
  IN_PROGRESS: {
    label: "In Progress",
    className: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  },
  RESOLVED: {
    label: "Resolved",
    className: "bg-green-500/10 text-green-700 dark:text-green-400",
  },
  CLOSED: {
    label: "Closed",
    className: "bg-muted text-muted-foreground",
  },
};

const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

export default function ContactClient({
  initialForms,
}: {
  initialForms: ContactForm[];
}) {
  const [forms, setForms] = useState<ContactForm[]>(initialForms);
  const [selected, setSelected] = useState<ContactForm | null>(null);
  const [adminNotes, setAdminNotes] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all" ? forms : forms.filter((f) => f.status === activeTab);

  const count = (status: string) =>
    status === "all"
      ? forms.length
      : forms.filter((f) => f.status === status).length;

  const handleStatusChange = async (
    id: string,
    newStatus: ContactFormStatus,
  ) => {
    const result = await updateContactFormStatus(
      id,
      newStatus,
      selected?.id === id ? adminNotes : undefined,
    );
    if (result.success && result.data) {
      setForms((prev) => prev.map((f) => (f.id === id ? result.data! : f)));
      if (selected?.id === id) setSelected(result.data);
      toast.success("Status updated");
    } else {
      toast.error(result.error ?? "Failed to update status");
    }
  };

  const handleSaveNotes = async () => {
    if (!selected) return;
    const result = await updateContactFormStatus(
      selected.id,
      selected.status,
      adminNotes,
    );
    if (result.success && result.data) {
      setForms((prev) =>
        prev.map((f) => (f.id === selected.id ? result.data! : f)),
      );
      setSelected(result.data);
      toast.success("Notes saved");
    } else {
      toast.error(result.error ?? "Failed to save notes");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this submission?")) return;
    const result = await deleteContactForm(id);
    if (result.success) {
      setForms((prev) => prev.filter((f) => f.id !== id));
      if (selected?.id === id) setSelected(null);
      toast.success("Submission deleted");
    } else {
      toast.error(result.error ?? "Failed to delete");
    }
  };

  const selectForm = (form: ContactForm) => {
    setSelected(form);
    setAdminNotes(form.adminNotes ?? "");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Contact Forms</h1>
        <p className="text-muted-foreground">
          Manage and respond to contact form submissions
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All ({count("all")})</TabsTrigger>
          <TabsTrigger value="PENDING">
            Pending ({count("PENDING")})
          </TabsTrigger>
          <TabsTrigger value="IN_PROGRESS">
            In Progress ({count("IN_PROGRESS")})
          </TabsTrigger>
          <TabsTrigger value="RESOLVED">
            Resolved ({count("RESOLVED")})
          </TabsTrigger>
          <TabsTrigger value="CLOSED">Closed ({count("CLOSED")})</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {filtered.length === 0 ? (
            <Card>
              <CardContent className="py-16 text-center">
                <MessageSquareIcon
                  className="text-muted-foreground mx-auto mb-3 size-10"
                  aria-hidden="true"
                />
                <p className="text-muted-foreground">
                  No submissions for this filter
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* List */}
              <div className="space-y-3">
                {filtered.map((form) => (
                  <Card
                    key={form.id}
                    className={cn(
                      "cursor-pointer transition-all",
                      selected?.id === form.id
                        ? "ring-primary ring-2"
                        : "hover:shadow-brand-md",
                    )}
                    onClick={() => selectForm(form)}
                  >
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-semibold">{form.name}</p>
                          <div className="text-muted-foreground mt-1 flex items-center gap-1.5 text-sm">
                            <MailIcon className="size-3" aria-hidden="true" />
                            {form.email}
                          </div>
                          <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
                            <PhoneIcon className="size-3" aria-hidden="true" />
                            {form.mobile}
                          </div>
                        </div>
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-xs font-medium",
                            statusConfig[form.status].className,
                          )}
                        >
                          {statusConfig[form.status].label}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2 line-clamp-2 text-sm">
                        {form.message}
                      </p>
                      <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                        <CalendarIcon className="size-3" aria-hidden="true" />
                        {formatDate(form.createdAt)}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Detail */}
              <div className="lg:sticky lg:top-6 lg:h-fit">
                {selected ? (
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Details</CardTitle>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(selected.id)}
                          aria-label="Delete submission"
                        >
                          <TrashIcon
                            className="text-destructive size-4"
                            aria-hidden="true"
                          />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Field label="Name">{selected.name}</Field>

                      <Field label="Email">
                        <a
                          href={`mailto:${selected.email}`}
                          className="text-primary hover:underline"
                        >
                          {selected.email}
                        </a>
                      </Field>

                      <Field label="Mobile">
                        <a
                          href={`tel:${selected.mobile}`}
                          className="text-primary hover:underline"
                        >
                          {selected.mobile}
                        </a>
                      </Field>

                      <Field label="Message">
                        <div className="bg-muted rounded-md p-3 text-sm whitespace-pre-wrap">
                          {selected.message}
                        </div>
                      </Field>

                      <Field label="Status">
                        <Select
                          value={selected.status}
                          onValueChange={(val) =>
                            handleStatusChange(
                              selected.id,
                              val as ContactFormStatus,
                            )
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="PENDING">Pending</SelectItem>
                            <SelectItem value="IN_PROGRESS">
                              In Progress
                            </SelectItem>
                            <SelectItem value="RESOLVED">Resolved</SelectItem>
                            <SelectItem value="CLOSED">Closed</SelectItem>
                          </SelectContent>
                        </Select>
                      </Field>

                      <Field label="Admin Notes">
                        <Textarea
                          value={adminNotes}
                          onChange={(e) => setAdminNotes(e.target.value)}
                          rows={4}
                          placeholder="Add internal notes…"
                        />
                        <Button
                          size="sm"
                          className="mt-2"
                          onClick={handleSaveNotes}
                        >
                          Save Notes
                        </Button>
                      </Field>

                      <Separator />

                      <div className="text-muted-foreground space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Submitted</span>
                          <span>{formatDate(selected.createdAt)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Last updated</span>
                          <span>{formatDate(selected.updatedAt)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="py-16 text-center">
                      <MessageSquareIcon
                        className="text-muted-foreground mx-auto mb-3 size-10"
                        aria-hidden="true"
                      />
                      <p className="text-muted-foreground text-sm">
                        Select a submission to view details
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <p className="text-muted-foreground text-sm font-medium">{label}</p>
      <div>{children}</div>
    </div>
  );
}
