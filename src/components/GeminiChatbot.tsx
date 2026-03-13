// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Search, 
//   MapPin, 
//   Clock, 
//   User, 
//   Award, 
//   MessageSquare, 
//   X, 
//   Send, 
//   ChevronRight, 
//   Filter,
//   Info,
//   ExternalLink,
//   ShieldCheck
// } from 'lucide-react';

// // --- CLUB DATA (Populated from previous turn) ---
// const KENDO_CLUBS = [
//   {
//     "objectID": "kendo_hcm_01",
//     "name": "DaiDo Kendo Club",
//     "location": { "city": "HCM", "district": "Bình Thạnh", "address": "8 Phan Dang Luu, Ward 14", "lat": 10.8016, "lng": 106.6986 },
//     "schedule": { "days": ["Mon", "Wed", "Fri"], "time_slots": ["18:00-20:00"] },
//     "fee": { "monthly_min": 500000, "monthly_max": 700000, "trial_available": true },
//     "level": { "beginner": true, "intermediate": true, "advanced": true },
//     "style": { "intensity": "medium", "focus": ["basics", "spirit"] },
//     "coach": { "rank": "4th Dan", "origin": "Vietnam" },
//     "tags": ["traditional", "friendly", "spacious"],
//     "description": "A well-established club in Binh Thanh focusing on Kihon and traditional Kendo spirit."
//   },
//   {
//     "objectID": "kendo_hcm_02",
//     "name": "Kazeken Kendo Club",
//     "location": { "city": "HCM", "district": "Quận 1", "address": "1st Floor, 2 Dinh Tien Hoang, Da Kao Ward", "lat": 10.7885, "lng": 106.7008 },
//     "schedule": { "days": ["Tue", "Thu", "Sun"], "time_slots": ["19:00-21:00"] },
//     "fee": { "monthly_min": 600000, "monthly_max": 800000, "trial_available": true },
//     "level": { "beginner": true, "intermediate": true, "advanced": true },
//     "style": { "intensity": "high", "focus": ["speed", "technique"] },
//     "coach": { "rank": "5th Dan", "origin": "Japan" },
//     "tags": ["central_location", "high_intensity", "experienced_coach"],
//     "description": "Located in the heart of District 1, Kazeken offers rigorous training for all levels."
//   },
//   {
//     "objectID": "kendo_hcm_03",
//     "name": "Saigon Kendo Club",
//     "location": { "city": "HCM", "district": "Quận 11", "address": "215C Ly Thuong Kiet, Ward 15", "lat": 10.7712, "lng": 106.6582 },
//     "schedule": { "days": ["Sat", "Sun"], "time_slots": ["08:00-10:00", "15:00-17:00"] },
//     "fee": { "monthly_min": 450000, "monthly_max": 600000, "trial_available": true },
//     "level": { "beginner": true, "intermediate": true, "advanced": false },
//     "style": { "intensity": "medium", "focus": ["community", "etiquette"] },
//     "coach": { "rank": "3rd Dan", "origin": "Vietnam" },
//     "tags": ["weekend_classes", "student_friendly", "community"],
//     "description": "Perfect for students and weekend warriors looking to pick up the sword."
//   },
//   {
//     "objectID": "kendo_hcm_04",
//     "name": "Shobukan Dojo",
//     "location": { "city": "HCM", "district": "Quận 7", "address": "109 block K, Happy Valley", "lat": 10.7247, "lng": 106.7112 },
//     "schedule": { "days": ["Tue", "Thu", "Sat"], "time_slots": ["18:30-20:30"] },
//     "fee": { "monthly_min": 1000000, "monthly_max": 1500000, "trial_available": false },
//     "level": { "beginner": true, "intermediate": true, "advanced": true },
//     "style": { "intensity": "high", "focus": ["Kenjutsu", "discipline"] },
//     "coach": { "rank": "5th Dan", "origin": "Japan" },
//     "tags": ["premium", "expat_friendly", "authentic"],
//     "description": "A high-end dojo in District 7 specializing in authentic Japanese swordsmanship."
//   },
//   {
//     "objectID": "kendo_hcm_05",
//     "name": "UEF Kendo Club",
//     "location": { "city": "HCM", "district": "Bình Thạnh", "address": "15th Floor, 145 Dien Bien Phu", "lat": 10.7963, "lng": 106.7051 },
//     "schedule": { "days": ["Mon", "Fri"], "time_slots": ["17:30-19:30"] },
//     "fee": { "monthly_min": 300000, "monthly_max": 500000, "trial_available": true },
//     "level": { "beginner": true, "intermediate": false, "advanced": false },
//     "style": { "intensity": "low", "focus": ["youth", "fitness"] },
//     "coach": { "rank": "2nd Dan", "origin": "Vietnam" },
//     "tags": ["university", "youth_oriented", "affordable"],
//     "description": "A vibrant club based at UEF university, great for young beginners."
//   },
//   {
//     "objectID": "kendo_hcm_06",
//     "name": "Tomokai Kendo Club",
//     "location": { "city": "HCM", "district": "Quận 1", "address": "145 Nguyen Du Street", "lat": 10.7758, "lng": 106.6924 },
//     "schedule": { "days": ["Tue", "Sat"], "time_slots": ["18:30-20:30"] },
//     "fee": { "monthly_min": 700000, "monthly_max": 900000, "trial_available": true },
//     "level": { "beginner": true, "intermediate": true, "advanced": true },
//     "style": { "intensity": "medium", "focus": ["technical", "social"] },
//     "coach": { "rank": "4th Dan", "origin": "Vietnam" },
//     "tags": ["city_center", "active_community", "social"],
//     "description": "Friendly atmosphere with a strong focus on technical precision and group activities."
//   }
// ];

