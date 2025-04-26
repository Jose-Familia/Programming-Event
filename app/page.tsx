import { EventHeader } from "@/components/event-header"
import { HeroSection } from "@/components/hero-section"
import { RegistrationSection } from "@/components/registration-section"
import { ScheduleSection } from "@/components/schedule-section"
import { SpeakersSection } from "@/components/speakers-section"
import { SponsorsSection } from "@/components/sponsors-section"

export default function EventPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Header */}
      <EventHeader />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50 w-full">
        <div className="container px-4 md:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">About the Event</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <p className="text-lg mb-6">
                "Programming for Everyone" is a one-day event designed to break down barriers to coding and make
                programming accessible to people from all backgrounds and skill levels.
              </p>
              <p className="text-lg mb-6">
                Whether you're a complete beginner curious about coding, a student looking to enhance your skills, or a
                professional wanting to explore new technologies, this event has something for you.
              </p>
              <p className="text-lg">
                Our workshops, talks, and hands-on sessions are carefully crafted to be approachable yet valuable,
                ensuring everyone walks away with new knowledge and skills.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-primary mb-4"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <h3 className="text-xl font-medium mb-2">Inclusive Learning</h3>
                <p>Sessions designed for all skill levels and backgrounds</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-primary mb-4"
                >
                  <path d="M12 22a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
                  <path d="M12 13V2" />
                  <path d="m9 6 3-3 3 3" />
                </svg>
                <h3 className="text-xl font-medium mb-2">Hands-on Workshops</h3>
                <p>Interactive sessions to practice what you learn</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-primary mb-4"
                >
                  <path d="M17 6.1H3" />
                  <path d="M21 12.1H3" />
                  <path d="M15.1 18H3" />
                </svg>
                <h3 className="text-xl font-medium mb-2">Expert Speakers</h3>
                <p>Learn from industry professionals and educators</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-primary mb-4"
                >
                  <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
                  <path d="M23 14h-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" />
                  <path d="M23 10h-4" />
                </svg>
                <h3 className="text-xl font-medium mb-2">Networking</h3>
                <p>Connect with like-minded learners and professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <ScheduleSection />

      {/* Speakers Section */}
      <SpeakersSection />

      {/* Sponsors Section */}
      <SponsorsSection />

      {/* Registration Section */}
      <RegistrationSection />

      {/* Footer */}
      <footer className="border-t py-16 bg-muted/30 w-full">
        <div className="container px-4 md:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-medium mb-4">Programming for Everyone</h3>
              <p className="text-muted-foreground text-center md:text-left">
                Making coding accessible to everyone, regardless of background or experience.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-medium mb-4">Contact Us</h3>
              <p className="text-muted-foreground mb-3 text-center md:text-left">Have questions about the event? Reach out to us.</p>
              <p className="text-muted-foreground text-center md:text-left">Email: info@programmingforeveryone.com</p>
              <p className="text-muted-foreground text-center md:text-left">Phone: (123) 456-7890</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-5">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2025 Programming for Everyone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

