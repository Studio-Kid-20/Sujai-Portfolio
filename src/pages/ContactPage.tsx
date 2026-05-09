import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT_PAGE_COPY } from "@/data/pages/contact";
import { ContactDetails } from "@/features/contact/components/ContactDetails";
import { ContactFormCard } from "@/features/contact/components/ContactFormCard";
import { contactFormSchema, type ContactFormValues } from "@/features/contact/contact.schema";
import { submitContactForm } from "@/features/contact/contactSubmit";

export function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      subject: "Project Inquiry",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setStatus(null);
    const result = await submitContactForm(data);
    setStatus(result.message);
    if (result.ok) reset();
  });

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-12">
      <div className="grid items-start gap-16 lg:grid-cols-2">
        <div className="space-y-12">
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow={CONTACT_PAGE_COPY.eyebrow}
              title={CONTACT_PAGE_COPY.title}
              description={CONTACT_PAGE_COPY.intro}
              showLine
              titleClassName="md:text-6xl font-syne"
              descriptionClassName="max-w-md text-xl"
            />
          </Reveal>

          <ContactDetails />
        </div>

        <ContactFormCard
          errors={errors}
          isSubmitting={isSubmitting}
          register={register}
          status={status}
          onSubmit={onSubmit}
        />
      </div>
    </main>
  );
}