// // --- STYLING CONSTANTS ---
// const THEME = {
//   primary: '#0F172A', // Navy
//   secondary: '#F8FAFC', // Light Gray
//   accent: '#EAB308', // Gold
//   text: '#1E293B'
// };

// const apiKey = ""; // Runtime provided

// export default function App() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCity, setSelectedCity] = useState("All");
//   const [isAssistantOpen, setIsAssistantOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { role: 'assistant', text: "Welcome to the Kendo Federation Assistant! How can I help you find a place to train today?" }
//   ]);
//   const [inputValue, setInputValue] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const chatEndRef = useRef(null);

//   // Filter logic
//   const filteredClubs = KENDO_CLUBS.filter(club => {
//     const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                           club.location.district.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCity = selectedCity === "All" || club.location.city === selectedCity;
//     return matchesSearch && matchesCity;
//   });

//   const scrollToBottom = () => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   const handleSendMessage = async (e) => {
//     if (e) e.preventDefault();
//     if (!inputValue.trim()) return;

//     const userMessage = inputValue;
//     setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
//     setInputValue("");
//     setIsTyping(true);

//     try {
//       const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           contents: [{
//             parts: [{
//               text: `You are the Kendo Federation Assistant. You are professional, helpful, and respectful. 
//               Help the user with their Kendo inquiries using the following data:
              
//               CLUB DATA: ${JSON.stringify(KENDO_CLUBS)}
              
//               Rules:
//               1. If they ask for a club recommendation, use the specific data provided.
//               2. If they ask about Kendo in general, provide accurate information about equipment (Shinai, Bogu), rules (Ippon), and etiquette (Reigi).
//               3. Keep responses concise but informative.
//               4. If they ask for a city not in data, mention we currently only have full data for HCM and Binh Duong.
              
//               User: ${userMessage}`
//             }]
//           }]
//         })
//       });

//       const data = await response.json();
//       const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, but I'm having trouble connecting to the federation servers right now.";
      
//       setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
//     } catch (error) {
//       setMessages(prev => [...prev, { role: 'assistant', text: "Error: Could not reach the assistant. Please try again later." }]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
//       {/* Header */}
//       <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center shadow-inner overflow-hidden">
//                {/* Fallback Icon if generated image isn't loaded yet */}
//                <ShieldCheck className="text-slate-900 w-7 h-7" />
//             </div>
//             <h1 className="text-xl font-bold tracking-tight">Kendo Federation <span className="text-yellow-500">Assistant</span></h1>
//           </div>
//           <div className="hidden md:flex items-center gap-6 text-sm font-medium">
//             <a href="#" className="hover:text-yellow-500 transition-colors">Clubs</a>
//             <a href="#" className="hover:text-yellow-500 transition-colors">Resources</a>
//             <a href="#" className="hover:text-yellow-500 transition-colors">Federation</a>
//           </div>
//           <button 
//             onClick={() => setIsAssistantOpen(true)}
//             className="md:hidden p-2 hover:bg-slate-800 rounded-full"
//           >
//             <MessageSquare size={20} />
//           </button>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
//         {/* Left Column: Search and Directory */}
//         <div className="lg:col-span-8 space-y-6">
//           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
//             <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
//               <Search className="text-slate-400" size={24} />
//               Find a Dojo
//             </h2>
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="relative flex-1">
//                 <input 
//                   type="text" 
//                   placeholder="Search club name or district..." 
//                   className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <Search className="absolute left-3 top-3.5 text-slate-400" size={18} />
//               </div>
//               <div className="flex gap-2">
//                 <select 
//                   className="px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
//                   value={selectedCity}
//                   onChange={(e) => setSelectedCity(e.target.value)}
//                 >
//                   <option value="All">All Cities</option>
//                   <option value="HCM">Ho Chi Minh City</option>
//                   <option value="Bình Dương">Binh Duong</option>
//                   <option value="Hà Nội">Hanoi</option>
//                 </select>
//                 <button className="p-3 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors">
//                   <Filter size={20} className="text-slate-600" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {filteredClubs.map((club) => (
//               <ClubCard key={club.objectID} club={club} />
//             ))}
//             {filteredClubs.length === 0 && (
//               <div className="col-span-full py-20 text-center bg-white rounded-2xl border-2 border-dashed border-slate-200">
//                 <Info className="mx-auto text-slate-300 mb-2" size={48} />
//                 <p className="text-slate-500 font-medium">No clubs found matching your search.</p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Column: AI Assistant (Desktop) or Quick Info */}
//         <div className="hidden lg:block lg:col-span-4 sticky top-24 h-[calc(100vh-120px)]">
//           <div className="bg-white h-full rounded-2xl shadow-xl border border-slate-200 flex flex-col overflow-hidden">
//             <div className="bg-slate-900 p-4 text-white flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
//                   <User size={18} className="text-slate-900" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-sm">Federation AI</h3>
//                   <div className="flex items-center gap-1.5">
//                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
//                     <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Online</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
//               {messages.map((msg, idx) => (
//                 <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                   <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm shadow-sm ${
//                     msg.role === 'user' 
//                       ? 'bg-yellow-500 text-slate-900 rounded-tr-none' 
//                       : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'
//                   }`}>
//                     {msg.text}
//                   </div>
//                 </div>
//               ))}
//               {isTyping && (
//                 <div className="flex justify-start">
//                   <div className="bg-white border border-slate-200 px-4 py-2 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
//                     <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
//                     <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
//                     <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
//                   </div>
//                 </div>
//               )}
//               <div ref={chatEndRef} />
//             </div>

