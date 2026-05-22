import * as React from 'react'
import { Components } from 'react-markdown'

export const markdownComponents: Components = {
  p: ({ children }) => <p className="mb-3">{children}</p>,
  h1: ({ children }) => <h1 className="text-2xl font-bold mt-2 mb-2">{children}</h1>,
  h2: ({ children }) => <h2 className="text-xl font-bold mt-2 mb-2">{children}</h2>,
  h3: ({ children }) => <h3 className="text-lg font-bold mt-2 mb-2">{children}</h3>,
  h4: ({ children }) => <h4 className="text-base font-bold mt-2 mb-2">{children}</h4>,
  h5: ({ children }) => <h5 className="text-sm font-bold mt-2 mb-2">{children}</h5>,
  h6: ({ children }) => <h6 className="text-xs font-bold mt-2 mb-2">{children}</h6>,
  ul: ({ children }) => <ul className="list-disc pl-5 mb-3">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-5 mb-3">{children}</ol>,
  li: ({ children }) => <li className="mb-0.5">{children}</li>,
  a: ({ href, children }) => <a href={href} className="text-[#47619e] hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>,
  hr: () => <hr className="my-4 border-gray-300" />,
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  code: ({ children }) => <code className="bg-gray-100 px-1 rounded text-xs font-mono">{children}</code>,
  blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 text-gray-500 my-3">{children}</blockquote>,
}

export function preprocessMarkdown(content: string): string {
  return content
    .replace(/\r\n/g, '\n')
    .replace(/([^\n])\n([^\n])/g, '$1  \n$2')
}
