import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ChatbotAvatar from '../assets/images/ChatbotAvatar.svg';

/** Chat message type */
type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

/** API response type */
type ChatResponse = {
  reply: string
}

export default function Chatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { role: "user", content: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await axios.post<ChatResponse>("/api/chat", { message: input });
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: res.data.reply }
      ]);
    } catch (e) {
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: "Sorry, something went wrong." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !loading) {
      sendMessage();
    }
  };

  return (
    <div
      style={{
        width: 360,
        background: '#f4f6fb',
        border: '1px solid #e0e7ef',
        borderRadius: 18,
        boxShadow: '0 6px 32px rgba(0,0,0,0.10)',
        fontSize: 15,
        display: 'flex',
        flexDirection: 'column',
        height: 520,
        maxHeight: '92vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)',
          color: '#fff',
          padding: '18px 0 14px 0',
          textAlign: 'center',
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: 0.5,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          boxShadow: '0 2px 8px rgba(37,99,235,0.08)',
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: 8 }}>
          <img src={ChatbotAvatar} alt="Chatbot Avatar" style={{ width: 28, height: 28, marginRight: 6, verticalAlign: 'middle' }} />
        </span>
        Kendo Federation Assistant
      </div>
      <div style={{ flex: 1, background: '#f9fafb', overflow: 'auto', padding: 0 }}>
        <div style={{ padding: 16, minHeight: 320 }}>
          {messages.length === 0 && (
            <div style={{ color: '#888', textAlign: 'center', marginTop: 32 }}>
              Ask me anything about Kendo Federation!
            </div>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  background: msg.role === 'user' ? '#2563eb' : '#e5e7eb',
                  color: msg.role === 'user' ? '#fff' : '#222',
                  borderRadius: 16,
                  padding: '10px 16px',
                  maxWidth: '80%',
                  fontSize: 15,
                  boxShadow: msg.role === 'user' ? '0 2px 8px #2563eb22' : '0 2px 8px #e5e7eb22',
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div
        style={{
          background: '#fff',
          borderTop: '1px solid #e0e7ef',
          padding: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          style={{
            flex: 1,
            border: '1px solid #e0e7ef',
            borderRadius: 14,
            padding: '10px 14px',
            fontSize: 15,
            outline: 'none',
            background: '#f3f4f6',
          }}
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          style={{
            background: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: 14,
            padding: '10px 18px',
            fontWeight: 600,
            fontSize: 15,
            cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
            opacity: loading || !input.trim() ? 0.7 : 1,
            transition: 'opacity 0.2s',
          }}
        >
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
}
