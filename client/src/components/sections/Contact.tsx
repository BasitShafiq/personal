import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { personalInfo } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate network request since this is a static site
    await new Promise(resolve => setTimeout(resolve, 800));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-background dark:bg-slate-950">
      <SectionHeading 
        title="Get In Touch" 
        subtitle="Currently open to new opportunities and collaborations."
      />
      
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
        <div className="lg:col-span-2 space-y-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-card dark:bg-slate-900 rounded-2xl p-8 border border-border dark:border-slate-700 shadow-sm h-full">
            <h3 className="text-2xl font-bold font-display text-primary dark:text-slate-50 mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary dark:bg-slate-800 flex items-center justify-center text-primary dark:text-accent group-hover:bg-primary dark:group-hover:bg-accent group-hover:text-primary-foreground dark:group-hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground dark:text-slate-400">Email</p>
                  <p className="text-foreground dark:text-slate-200 font-medium mt-0.5">{personalInfo.email}</p>
                </div>
              </a>
              
              <a href={`tel:${personalInfo.phone}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary dark:bg-slate-800 flex items-center justify-center text-primary dark:text-accent group-hover:bg-primary dark:group-hover:bg-accent group-hover:text-primary-foreground dark:group-hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground dark:text-slate-400">Phone</p>
                  <p className="text-foreground dark:text-slate-200 font-medium mt-0.5">{personalInfo.phone}</p>
                </div>
              </a>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary dark:bg-slate-800 flex items-center justify-center text-primary dark:text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground dark:text-slate-400">Location</p>
                  <p className="text-foreground dark:text-slate-200 font-medium mt-0.5">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-3">
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card dark:bg-slate-900 rounded-2xl p-8 border border-border dark:border-slate-700 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground dark:text-slate-200">Your Name</label>
                <input 
                  {...register("name")}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-background dark:bg-slate-950 border border-border dark:border-slate-700 text-foreground dark:text-slate-200 placeholder-muted-foreground dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                />
                {errors.name && (
                  <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground dark:text-slate-200">Your Email</label>
                <input 
                  {...register("email")}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-background dark:bg-slate-950 border border-border dark:border-slate-700 text-foreground dark:text-slate-200 placeholder-muted-foreground dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2 mb-8">
              <label className="text-sm font-medium text-foreground dark:text-slate-200">Message</label>
              <textarea 
                {...register("message")}
                rows={5}
                placeholder="How can I help you?"
                className="w-full px-4 py-3 rounded-xl bg-background dark:bg-slate-950 border border-border dark:border-slate-700 text-foreground dark:text-slate-200 placeholder-muted-foreground dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
              />
              {errors.message && (
                <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
              )}
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.03, y: -2 } : {}}
              whileTap={!isSubmitting ? { scale: 0.97 } : {}}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary dark:bg-accent text-primary-foreground dark:text-primary font-semibold shadow-lg shadow-primary/20 dark:shadow-accent/20 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <motion.span animate={{ x: [0, 3, 0], y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                    <Send className="w-4 h-4" />
                  </motion.span>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
