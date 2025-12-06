import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      setLoading(false);

      if (data.result) {
        setMessages([...newMessages, { role: 'assistant', content: data.result }]);
      } else if (data.error) {
        setMessages([...newMessages, { role: 'assistant', content: `Error: ${data.error}` }]);
      }
    } catch (error) {
      setLoading(false);
      setMessages([...newMessages, { role: 'assistant', content: 'Network error, try again!' }]);
    }
  };

  return (
    <>
      {/* Floating Button with Pulse Animation */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '39px',
          right: '20px',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 15px 40px rgba(99, 102, 241, 0.5)',
          zIndex: 9999,
          transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
          transform: isOpen ? 'scale(0.95) rotate(90deg)' : 'scale(1)',
          animation: isOpen ? 'none' : 'pulse 2s infinite',
        }}
        onMouseEnter={(e) => {
          if (!isOpen) e.currentTarget.style.transform = 'scale(1.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = isOpen ? 'scale(0.95) rotate(90deg)' : 'scale(1)';
        }}
      >
        {isOpen ? (
          <X size={30} color="white" strokeWidth={2.5} />
        ) : (
          <MessageCircle size={30} color="white" strokeWidth={2.5} />
        )}
        
        {/* Notification Badge */}
        {!isOpen && (
          <div style={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            width: '20px',
            height: '20px',
            background: '#ef4444',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            fontWeight: 'bold',
            color: 'white',
            border: '2px solid white',
            animation: 'bounce 1s infinite',
          }}>
            1
          </div>
        )}
      </div>

      {/* Chat Window - Modern Design */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '380px',
          height: isOpen ? '520px' : '0px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
          borderRadius: '24px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(99, 102, 241, 0.1)',
          overflow: 'hidden',
          transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
          pointerEvents: isOpen ? 'all' : 'none',
          zIndex: 10000,
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(99, 102, 241, 0.2)',
        }}
      >
        {/* Header with Gradient */}
        <div
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
            color: 'white',
            padding: '15px',
            fontWeight: 'bold',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Animated Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            animation: 'float 3s ease-in-out infinite',
          }}></div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 1 }}>
            <div style={{
              width: '42px',
              height: '42px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
            }}>
              <Bot size={22} strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ fontSize: '19px', fontWeight: '800', letterSpacing: '0.5px' }}>
                Mohit Bot
              </div>
              <div style={{ 
                fontSize: '13px', 
                opacity: 0.95, 
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#4ade80',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite',
                }}></div>
                Online Now
              </div>
            </div>
          </div>
          
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1,
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'rotate(90deg) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
            }}
          >
            <X size={20} color="white" strokeWidth={2.5} />
          </button>
        </div>

        {/* Messages Area with Better Styling */}
        <div
          style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            background: 'linear-gradient(135deg, #fafbff 0%, #f0f4ff 100%)',
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(168, 85, 247, 0.03) 0%, transparent 50%)
            `,
          }}
        >
          {messages.length === 0 && isOpen && (
            <div style={{ 
              textAlign: 'center', 
              color: '#6b7280', 
              marginTop: '60px',
              animation: 'slideUp 0.6s ease',
            }}>
              <div style={{
                width: '90px',
                height: '90px',
                margin: '0 auto 20px',
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
              }}>
                <MessageCircle size={45} color="white" />
              </div>
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: '700', 
                marginBottom: '10px',
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Hi! Mohit here your tech assistant. How can I help you? 😄
              </h3>
              <p style={{ fontSize: '14px', color: '#9ca3af' }}>
                Start a conversation with me!
              </p>
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                margin: '14px 0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                flexDirection: m.role === 'user' ? 'row-reverse' : 'row',
                animation: 'messageSlide 0.4s ease',
              }}
            >
              {/* Avatar */}
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: m.role === 'user' 
                  ? 'linear-gradient(135deg, #6366f1, #a855f7)' 
                  : 'linear-gradient(135deg, #ec4899, #f59e0b)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
              }}>
                {m.role === 'user' ? (
                  <User size={19} color="white" strokeWidth={2.5} />
                ) : (
                  <Bot size={19} color="white" strokeWidth={2.5} />
                )}
              </div>

              {/* Message Bubble */}
              <div
                style={{
                  maxWidth: '75%',
                  padding: '13px 17px',
                  borderRadius: m.role === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                  background: m.role === 'user' 
                    ? 'linear-gradient(135deg, #6366f1, #a855f7)' 
                    : 'white',
                  color: m.role === 'user' ? 'white' : '#1f2937',
                  boxShadow: m.role === 'user' 
                    ? '0 8px 20px rgba(99, 102, 241, 0.3)' 
                    : '0 4px 12px rgba(0, 0, 0, 0.08)',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  fontWeight: '500',
                  border: m.role === 'user' ? 'none' : '1px solid rgba(99, 102, 241, 0.1)',
                }}
              >
                {m.content}
              </div>
            </div>
          ))}
          
          {loading && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '10px',
              animation: 'messageSlide 0.4s ease',
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ec4899, #f59e0b)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)',
              }}>
                <Bot size={19} color="white" strokeWidth={2.5} />
              </div>
              
              <div
                style={{
                  background: 'white',
                  padding: '15px 18px',
                  borderRadius: '20px 20px 20px 4px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(99, 102, 241, 0.1)',
                }}
              >
                <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                  <div className="dot" style={{ 
                    width: 9, 
                    height: 9, 
                    background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
                    borderRadius: '50%', 
                    animation: 'bounce 1.4s infinite' 
                  }}></div>
                  <div className="dot" style={{ 
                    width: 9, 
                    height: 9, 
                    background: 'linear-gradient(135deg, #a855f7, #ec4899)', 
                    borderRadius: '50%', 
                    animation: 'bounce 1.4s infinite 0.2s' 
                  }}></div>
                  <div className="dot" style={{ 
                    width: 9, 
                    height: 9, 
                    background: 'linear-gradient(135deg, #ec4899, #f59e0b)', 
                    borderRadius: '50%', 
                    animation: 'bounce 1.4s infinite 0.4s' 
                  }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Enhanced Input Area */}
        <div style={{ 
          padding: '18px 20px', 
          background: 'white',
          borderTop: '1px solid rgba(99, 102, 241, 0.1)',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.05)',
        }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: '13px 18px',
                borderRadius: '30px',
                border: '2px solid #e5e7eb',
                outline: 'none',
                fontSize: '15px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                background: '#f9fafb',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#6366f1';
                e.target.style.background = 'white';
                e.target.style.boxShadow = '0 0 0 4px rgba(99, 102, 241, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e7eb';
                e.target.style.background = '#f9fafb';
                e.target.style.boxShadow = 'none';
              }}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: loading || !input.trim() 
                  ? '#e5e7eb' 
                  : 'linear-gradient(135deg, #6366f1, #a855f7)',
                color: 'white',
                border: 'none',
                cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: loading || !input.trim() 
                  ? 'none' 
                  : '0 8px 20px rgba(99, 102, 241, 0.4)',
              }}
              onMouseEnter={(e) => {
                if (!loading && input.trim()) {
                  e.currentTarget.style.transform = 'scale(1.1) rotate(15deg)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <Send size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 1; }
          40% { transform: translateY(-10px); opacity: 0.8; }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            box-shadow: 0 15px 40px rgba(99, 102, 241, 0.5);
          }
          50% { 
            transform: scale(1.05); 
            box-shadow: 0 20px 50px rgba(99, 102, 241, 0.7);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(10px); }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes messageSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Scrollbar Styling */
        div::-webkit-scrollbar {
          width: 6px;
        }
        
        div::-webkit-scrollbar-track {
          background: transparent;
        }
        
        div::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          border-radius: 10px;
        }
        
        div::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #4f46e5, #9333ea);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          div[style*="bottom: 180px"] {
            bottom: 180px !important;
            right: 10px !important;
            width: 50px !important;
            height: 50px !important;
          }

          div[style*="width: 380px"] {
            width: calc(100vw - 20px) !important;
            right: 10px !important;
            max-width: 380px !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="bottom: 180px"] {
            width: 50px !important;
            height: 50px !important;
          }

          div[style*="width: 380px"] {
            width: calc(100vw - 20px) !important;
            height: ${isOpen ? '700px' : '0px'} !important;
          }
        }
      `}</style>
    </>
  );
}

export default Chat;