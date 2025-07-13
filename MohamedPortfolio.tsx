
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Mail, Instagram, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "شركة XYZ",
    url: "https://example.com",
    description: "موقع تعريفي احترافي لشركة أعمال."
  },
  {
    title: "موقع شخصي",
    url: "https://portfolio.com",
    description: "موقع شخصي لعميل لعرض خبراته ومهاراته."
  },
];

export default function MohamedPortfolio() {
  const [lang, setLang] = useState("ar");

  const content = {
    ar: {
      name: "محمد لقي زوكش",
      bio: "مطور ويب محترف، عمري 14 سنة، طالب في الصف الثاني الإعدادي تجريبي لغات. أمتلك خبرة سنة ونصف في تطوير الويب وقمت بإنجاز مشاريع متعددة.",
      hire: "تواصل معي لصنع موقع مميز لك أو لشركتك.",
      contact: "تواصل معي عبر:",
      projectsTitle: "مشاريعي",
      donate: "ادعمني عبر التبرع:",
      nav: ["الرئيسية", "عني", "المشاريع", "التواصل", "الدعم"]
    },
    en: {
      name: "Mohamed Loqy Zoksh",
      bio: "Professional web developer, 14 years old, 2nd prep experimental languages student. I have 1.5 years of experience in web development and have built many projects.",
      hire: "Contact me to create an amazing website for you or your business.",
      contact: "Contact me via:",
      projectsTitle: "My Projects",
      donate: "Support me with a donation:",
      nav: ["Home", "About", "Projects", "Contact", "Donate"]
    }
  };

  const t = content?.[lang] ?? content.ar;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-black to-green-900 text-white font-sans scroll-smooth">
      <nav className="flex justify-between items-center py-4 px-6 bg-black bg-opacity-70 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-lg">
        <h1 className="text-green-400 text-2xl font-bold">Zoksh Dev</h1>
        <ul className="flex gap-6 text-green-200 text-sm">
          {t.nav.map((item, idx) => (
            <li key={idx}><a href={`#section${idx}`} className="hover:text-white transition-all duration-200">{item}</a></li>
          ))}
          <li>
            <Button variant="outline" className="border-green-400 text-green-300 hover:bg-green-800 hover:text-white text-xs" onClick={() => setLang(lang === "ar" ? "en" : "ar")}>🌐 {lang === "ar" ? "English" : "العربية"}</Button>
          </li>
        </ul>
      </nav>

      <section id="section0" className="pt-32 px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="flex flex-col md:flex-row items-center gap-6">
          <Image src="/profile.jpg" alt="Mohamed Zoksh" width={150} height={150} className="rounded-full border-4 border-green-600 shadow-md" />
          <div>
            <h2 className="text-4xl font-bold text-green-300 drop-shadow">{t.name}</h2>
            <p className="text-xl mt-2 text-green-200 leading-relaxed">{t.bio}</p>
            <p className="text-green-400 italic mt-2">{t.hire}</p>
          </div>
        </motion.div>
      </section>

      <section id="section2" className="mt-20 px-6">
        <h2 className="text-3xl font-semibold text-green-400 border-b border-green-700 pb-2">{t.projectsTitle}</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {projects.map((project, i) => (
            <Card key={i} className="bg-green-950 border border-green-700 shadow-md hover:shadow-green-600 transition-all duration-300">
              <CardContent className="p-4">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-green-300 hover:underline">
                  {project.title}
                </a>
                <p className="text-sm mt-2 text-green-200">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="section3" className="mt-20 px-6">
        <h2 className="text-2xl font-semibold text-green-400 flex items-center gap-2">
          {t.contact}
        </h2>
        <ul className="mt-3 space-y-2 text-green-200">
          <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-green-400" /> mohamedzoksh@gmail.com</li>
          <li className="flex items-center gap-2"><Instagram className="w-4 h-4 text-green-400" /> @zoksh.dev</li>
          <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-green-400" /> Discord: zoksh.dev</li>
        </ul>
      </section>

      <section id="section4" className="mt-20 px-6 pb-20">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-green-400">
          <Heart className="text-red-500 animate-pulse" /> {t.donate}
        </h2>
        <ul className="mt-2 space-y-1 text-green-200">
          <li>PayPal: paypal.me/zoksh</li>
          <li>Vodafone Cash: 01012345678</li>
        </ul>
      </section>
    </div>
  );
}
