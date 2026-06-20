import PageTransition from '@/components/Common/PageTransition';
import Timeline from '@/components/Timeline/Timeline';
import ExperienceList from '@/components/Resume/ExperienceList';
import { education, experience } from '@/data/resumeData';

const Resume = () => {
  return (
    <PageTransition>
      <div className="flex flex-col gap-8">
        <div className="glass-card rounded-xl2 p-6 shadow-glass sm:p-8">
          <h2 className="mb-2 text-2xl font-semibold text-whiteText sm:text-3xl">Resume</h2>
          <p className="mb-6 text-secondary">
            A snapshot of my education and hands-on experience building full-stack applications.
          </p>

          <h3 className="mb-4 text-xl font-medium text-whiteText">Education</h3>
          <Timeline items={education} />
        </div>

        <div>
          <h3 className="mb-4 text-xl font-medium text-whiteText">Experience</h3>
          <ExperienceList items={experience} />
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;
