import Hero             from '@/components/Hero';
import EventInfo        from '@/components/EventInfo';
import Agenda           from '@/components/Agenda';
import Format           from '@/components/Format';
import Location         from '@/components/Location';
import RegistrationForm from '@/components/RegistrationForm';
import Footer           from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />

      <main>
        <div className="site-main">
          <EventInfo />
          <Agenda />
          <Format />
          <Location />
          <RegistrationForm />
        </div>
      </main>

      <Footer />
    </>
  );
}
