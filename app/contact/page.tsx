import { ContactForm } from "@/components/sections/contact-form"
import { SectionWrapper } from "@/components/sections/section-wrapper"

export default function ContactPage() {
  return (
    <main>
      <SectionWrapper
        title="Contact"
        description="Have an idea, partnership opportunity, or want to join MARS CLUB? Reach out to us."
      >
        <ContactForm />
      </SectionWrapper>
    </main>
  )
}
