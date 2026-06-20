import PageTransition from '@/components/Common/PageTransition';
import ContactCards from '@/components/Contact/ContactCards';
import ContactForm from '@/components/Contact/ContactForm';

const Contact = () => {
  return (
    <PageTransition>
      <div className="flex flex-col gap-6">
        <div className="glass-card rounded-xl2 p-6 shadow-glass sm:p-8">
          <h2 className="mb-2 text-2xl font-semibold text-whiteText sm:text-3xl">Contact Me</h2>
          <p className="mb-6 text-secondary">
            Have a project in mind or an internship opportunity? Let's talk.
          </p>
          <ContactCards />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="glass-card overflow-hidden rounded-xl2 shadow-glass">
            <iframe
              title="Location map - Hyderabad, India"
              src="https://www.google.com/maps?q=Hyderabad,India&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[320px] w-full border-0"
            />
          </div>

          <div className="glass-card rounded-xl2 p-6 shadow-glass">
            <ContactForm />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
