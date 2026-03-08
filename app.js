import React, { useState, useEffect, useRef } from 'react';
import { 
  Database, Search, Users, MapPin, 
  Award, GraduationCap, Mail, Linkedin, 
  Facebook, ArrowUpRight, Globe, FileText, 
  Binary, Fingerprint, BookOpen, CheckCircle2, 
  Briefcase, History, ChevronRight, Quote,
  Layers, Microscope, Landmark, Target, 
  Minus, Plus, ShieldCheck, Cpu
} from 'lucide-react';

// --- Advanced Scroll Reveal Component ---
const Reveal = ({ children, delay = 0, y = 30 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transition: `all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${y}px)`,
      }}
      className="w-full"
    >
      {children}
    </div>
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(0); 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const experiences = [
    { 
      date: "2026", 
      title: "WASH for Urban Poor (WASH4U)", 
      inst: "Water Aid | DSK", 
      role: "Field Research Assistant", 
      desc: "Coordinating Qualitative and Quantitative data collection in slum areas of Chittagong City Corporation.",
      impact: "Clinical demographic mapping and WASH infrastructure assessment in urban high-density environments.",
      tags: ["Quantitative", "Urban Sociology"] 
    },
    { 
      date: "2025", 
      title: "AHP IV Project", 
      inst: "Save The Children | YPSA", 
      role: "Team Supervisor", 
      desc: "Leading Quantitative Data Collection for Australia's foreign ministry funded initiatives.",
      impact: "Managed teams across Rohingya Camp and Host Community populations in Cox's Bazar.",
      tags: ["Rohingya Response", "Leadership"] 
    },
    { 
      date: "2025", 
      title: "National VACW & HP Prevention", 
      inst: "UNICEF | MoWCA", 
      role: "Qualitative Data Collector", 
      desc: "Mid-term Evaluation of the National Program for Prevention of Violence against Children and Women.",
      impact: "Expert execution of KII, FGD, Case Studies, and IDIs for major policy evaluation.",
      tags: ["Child Protection", "UNICEF"] 
    },
    { 
      date: "2025", 
      title: "NM International Detergent Survey", 
      inst: "Inspira Advisory", 
      role: "Qualitative Data Collector", 
      desc: "Large-scale household survey across Anowara, Hathazari, Fatikchari, Raozan and Rangunia.",
      impact: "Clinical attention to detail in high-volume household consumer research.",
      tags: ["Market Research", "Household Survey"] 
    },
    { 
      date: "2025", 
      title: "Hazardous Labour Endline", 
      inst: "YPSA | Swiss Solidarity", 
      role: "Moderator", 
      desc: "Focused on protecting children from hazardous labour in the dried fish and metal factory sectors.",
      impact: "Moderator for Qualitative Data Collection (KII, FGD, CS, OR) in Sitakund and Muradpur.",
      tags: ["Labour Rights", "Moderation"] 
    },
    { 
      date: "2025", 
      title: "Water Utility Satisfaction", 
      inst: "CWASA | Water Aid", 
      role: "Field Supervisor", 
      desc: "Conducting utility services satisfaction surveys in key CWASA catchment areas.",
      impact: "Supervising 10+ enumerators across Residential, Commercial, and Institutional sectors.",
      tags: ["Utility Services", "Team Lead"] 
    },
    { 
      date: "2025", 
      title: "SPIRIT Project (Kurigram)", 
      inst: "Terre des hommes | BTS", 
      role: "Data Enumerator", 
      desc: "Sports for Protection, Resilience and Transformation (SPIRIT) data collection.",
      impact: "Covered Kurigram Sadar, Chilmari, and Ulipur with rigorous methodological detail.",
      tags: ["Resilience", "Data Enumeration"] 
    },
    { 
      date: "2025", 
      title: "The Child Safety Net Project", 
      inst: "World Vision International", 
      role: "Team Leader", 
      desc: "Data Enumerator & Team Leader for complex field initiatives in Ukhiya and Teknaf.",
      impact: "Ensuring data integrity in high-stakes refugee response environments.",
      tags: ["CSNP", "Leadership"] 
    },
    { 
      date: "2024", 
      title: "Right to Information (RTI) Act", 
      inst: "Digitally Rights", 
      role: "Data Enumerator", 
      desc: "National enumeration on the implementation of the RTI Act in Bangladesh.",
      impact: "Mapping transparency and information accessibility across public sectors.",
      tags: ["Civic Rights", "Governance"] 
    },
    { 
      date: "23-24", 
      title: "Global HR Operations", 
      inst: "GAOTek Inc.", 
      role: "Country Leader", 
      desc: "Supervised 8 Squad Leaders, 16 Assistant Squad Leaders, and more than 116 interns.",
      impact: "Managed large-scale remote operations and strategic team development.",
      tags: ["HR Intern", "Management"] 
    }
  ];

  const certifications = [
    { title: "Qualitative Research Methodology", org: "University of Chittagong", type: "Workshop" },
    { title: "SPSS Analysis (2 Months)", org: "Bangladesh Research Society", type: "Workshop" },
    { title: "Safeguarding Policy", org: "World Vision", type: "Training" },
    { title: "Safeguarding Policy", org: "terre des hommes", type: "Training" },
    { title: "Scientific Writing", org: "BIIHR", type: "Training" },
    { title: "Cognitive Empowerment", org: "UNICEF & P2E", type: "Course" },
    { title: "Workplace Productivity", org: "UNICEF & P2E", type: "Course" },
    { title: "Functional Grammar", org: "Mentors'", type: "Course" }
  ];

  return (
    <div className="bg-[#fcfcf9] text-[#1e293b] min-h-screen font-sans selection:bg-teal-100 overflow-x-hidden">
      
      {/* Soft Background Accents */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-2xl py-4 border-b border-teal-600/10 shadow-sm' : 'bg-transparent py-10 border-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => scrollTo('home')}>
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center font-black shadow-lg shadow-teal-600/20 text-white group-hover:rotate-6 transition-transform">SB</div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter uppercase leading-none text-slate-900">Shihab Babu</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-teal-600">Researcher</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            <button onClick={() => scrollTo('framework')} className="hover:text-teal-600 transition-colors">Expertise</button>
            <button onClick={() => scrollTo('log')} className="hover:text-teal-600 transition-colors">Field Log</button>
            <button onClick={() => scrollTo('accreditation')} className="hover:text-teal-600 transition-colors">Training</button>
            <button onClick={() => scrollTo('academy')} className="hover:text-teal-600 transition-colors">Academy</button>
            <button onClick={() => scrollTo('contact')} className="px-8 py-2.5 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all shadow-md shadow-teal-600/20">Contact</button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* --- Hero Section: High Impact White Typography --- */}
        <section id="home" className="relative min-h-screen flex flex-col justify-center px-10 pt-40">
          <div className="max-w-[1400px] mx-auto w-full">
            <Reveal>
              <div className="relative mb-24">
                <p className="text-teal-600 font-black uppercase tracking-[0.5em] text-sm mb-8 flex items-center gap-4">
                  <span className="h-[2px] w-12 bg-teal-500"></span> University of Chittagong
                </p>
                <h1 className="text-[12vw] lg:text-[14rem] font-black leading-[0.75] tracking-tighter text-slate-900 select-none">
                  SHIHAB<br />BABU<span className="text-teal-500 italic">.</span>
                </h1>
                
                <div className="mt-20 max-w-5xl space-y-12 relative z-10">
                  <div className="space-y-10 relative">
                    <Quote size={80} className="text-teal-600 opacity-10 absolute -top-12 -left-12 hidden md:block" />
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-slate-800 leading-[1.2] tracking-tight">
                      "Sociology is the art of <span className="text-teal-600 not-italic font-black pr-2">listening</span> 
                      to narratives; Research is the science of making them <span className="text-slate-900 not-italic font-black pr-2 underline decoration-teal-500/30">indisputable</span>."
                    </h2>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-12 pt-8">
                    <button onClick={() => scrollTo('log')} className="group flex items-center gap-6 px-12 py-6 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl hover:bg-teal-600 hover:scale-105 active:scale-95">
                      Explore Projects <ChevronRight size={20} />
                    </button>
                    <p className="text-xl md:text-2xl text-slate-500 font-light italic max-w-xl border-l-2 border-teal-500/20 pl-10">
                      Managing complex data missions for global stakeholders including <span className="text-slate-900 font-bold not-italic">UNICEF & World Vision.</span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* --- Partners Bar --- */}
        <section className="py-20 border-y border-teal-600/5 bg-white shadow-sm">
           <div className="max-w-[1400px] mx-auto px-10">
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <span className="text-xl font-black tracking-tighter text-slate-900 text-center">UNICEF</span>
                <span className="text-xl font-black tracking-tighter text-slate-900 text-center">WATER AID</span>
                <span className="text-xl font-black tracking-tighter text-slate-900 text-center">WORLD VISION</span>
                <span className="text-xl font-black tracking-tighter text-slate-900 text-center">SAVE THE CHILDREN</span>
                <span className="text-xl font-black tracking-tighter text-slate-900 text-center">YPSA</span>
                <span className="text-xl font-black tracking-tighter text-slate-900 text-center">GAOTEK</span>
              </div>
           </div>
        </section>

        {/* --- Metrics --- */}
        <section className="py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: "116+", label: "Interns Managed" },
              { val: "6.5", label: "IELTS Band (B2)" },
              { val: "12+", label: "Field Operations" },
              { val: "BSS", label: "Sociology Grad" }
            ].map((m, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group p-12 bg-[#fcfcf9] border border-teal-600/5 rounded-[3rem] hover:border-teal-500/30 transition-all hover:shadow-xl hover:shadow-teal-600/5">
                  <p className="text-6xl font-black text-slate-900 group-hover:text-teal-600 transition-colors mb-2 tracking-tighter">{m.val}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* --- Framework --- */}
        <section id="framework" className="py-40 px-10 relative">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
                <div>
                  <h2 className="text-[11px] font-black text-teal-600 uppercase tracking-[0.5em] mb-4">Core Framework</h2>
                  <h3 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter">Research Tools.</h3>
                </div>
                <p className="text-slate-400 max-w-sm text-lg font-medium italic border-l-4 border-teal-500/20 pl-8">High-precision methodologies for human-centric research missions.</p>
              </div>
            </Reveal>

            <div className="grid lg:grid-cols-3 gap-10">
              {[
                { 
                  title: "Quantitative", 
                  icon: <Binary size={48} className="text-teal-600" />,
                  skills: ["Kobo Tool Box", "Survey CTO", "SPSS Analysis", "MS Excel", "Google Forms"],
                },
                { 
                  title: "Qualitative", 
                  icon: <Fingerprint size={48} className="text-teal-500" />,
                  skills: ["FGD Moderation", "KII Interviewing", "Transcription", "Case Studies", "IDIs"],
                },
                { 
                  title: "Leadership", 
                  icon: <Layers size={48} className="text-slate-400" />,
                  skills: ["Team Logistics", "Negotiation", "Safeguarding", "Staff Supervision", "Field Ops"],
                }
              ].map((box, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="p-16 bg-white border border-teal-600/5 rounded-[4rem] hover:border-teal-500/20 transition-all group hover:shadow-2xl shadow-teal-900/5">
                    <div className="mb-12 group-hover:scale-110 transition-transform">{box.icon}</div>
                    <h4 className="text-xl font-black uppercase tracking-[0.2em] text-slate-900 mb-10">{box.title}</h4>
                    <div className="flex flex-wrap gap-3">
                      {box.skills.map(s => (
                        <span key={s} className="px-4 py-2 bg-slate-50 text-[11px] font-bold text-slate-600 rounded-xl border border-slate-200 uppercase tracking-tighter group-hover:border-teal-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* --- Field Log Timeline: Interactive Expansion --- */}
        <section id="log" className="py-40 px-10 bg-slate-50 border-y border-teal-600/5">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="mb-32">
                <h2 className="text-[11px] font-black text-teal-600 uppercase tracking-[0.5em] mb-4">Project Archive</h2>
                <h3 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter italic leading-none">The Field Log.</h3>
                <p className="text-slate-400 mt-6 max-w-xl italic">Active participation in 12+ large-scale field missions.</p>
              </div>
            </Reveal>

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div 
                    onClick={() => setExpandedIndex(expandedIndex === i ? -1 : i)}
                    className={`group cursor-pointer rounded-[3.5rem] border transition-all duration-500 ${expandedIndex === i ? 'bg-white border-teal-500 shadow-2xl shadow-teal-600/10' : 'bg-white border-slate-200 hover:border-teal-500/40'}`}
                  >
                    <div className="p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
                      <div className="flex items-center gap-12 w-full md:w-auto">
                        <span className={`text-2xl font-mono font-bold ${expandedIndex === i ? 'text-teal-600' : 'text-slate-300'}`}>0{i+1}</span>
                        <div>
                          <h4 className={`text-3xl md:text-5xl font-black tracking-tighter leading-tight ${expandedIndex === i ? 'text-slate-900' : 'text-slate-700 group-hover:text-teal-600 transition-colors'}`}>
                            {exp.title}
                          </h4>
                          <p className={`text-xs font-bold uppercase tracking-[0.2em] mt-3 ${expandedIndex === i ? 'text-teal-600' : 'text-slate-400'}`}>
                            {exp.inst}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-10 w-full md:w-auto justify-between md:justify-end">
                        <span className={`text-xs font-black uppercase tracking-widest ${expandedIndex === i ? 'text-teal-800' : 'text-slate-400'}`}>{exp.date}</span>
                        <div className={`p-4 rounded-full border ${expandedIndex === i ? 'border-teal-500 text-teal-600' : 'border-slate-200 text-slate-300 group-hover:text-teal-500'}`}>
                          {expandedIndex === i ? <Minus size={28} /> : <Plus size={28} />}
                        </div>
                      </div>
                    </div>

                    <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedIndex === i ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-10 md:p-16 pt-0 border-t border-slate-100 mt-2">
                        <div className="grid lg:grid-cols-2 gap-20 py-16">
                          <div className="space-y-8">
                            <p className="text-[11px] font-black uppercase tracking-widest text-teal-600 opacity-60">Mission Summary</p>
                            <p className="text-2xl md:text-4xl font-serif italic text-slate-700 leading-relaxed">"{exp.desc}"</p>
                            <div className="flex flex-wrap gap-3 pt-6">
                              {exp.tags.map(t => (
                                <span key={t} className="px-6 py-2 bg-teal-50 rounded-full text-[10px] font-black uppercase tracking-widest text-teal-700 border border-teal-100">{t}</span>
                              ))}
                            </div>
                          </div>
                          <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100 space-y-10">
                             <div>
                                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-6">Professional Designation</p>
                                <p className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">{exp.role}</p>
                             </div>
                             <div>
                                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-6">Methodological Impact</p>
                                <div className="flex items-start gap-6">
                                  <div className="p-3 bg-teal-600 text-white rounded-xl shadow-lg shadow-teal-600/20"><Target size={24} /></div>
                                  <p className="text-slate-600 text-lg italic font-medium leading-relaxed">{exp.impact}</p>
                                </div>
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* --- Professional Accreditations --- */}
        <section id="accreditation" className="py-40 px-10 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8 text-center md:text-left">
                <div>
                  <h2 className="text-[11px] font-black text-teal-600 uppercase tracking-[0.5em] mb-4">Accreditations</h2>
                  <h3 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">Training.</h3>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="group p-10 bg-[#fcfcf9] border border-slate-100 rounded-[3rem] hover:border-teal-500/30 transition-all flex flex-col items-center text-center hover:shadow-xl shadow-teal-900/5">
                    <div className="mb-10 p-5 bg-teal-50 rounded-3xl text-teal-600 group-hover:scale-110 transition-transform border border-teal-100">
                      {cert.type === "Workshop" && <Award size={32} />}
                      {cert.type === "Training" && <ShieldCheck size={32} />}
                      {cert.type === "Course" && <Cpu size={32} />}
                    </div>
                    <p className="text-sm font-black uppercase tracking-[0.1em] text-slate-900 mb-3 leading-tight min-h-[40px]">{cert.title}</p>
                    <p className="text-[10px] font-bold text-teal-600 uppercase tracking-[0.2em] mb-6 italic">{cert.org}</p>
                    <span className="text-[9px] font-black uppercase tracking-widest px-4 py-1.5 bg-slate-100 rounded-full text-slate-500">{cert.type}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* --- Academy Section --- */}
        <section id="academy" className="py-40 px-10 border-t border-slate-100 bg-[#fcfcf9]">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-32 items-center">
            <Reveal x={-40} y={0}>
              <div className="space-y-16">
                <div>
                  <h2 className="text-[11px] font-black text-teal-600 uppercase tracking-[0.5em] mb-4">Academic Background</h2>
                  <h3 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none italic">The Roots.</h3>
                </div>
                <div className="space-y-8">
                  <div className="p-12 bg-white border border-slate-100 rounded-[3rem] hover:border-teal-500/30 transition-all group hover:shadow-xl">
                    <h4 className="text-2xl md:text-3xl font-bold text-slate-900 italic group-hover:text-teal-600 leading-tight underline decoration-teal-500/20 underline-offset-8">"Understanding Student Politics: Drivers of Change"</h4>
                    <p className="text-xs text-slate-400 mt-8 uppercase font-black tracking-widest flex items-center gap-4">
                       <span className="h-[2px] w-8 bg-teal-500"></span> Research Monograph · Dr. Joydeb Garai
                    </p>
                  </div>
                  <div className="p-12 bg-white border border-slate-100 rounded-[3rem] hover:border-teal-500/30 transition-all group hover:shadow-xl">
                    <h4 className="text-2xl md:text-3xl font-bold text-slate-900 italic group-hover:text-teal-600 leading-tight underline decoration-teal-500/20 underline-offset-8">"Changing Patterns of Urban Housing Societies"</h4>
                    <p className="text-xs text-slate-400 mt-8 uppercase font-black tracking-widest flex items-center gap-4">
                       <span className="h-[2px] w-8 bg-teal-500"></span> PhD Research Asst. · Tazrin-A-Jakea
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-16 bg-slate-900 text-white rounded-[5rem] relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-12 text-teal-500 opacity-20 group-hover:rotate-12 transition-transform">
                  <GraduationCap size={250} />
                </div>
                <div className="relative z-10">
                  <h4 className="text-6xl font-black tracking-tighter mb-4 leading-[0.9]">BSS IN<br />SOCIOLOGY</h4>
                  <p className="text-xl font-bold uppercase tracking-[0.2em] text-teal-400 mb-10 italic underline decoration-white/20 underline-offset-8">University of Chittagong</p>
                  <p className="text-slate-300 text-lg font-medium leading-relaxed mb-16 italic">Sociology Major. Focusing on demographic statistics, ethnographic research, and sociological framework.</p>
                  <div className="grid grid-cols-2 gap-10 pt-12 border-t border-white/10">
                    <div>
                      <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2">Leadership</p>
                      <p className="font-black text-xl italic uppercase text-white">General Sec. · USAF</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2">IELTS Score</p>
                      <p className="font-black text-3xl text-teal-400 italic">6.5 <span className="text-xs font-bold">(B2)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* --- Contact --- */}
        <section id="contact" className="py-80 px-10 relative bg-white">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <Reveal>
              <h2 className="text-7xl md:text-[12rem] font-black text-slate-900 tracking-tighter mb-20 italic leading-none">Let's connect<span className="text-teal-500">.</span></h2>
              <div className="flex flex-col items-center gap-16">
                <a href="mailto:mdshihab.001001@gmail.com" className="group text-3xl md:text-7xl font-black text-teal-600 hover:text-slate-900 transition-all underline decoration-slate-900/5 underline-offset-[24px] hover:decoration-teal-500">
                  mdshihab.001001@gmail.com
                </a>
                
                <div className="flex gap-20 pt-20">
                  <a href="https://linkedin.com/in/mdshihabbabu" target="_blank" className="flex flex-col items-center gap-6 text-slate-300 hover:text-teal-600 transition-all group">
                    <Linkedin size={50} />
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity text-slate-900">LinkedIn</span>
                  </a>
                  <a href="https://www.facebook.com/mdshihab.shu" target="_blank" className="flex flex-col items-center gap-6 text-slate-300 hover:text-teal-600 transition-all group">
                    <Facebook size={50} />
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity text-slate-900">Facebook</span>
                  </a>
                </div>
                <div className="flex items-center gap-4 text-slate-400 font-mono text-sm uppercase tracking-[0.6em] pt-40 border-t border-slate-100 mt-20">
                   <MapPin size={24} className="text-teal-600" /> Chittagong, Bangladesh
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-[#fcfcf9] text-center border-t border-slate-100">
        <p className="text-[11px] font-black uppercase tracking-[1.5em] text-slate-300 italic">
          Researcher · Sociologist · Academic Leader
        </p>
      </footer>

      <style>{`
        html { scroll-behavior: smooth; }
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; background: #fcfcf9; }
        .font-serif { font-family: 'Lora', serif; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #fcfcf9; }
        ::-webkit-scrollbar-thumb { background: #14b8a6; border-radius: 10px; }
      `}</style>
    </div>
  );
          }
