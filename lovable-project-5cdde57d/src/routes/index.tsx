import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/about";
import { BackToTop } from "@/components/back-to-top";
import { BackgroundFx } from "@/components/background-fx";
import { ClickEffects } from "@/components/click-effects";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pranav Dev J — .NET Developer" },
      {
        name: "description",
        content:
          "Portfolio of Pranav Dev J, a .NET developer building web applications and secure REST APIs with C#, ASP.NET Core, Entity Framework Core, and SQL.",
      },
      { property: "og:title", content: "Pranav Dev J — .NET Developer" },
      {
        property: "og:description",
        content: "Web applications and secure REST APIs with C# and ASP.NET Core.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <BackgroundFx />
      <ClickEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
