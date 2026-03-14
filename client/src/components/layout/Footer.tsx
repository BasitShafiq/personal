import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/50 dark:border-slate-700 bg-background/50 dark:bg-slate-900/50 backdrop-blur-sm py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-display font-bold text-xl text-primary dark:text-slate-50 mb-2">
            Basit Shafiq
          </h3>
          <p className="text-muted-foreground dark:text-slate-400 text-sm">
            Building digital experiences that matter.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noreferrer"
            className="p-2 rounded-full bg-secondary dark:bg-slate-800 text-secondary-foreground dark:text-slate-400 hover:bg-primary dark:hover:bg-accent hover:text-primary-foreground dark:hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="p-2 rounded-full bg-secondary dark:bg-slate-800 text-secondary-foreground dark:text-slate-400 hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2] hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="p-2 rounded-full bg-secondary dark:bg-slate-800 text-secondary-foreground dark:text-slate-400 hover:bg-destructive dark:hover:bg-destructive hover:text-destructive-foreground dark:hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <div className="text-sm text-muted-foreground dark:text-slate-400">
          &copy; {currentYear} Basit Shafiq. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
