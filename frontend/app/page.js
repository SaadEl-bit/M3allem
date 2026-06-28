import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <nav className="bg-surface-container-lowest font-body-md text-body-md full-width top-0 sticky shadow-sm z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-2">
            <img
              alt="Rafiki Logo"
              className="h-8 w-8 object-contain rounded-md"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMicgaGVpZ2h0PSczMicgdmlld0JveD0nMCAwIDMyIDMyJz4KICA8cmVjdCB3aWR0aD0nMzInIGhlaWdodD0nMzInIHJ4PSc4JyBmaWxsPScjMmI2Y2IwJy8+CiAgPHRleHQgeD0nMTYnIHk9JzIyJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmaWxsPSd3aGl0ZScgZm9udC1zaXplPScyMCcgZm9udC13ZWlnaHQ9J2JvbGQnIGZvbnQtZmFtaWx5PSdBcmlhbCc+UjwvdGV4dD4KPC9zdmc+"
            />
            <span className="text-headline-md font-headline-md text-primary">
              Rafiki.
            </span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer font-medium"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer font-medium"
              href="#how-it-works"
            >
              How it Works
            </Link>
          </div>
        </div>
      </nav>
      <main className="flex-grow">
        <section className="relative overflow-hidden bg-gradient-to-b from-surface to-surface-container-low py-20 md:py-28">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              AI-Powered Tutoring Platform
            </div>
            <h1 className="font-headline-xl text-headline-xl md:text-display-md text-on-surface leading-tight mb-6">
              Unlock Your Potential with{" "}
              <span className="text-primary">Rafiki</span>
              <span className="font-arabic-brand text-primary"> رفيقي</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
              رفيقك في الدراسة — Ton compagnon pour le Bac. Personalized paths
              and 24/7 automated tutoring for Moroccan students.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/chat"
                className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Start Learning
              </Link>
              <Link
                href="/correction"
                className="bg-surface-container-lowest text-on-surface-variant px-8 py-3.5 rounded-xl font-semibold border border-outline-variant hover:border-primary hover:text-primary transition-all duration-200"
              >
                Correct My Exercise
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-sm text-on-surface-variant font-medium">
                Popular subjects:
              </span>
              {["Maths", "Physics-Chem", "English"].map((subject) => (
                <span
                  key={subject}
                  className="bg-surface-container-lowest px-4 py-2 rounded-lg text-sm font-medium text-on-surface-variant border border-outline-variant"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 md:py-28 bg-surface-container-low" id="features">
          <div className="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Features
              </span>
              <h2 className="font-headline-md text-headline-md md:text-display-sm text-on-surface mt-3 mb-4">
                Empowering Your Bac Journey
              </h2>
              <p className="text-on-surface-variant max-w-lg mx-auto">
                Everything you need to excel in your Baccalaureate, powered by
                cutting-edge AI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "forum",
                  title: "Q&A Chat",
                  desc: "Get clear, step-by-step explanations tailored to the national curriculum anytime.",
                  href: "/chat",
                  color: "primary",
                },
                {
                  icon: "grading",
                  title: "Exercise Correction",
                  desc: "Upload your work. Rafiki reviews, points out mistakes, and guides you to the solution.",
                  href: "/correction",
                  color: "secondary",
                },
                {
                  icon: "description",
                  title: "Resume Generation",
                  desc: "Generate comprehensive summary sheets from your lessons for final revision.",
                  href: "/resume",
                  color: "tertiary",
                },
                {
                  icon: "assignment",
                  title: "Exercise Generation",
                  desc: "Create customized practice exercises based on specific topics and difficulty levels.",
                  href: "/exam-gen",
                  color: "primary-container",
                },
                {
                  icon: "quiz",
                  title: "Exam Generation",
                  desc: "Simulate real exams with full mock tests matching the national Baccalaureate structure.",
                  href: "/exam-correction",
                  color: "secondary-container",
                },
                {
                  icon: "check_circle",
                  title: "Exam Correction",
                  desc: "Submit your mock exams for detailed grading and feedback before the big day.",
                  href: "/cadre",
                  color: "tertiary-container",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`h-2 bg-${feature.color}`}
                  ></div>
                  <div className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span
                        className={`material-symbols-outlined text-${feature.color}`}
                        data-icon={feature.icon}
                      >
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                      {feature.desc}
                    </p>
                    <Link
                      href={feature.href}
                      className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
                    >
                      View Feature
                      <span className="text-lg leading-none">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 md:py-28 bg-surface" id="how-it-works">
          <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Process
            </span>
            <h2 className="font-headline-md text-headline-md md:text-display-sm text-on-surface mt-3 mb-4">
              How It Works
            </h2>
            <p className="text-on-surface-variant max-w-md mx-auto mb-16">
              Three simple steps to accelerate your learning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
              {[
                {
                  step: "01",
                  title: "Choose Subject",
                  desc: "Select the subject and topic you want to focus on.",
                },
                {
                  step: "02",
                  title: "Ask or Upload",
                  desc: "Type your question or upload an image of your exercise.",
                },
                {
                  step: "03",
                  title: "Get Answer",
                  desc: "Receive detailed explanations, corrections, and feedback.",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-outline-variant"></div>
                  )}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary text-on-primary flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-primary/25">
                      {item.step}
                    </div>
                    <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
