import PageTransition from '@/components/Common/PageTransition';
import AboutIntro from '@/components/About/AboutIntro';
import ServicesGrid from '@/components/About/ServicesGrid';
import Skills from '@/components/Skills/Skills';

const About = () => {
  return (
    <PageTransition>
      <div className="flex flex-col gap-8">
        <AboutIntro />
        <ServicesGrid />
        <div className="glass-card rounded-xl2 p-6 shadow-glass sm:p-8">
          <Skills />
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
