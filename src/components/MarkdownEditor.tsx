import * as React from 'react'
import { useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { markdownComponents, preprocessMarkdown } from './markdownConfig'

interface Props {
  value: string
  onChange: (value: string) => void
  rows?: number
}

function wrapSelection(
  textarea: HTMLTextAreaElement,
  value: string,
  onChange: (v: string) => void,
  before: string,
  after: string,
  placeholder = 'text'
) {
  const start = textarea.selectionStart
  const end = textarea.selectionEnd
  const selected = value.slice(start, end) || placeholder
  const newValue = value.slice(0, start) + before + selected + after + value.slice(end)
  onChange(newValue)
  setTimeout(() => {
    textarea.focus()
    textarea.setSelectionRange(start + before.length, start + before.length + selected.length)
  }, 0)
}

function prependLine(
  textarea: HTMLTextAreaElement,
  value: string,
  onChange: (v: string) => void,
  prefix: string
) {
  const start = textarea.selectionStart
  const lineStart = value.lastIndexOf('\n', start - 1) + 1
  const newValue = value.slice(0, lineStart) + prefix + value.slice(lineStart)
  onChange(newValue)
  setTimeout(() => {
    textarea.focus()
    textarea.setSelectionRange(start + prefix.length, start + prefix.length)
  }, 0)
}

function insertAtCursor(
  textarea: HTMLTextAreaElement,
  value: string,
  onChange: (v: string) => void,
  text: string
) {
  const start = textarea.selectionStart
  const newValue = value.slice(0, start) + text + value.slice(start)
  onChange(newValue)
  setTimeout(() => {
    textarea.focus()
    textarea.setSelectionRange(start + text.length, start + text.length)
  }, 0)
}

export const MarkdownEditor: React.FC<Props> = ({ value, onChange, rows = 24 }) => {
  const ref = useRef<HTMLTextAreaElement>(null)
  const minHeight = `${rows * 1.5}rem`

  const toolbar = [
    { label: 'B', title: 'Bold', fn: () => ref.current && wrapSelection(ref.current, value, onChange, '**', '**') },
    { label: 'I', title: 'Italic', fn: () => ref.current && wrapSelection(ref.current, value, onChange, '_', '_') },
    { label: 'S', title: 'Strikethrough', fn: () => ref.current && wrapSelection(ref.current, value, onChange, '~~', '~~') },
    { label: '|', title: 'Divider', fn: () => {}, divider: true },
    { label: 'H1', title: 'Heading 1', fn: () => ref.current && prependLine(ref.current, value, onChange, '# ') },
    { label: 'H2', title: 'Heading 2', fn: () => ref.current && prependLine(ref.current, value, onChange, '## ') },
    { label: 'H3', title: 'Heading 3', fn: () => ref.current && prependLine(ref.current, value, onChange, '### ') },
    { label: '|', title: 'Divider', fn: () => {}, divider: true },
    { label: '• List', title: 'Unordered list', fn: () => ref.current && prependLine(ref.current, value, onChange, '- ') },
    { label: '1. List', title: 'Ordered list', fn: () => ref.current && prependLine(ref.current, value, onChange, '1. ') },
    { label: 'Quote', title: 'Blockquote', fn: () => ref.current && prependLine(ref.current, value, onChange, '> ') },
    { label: '|', title: 'Divider', fn: () => {}, divider: true },
    { label: 'Link', title: 'Link', fn: () => ref.current && wrapSelection(ref.current, value, onChange, '[', '](url)', 'link text') },
    { label: 'Code', title: 'Inline code', fn: () => ref.current && wrapSelection(ref.current, value, onChange, '`', '`') },
    { label: '---', title: 'Horizontal rule', fn: () => ref.current && insertAtCursor(ref.current, value, onChange, '\n---\n') },
  ]

  const preview = preprocessMarkdown(value)

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center flex-wrap gap-0.5 px-2 py-1.5 bg-gray-50 border-b border-gray-300">
        {toolbar.map((item, i) =>
          item.divider ? (
            <span key={i} className="w-px h-4 bg-gray-300 mx-1" />
          ) : (
            <button
              key={i}
              type="button"
              title={item.title}
              onMouseDown={(e) => { e.preventDefault(); item.fn() }}
              className="px-2 py-1 text-xs font-medium rounded text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {item.label}
            </button>
          )
        )}
      </div>

      {/* Editor | Preview */}
      <div className="grid grid-cols-2 divide-x divide-gray-200">
        <div className="flex flex-col">
          <div className="px-3 py-1 text-xs text-gray-400 bg-gray-50 border-b border-gray-200">Markdown</div>
          <textarea
            ref={ref}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{ minHeight }}
            className="flex-1 px-3 py-2 text-sm font-mono resize-y focus:outline-none"
            placeholder="Write markdown here..."
            spellCheck={false}
          />
        </div>

        <div className="flex flex-col">
          <div className="px-3 py-1 text-xs text-gray-400 bg-gray-50 border-b border-gray-200">Preview</div>
          <div className="px-4 py-2 text-sm overflow-auto" style={{ minHeight }}>
            {preview ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={markdownComponents}
              >
                {preview}
              </ReactMarkdown>
            ) : (
              <span className="text-gray-300 text-sm">Nothing to preview</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