//             <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-200 flex gap-2">
//               <input 
//                 type="text" 
//                 placeholder="Ask me anything..." 
//                 className="flex-1 px-4 py-2 bg-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-yellow-500"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//               />
//               <button 
//                 type="submit"
//                 disabled={!inputValue.trim() || isTyping}
//                 className="p-2 bg-slate-900 text-white rounded-xl hover:bg-slate-800 disabled:opacity-50 transition-all"
//               >
//                 <Send size={18} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>

//       {/* Mobile Assistant Overlay */}
//       {isAssistantOpen && (
//         <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white">
//           <div className="bg-slate-900 p-4 text-white flex items-center justify-between">
//             <h3 className="font-bold">Federation AI</h3>
//             <button onClick={() => setIsAssistantOpen(false)}><X /></button>
//           </div>
//           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
//             {messages.map((msg, idx) => (
//               <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
//                   msg.role === 'user' ? 'bg-yellow-500 text-slate-900' : 'bg-white border border-slate-200 text-slate-700'
//                 }`}>
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//             <div ref={chatEndRef} />
//           </div>
//           <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100 flex gap-2">
//             <input 
//               type="text" 
//               placeholder="Type message..." 
//               className="flex-1 px-4 py-3 bg-slate-100 rounded-xl outline-none"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//             />
//             <button className="p-3 bg-slate-900 text-white rounded-xl"><Send size={20} /></button>
//           </form>
//         </div>
//       )}

//       {/* Floating Action Button (Mobile Only) */}
//       <button 
//         onClick={() => setIsAssistantOpen(true)}
//         className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-yellow-500 text-slate-900 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40"
//       >
//         <MessageSquare size={24} />
//       </button>
//     </div>
//   );
// }

// function ClubCard({ club }) {
//   return (
//     <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow group flex flex-col h-full">
//       <div className="flex justify-between items-start mb-3">
//         <h3 className="text-lg font-bold group-hover:text-yellow-600 transition-colors leading-tight pr-2">
//           {club.name}
//         </h3>
//         {club.fee.trial_available && (
//           <span className="shrink-0 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
//             Trial OK
//           </span>
//         )}
//       </div>

//       <div className="space-y-3 mb-6 flex-1">
//         <div className="flex items-start gap-2 text-slate-500 text-sm">
//           <MapPin size={16} className="mt-0.5 shrink-0 text-slate-400" />
//           <span>{club.location.address}, {club.location.district}</span>
//         </div>
//         <div className="flex items-center gap-2 text-slate-500 text-sm">
//           <Clock size={16} className="shrink-0 text-slate-400" />
//           <span>{club.schedule.days.join(', ')} • {club.schedule.time_slots[0]}</span>
//         </div>
//         <div className="flex items-center gap-2 text-slate-500 text-sm">
//           <Award size={16} className="shrink-0 text-slate-400" />
//           <span>Coach: {club.coach.rank} ({club.coach.origin})</span>
//         </div>
//       </div>

//       <div className="flex flex-wrap gap-1.5 mb-5">
//         {club.tags.map(tag => (
//           <span key={tag} className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded-md font-medium capitalize">
//             {tag.replace('_', ' ')}
//           </span>
//         ))}
//       </div>

//       <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
//         <div className="flex flex-col">
//           <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Monthly Fee</span>
//           <span className="font-bold text-slate-900">
//             {club.fee.monthly_min.toLocaleString()}đ+
//           </span>
//         </div>
//         <button className="flex items-center gap-1.5 text-slate-900 font-bold text-sm bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-xl transition-all shadow-sm active:translate-y-0.5">
//           Join Now
//           <ChevronRight size={16} />
//         </button>
//       </div>
//     </div>
//   );
// }


export const GeminiChatbot: React.FC = () => {
  return (
    <div>
      {/* Gemini Chatbot component implementation goes here */}
    </div>
  );
}