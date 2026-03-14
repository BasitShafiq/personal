import { z } from "zod";

// We don't need a database for a static portfolio, 
// but we define a schema for the contact form just for frontend validation.
export const contactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactMessage = z.infer<typeof contactMessageSchema>;
