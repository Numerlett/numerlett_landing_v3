"use client";

import {
  useEditor,
  EditorContent,
  type Editor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ImageExt from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import CharacterCount from "@tiptap/extension-character-count";
import Highlight from "@tiptap/extension-highlight";
import Color from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Youtube from "@tiptap/extension-youtube";
import Typography from "@tiptap/extension-typography";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Focus from "@tiptap/extension-focus";
import { common, createLowlight } from "lowlight";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  ListIcon,
  ListOrderedIcon,
  ListChecksIcon,
  QuoteIcon,
  CodeIcon,
  Code2Icon,
  MinusIcon,
  LinkIcon,
  ImageIcon,
  Loader2Icon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  AlignJustifyIcon,
  Undo2Icon,
  Redo2Icon,
  SubscriptIcon,
  SuperscriptIcon,
  HighlighterIcon,
  PaletteIcon,
  TableIcon,
  SquarePlayIcon,
  PlusIcon,
  Trash2Icon,
  UploadIcon,
  XIcon,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";

// ─── Lowlight ────────────────────────────────────────────────────────────────
const lowlight = createLowlight(common);

// ─── Animation variants ───────────────────────────────────────────────────────
const editorAppear: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// ─── Color palettes ──────────────────────────────────────────────────────────
const TEXT_COLORS = [
  { label: "Default", value: "" },
  { label: "Slate", value: "#64748b" },
  { label: "Gray", value: "#6b7280" },
  { label: "Red", value: "#ef4444" },
  { label: "Orange", value: "#f97316" },
  { label: "Amber", value: "#f59e0b" },
  { label: "Yellow", value: "#eab308" },
  { label: "Green", value: "#22c55e" },
  { label: "Teal", value: "#14b8a6" },
  { label: "Cyan", value: "#06b6d4" },
  { label: "Blue", value: "#3b82f6" },
  { label: "Indigo", value: "#6366f1" },
  { label: "Purple", value: "#a855f7" },
  { label: "Pink", value: "#ec4899" },
  { label: "Rose", value: "#f43f5e" },
  { label: "Brand", value: "#33af91" },
];

const HIGHLIGHT_COLORS = [
  { label: "Remove", value: "" },
  { label: "Yellow", value: "#fef08a" },
  { label: "Green", value: "#bbf7d0" },
  { label: "Blue", value: "#bfdbfe" },
  { label: "Pink", value: "#fce7f3" },
  { label: "Orange", value: "#fed7aa" },
  { label: "Purple", value: "#e9d5ff" },
  { label: "Red", value: "#fecaca" },
  { label: "Teal", value: "#99f6e4" },
];

// ─── Shared ToolbarButton ─────────────────────────────────────────────────────
interface ToolbarButtonProps {
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
  label: string;
  className?: string;
  children: React.ReactNode;
}

function ToolbarButton({
  onClick,
  isActive,
  disabled,
  label,
  className,
  children,
}: ToolbarButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onClick}
          disabled={disabled}
          aria-label={label}
          aria-pressed={isActive}
          className={cn(
            "size-7 shrink-0",
            isActive && "bg-accent text-accent-foreground",
            className,
          )}
        >
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="text-xs">
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

// ─── Color picker popover ─────────────────────────────────────────────────────
function ColorPicker({
  colors,
  activeColor,
  onSelect,
  label,
  children,
}: {
  colors: { label: string; value: string }[];
  activeColor: string;
  onSelect: (color: string) => void;
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={label}
              className={cn(
                "size-7 shrink-0",
                activeColor && "bg-accent text-accent-foreground",
              )}
            >
              {children}
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-xs">
          {label}
        </TooltipContent>
      </Tooltip>
      <PopoverContent className="w-auto p-2" align="start">
        <div className="grid grid-cols-4 gap-1">
          {colors.map((c) => (
            <button
              key={c.value || "remove"}
              type="button"
              onClick={() => {
                onSelect(c.value);
                setOpen(false);
              }}
              aria-label={c.label}
              className={cn(
                "size-6 rounded-brand-sm border transition-transform hover:scale-110",
                !c.value && "flex items-center justify-center",
                activeColor === c.value && "ring-primary ring-2 ring-offset-1",
              )}
              style={c.value ? { backgroundColor: c.value } : undefined}
            >
              {!c.value && <XIcon className="size-3" aria-hidden="true" />}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

// ─── Image popover (upload + URL) ─────────────────────────────────────────────
function ImagePopover({
  editor,
  folder,
}: {
  editor: Editor;
  folder: string;
}) {
  const [open, setOpen] = useState(false);
  const [urlValue, setUrlValue] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const insertFromUrl = () => {
    if (!urlValue.trim()) return;
    editor.chain().focus().setImage({ src: urlValue.trim() }).run();
    setUrlValue("");
    setOpen(false);
  };

  const handleUpload = useCallback(
    async (file: File) => {
      setIsUploading(true);
      try {
        const fd = new FormData();
        fd.append("file", file);
        fd.append("folder", folder);
        const res = await fetch("/api/upload", { method: "POST", body: fd });
        const json = (await res.json()) as { url?: string; error?: string };
        if (!res.ok) throw new Error(json.error ?? "Upload failed");
        editor.chain().focus().setImage({ src: json.url! }).run();
        toast.success("Image inserted");
        setOpen(false);
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Upload failed");
      } finally {
        setIsUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    },
    [editor, folder],
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Insert image"
              className="size-7 shrink-0"
            >
              <ImageIcon className="size-3.5" aria-hidden="true" />
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-xs">
          Insert image
        </TooltipContent>
      </Tooltip>

      <PopoverContent className="w-72 p-3" align="start">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="sr-only"
          tabIndex={-1}
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleUpload(f);
          }}
        />
        <Tabs defaultValue="upload">
          <TabsList className="mb-3 w-full">
            <TabsTrigger value="upload" className="flex-1">
              Upload
            </TabsTrigger>
            <TabsTrigger value="url" className="flex-1">
              From URL
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="mt-0">
            <Button
              type="button"
              variant="outline"
              className="w-full gap-2"
              disabled={isUploading}
              onClick={() => fileInputRef.current?.click()}
            >
              {isUploading ? (
                <Loader2Icon className="size-4 animate-spin" aria-hidden="true" />
              ) : (
                <UploadIcon className="size-4" aria-hidden="true" />
              )}
              {isUploading ? "Uploading…" : "Choose image file"}
            </Button>
            <p className="text-muted-foreground mt-1.5 text-center text-xs">
              JPEG, PNG, GIF, WebP · max 10 MB
            </p>
          </TabsContent>

          <TabsContent value="url" className="mt-0 space-y-2">
            <Input
              type="url"
              placeholder="https://…"
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && insertFromUrl()}
              autoFocus
            />
            <Button
              type="button"
              className="w-full"
              disabled={!urlValue.trim()}
              onClick={insertFromUrl}
            >
              Insert image
            </Button>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
}

// ─── YouTube popover ──────────────────────────────────────────────────────────
function YoutubePopover({ editor }: { editor: Editor }) {
  const [open, setOpen] = useState(false);
  const [urlValue, setUrlValue] = useState("");

  const insert = () => {
    if (!urlValue.trim()) return;
    editor.commands.setYoutubeVideo({ src: urlValue.trim() });
    setUrlValue("");
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Embed YouTube video"
              className="size-7 shrink-0"
            >
              <SquarePlayIcon className="size-3.5" aria-hidden="true" />
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-xs">
          Embed YouTube video
        </TooltipContent>
      </Tooltip>

      <PopoverContent className="w-72 space-y-2 p-3" align="start">
        <p className="text-sm font-medium">YouTube URL</p>
        <Input
          type="url"
          placeholder="https://youtube.com/watch?v=…"
          value={urlValue}
          onChange={(e) => setUrlValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && insert()}
          autoFocus
        />
        <Button
          type="button"
          className="w-full"
          disabled={!urlValue.trim()}
          onClick={insert}
        >
          Embed video
        </Button>
      </PopoverContent>
    </Popover>
  );
}

// ─── Table controls (shown when cursor is inside a table) ─────────────────────
function TableControls({ editor }: { editor: Editor }) {
  if (!editor.isActive("table")) return null;
  return (
    <div className="border-border bg-muted/60 flex flex-wrap items-center gap-0.5 border-b px-2 py-1">
      <span className="text-muted-foreground mr-1 text-xs font-medium">
        Table:
      </span>
      <ToolbarButton
        label="Add row above"
        onClick={() => editor.chain().focus().addRowBefore().run()}
      >
        <PlusIcon className="size-3" aria-hidden="true" />
      </ToolbarButton>
      <ToolbarButton
        label="Add row below"
        onClick={() => editor.chain().focus().addRowAfter().run()}
      >
        <PlusIcon className="size-3 rotate-90" aria-hidden="true" />
      </ToolbarButton>
      <ToolbarButton
        label="Add column left"
        onClick={() => editor.chain().focus().addColumnBefore().run()}
      >
        <PlusIcon className="size-3 -rotate-90" aria-hidden="true" />
      </ToolbarButton>
      <ToolbarButton
        label="Add column right"
        onClick={() => editor.chain().focus().addColumnAfter().run()}
      >
        <PlusIcon className="size-3 rotate-180" aria-hidden="true" />
      </ToolbarButton>
      <Separator orientation="vertical" className="mx-1 h-4" />
      <ToolbarButton
        label="Delete row"
        onClick={() => editor.chain().focus().deleteRow().run()}
      >
        <Trash2Icon className="size-3" aria-hidden="true" />
      </ToolbarButton>
      <ToolbarButton
        label="Delete column"
        onClick={() => editor.chain().focus().deleteColumn().run()}
      >
        <Trash2Icon className="size-3 rotate-90" aria-hidden="true" />
      </ToolbarButton>
      <ToolbarButton
        label="Delete table"
        onClick={() => editor.chain().focus().deleteTable().run()}
        className="text-destructive hover:text-destructive"
      >
        <Trash2Icon className="size-3" aria-hidden="true" />
      </ToolbarButton>
    </div>
  );
}

// ─── Main toolbar ─────────────────────────────────────────────────────────────
function EditorToolbar({
  editor,
  folder,
}: {
  editor: Editor;
  folder: string;
}) {
  const setLink = useCallback(() => {
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("URL", prev ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const activeTextColor =
    (editor.getAttributes("textStyle").color as string | undefined) ?? "";
  const activeHighlight =
    (editor.getAttributes("highlight").color as string | undefined) ?? "";

  return (
    <TooltipProvider delayDuration={400}>
      <div className="border-border bg-muted/40 flex flex-wrap items-center gap-0.5 rounded-t-brand-md border-b px-2 py-1.5">
        {/* History */}
        <ToolbarButton
          label="Undo"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          <Undo2Icon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Redo"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          <Redo2Icon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>

        <Separator orientation="vertical" className="mx-1 h-5" />

        {/* Text formatting */}
        <ToolbarButton
          label="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
        >
          <BoldIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
        >
          <ItalicIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive("underline")}
        >
          <UnderlineIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Strikethrough"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive("strike")}
        >
          <StrikethroughIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Subscript"
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          isActive={editor.isActive("subscript")}
        >
          <SubscriptIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Superscript"
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          isActive={editor.isActive("superscript")}
        >
          <SuperscriptIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>

        <Separator orientation="vertical" className="mx-1 h-5" />

        {/* Headings */}
        <ToolbarButton
          label="Heading 1"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          isActive={editor.isActive("heading", { level: 1 })}
        >
          <Heading1Icon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Heading 2"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          isActive={editor.isActive("heading", { level: 2 })}
        >
          <Heading2Icon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Heading 3"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          isActive={editor.isActive("heading", { level: 3 })}
        >
          <Heading3Icon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>

        <Separator orientation="vertical" className="mx-1 h-5" />

        {/* Color pickers */}
        <ColorPicker
          colors={TEXT_COLORS}
          activeColor={activeTextColor}
          label="Text color"
          onSelect={(color) =>
            color
              ? editor.chain().focus().setColor(color).run()
              : editor.chain().focus().unsetColor().run()
          }
        >
          <PaletteIcon className="size-3.5" aria-hidden="true" />
        </ColorPicker>
        <ColorPicker
          colors={HIGHLIGHT_COLORS}
          activeColor={activeHighlight}
          label="Highlight"
          onSelect={(color) =>
            color
              ? editor
                  .chain()
                  .focus()
                  .setHighlight({ color })
                  .run()
              : editor.chain().focus().unsetHighlight().run()
          }
        >
          <HighlighterIcon className="size-3.5" aria-hidden="true" />
        </ColorPicker>

        <Separator orientation="vertical" className="mx-1 h-5" />

        {/* Alignment */}
        <ToolbarButton
          label="Align left"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          isActive={editor.isActive({ textAlign: "left" })}
        >
          <AlignLeftIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Align center"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          isActive={editor.isActive({ textAlign: "center" })}
        >
          <AlignCenterIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Align right"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          isActive={editor.isActive({ textAlign: "right" })}
        >
          <AlignRightIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Justify"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          isActive={editor.isActive({ textAlign: "justify" })}
        >
          <AlignJustifyIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>

        <Separator orientation="vertical" className="mx-1 h-5" />

        {/* Lists */}
        <ToolbarButton
          label="Bullet list"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
        >
          <ListIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Ordered list"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
        >
          <ListOrderedIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Task list"
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          isActive={editor.isActive("taskList")}
        >
          <ListChecksIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>

        <Separator orientation="vertical" className="mx-1 h-5" />

        {/* Blocks */}
        <ToolbarButton
          label="Blockquote"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
        >
          <QuoteIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Inline code"
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive("code")}
        >
          <CodeIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Code block"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive("codeBlock")}
        >
          <Code2Icon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
        <ToolbarButton
          label="Horizontal rule"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <MinusIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>

        <Separator orientation="vertical" className="mx-1 h-5" />

        {/* Table insert */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Insert table"
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                  .run()
              }
              className={cn(
                "size-7 shrink-0",
                editor.isActive("table") && "bg-accent text-accent-foreground",
              )}
            >
              <TableIcon className="size-3.5" aria-hidden="true" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="text-xs">
            Insert table (3×3)
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="mx-1 h-5" />

        {/* Insert: image, youtube, link */}
        <ImagePopover editor={editor} folder={folder} />
        <YoutubePopover editor={editor} />
        <ToolbarButton
          label={editor.isActive("link") ? "Edit link" : "Add link"}
          onClick={setLink}
          isActive={editor.isActive("link")}
        >
          <LinkIcon className="size-3.5" aria-hidden="true" />
        </ToolbarButton>
      </div>

      {/* Contextual table controls row */}
      <TableControls editor={editor} />
    </TooltipProvider>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  /** Vercel Blob folder for inline image uploads */
  folder?: string;
  className?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Start writing…",
  folder = "articles/content",
  className,
}: RichTextEditorProps) {
  const shouldReduceMotion = useReducedMotion();

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      Underline,
      ImageExt.configure({ inline: false, allowBase64: false }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { rel: "noopener noreferrer" },
      }),
      Placeholder.configure({ placeholder }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      CharacterCount,
      Highlight.configure({ multicolor: true }),
      Color,
      TextStyle,
      Subscript,
      Superscript,
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
      TaskList,
      TaskItem.configure({ nested: true }),
      Youtube.configure({ controls: true, nocookie: true }),
      Typography,
      CodeBlockLowlight.configure({ lowlight }),
      Focus.configure({ className: "has-focus", mode: "deepest" }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose-editor focus:outline-none min-h-[400px] px-5 py-4",
      },
    },
  });

  if (!editor) return null;

  const wordCount = editor.storage.characterCount.words() as number;
  const charCount = editor.storage.characterCount.characters() as number;

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : editorAppear}
      initial="hidden"
      animate="visible"
      className={cn(
        "border-border rounded-brand-md overflow-hidden border",
        className,
      )}
    >
      <EditorToolbar editor={editor} folder={folder} />

      <div className="bg-background">
        <EditorContent editor={editor} />
      </div>

      <div className="border-border bg-muted/30 text-muted-foreground flex items-center justify-end gap-4 border-t px-4 py-1.5 text-xs">
        <span>
          {wordCount} {wordCount === 1 ? "word" : "words"}
        </span>
        <span>
          {charCount} {charCount === 1 ? "character" : "characters"}
        </span>
      </div>
    </motion.div>
  );
}
