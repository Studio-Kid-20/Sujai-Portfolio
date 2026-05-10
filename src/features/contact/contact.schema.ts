import { z } from "zod";
import { CONTACT_PAGE_COPY } from "../../data/pages/contact";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is too short").max(120),
  email: z.string().email("Enter a valid email"),
  subject: z.enum(CONTACT_PAGE_COPY.subjectOptions),
  message: z.string().min(10, "Message is too short").max(5000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
