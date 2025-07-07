import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ProjectCard from "@/components/experience/project-card";
import TechStacksCard from "@/components/tech-stacks/tech-stacks-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredExperiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { featuredTechStacks } from "@/config/tech-stacks";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Full Stack Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="flex items-center h-screen pt-6 pb-8 mb-0 space-y-6 md:pb-12 md:py-20 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
          <AnimatedText
            as="h1"
            delay={0.2}
            className="text-3xl font-heading sm:text-5xl md:text-6xl lg:text-7xl"
          >
            TechGlobix
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 hidden md:block"
          >
            Global Tech Solutions is a leading provider of innovative technology
            services and solutions with a worldwide presence. We empower
            businesses across the globe to achieve digital transformation
            through cutting-edge software development, cloud solutions, and IT
            consulting. Our team of experts delivers scalable and secure
            solutions tailored to the unique needs of clients in various
            industries, ensuring success in today’s fast-evolving digital
            landscape.
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.4}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            With a commitment to excellence and a passion for innovation, Global
            Tech Solutions partners with organizations worldwide to drive
            growth, efficiency, and competitive advantage.
          </AnimatedText>

          <div className="flex flex-col items-center justify-center gap-3 mt-10 sm:flex-row sm:space-x-4">
            <AnimatedText delay={0.8}>
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(buttonVariants({ size: "lg" }))}
                aria-label="Contact TechGlobix"
              >
                <Icons.contact className="w-4 h-4 mr-2" /> Contact
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="w-6 h-6 mt-10" />
          </AnimatedText>
        </div>
      </section>
      <AnimatedSection
        className="container py-10 space-y-6 bg-muted"
        id="tech-stacks"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.techStacks.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.techStacks.description}
          </AnimatedText>
        </div>
        <TechStacksCard techStacks={featuredTechStacks} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/tech-stacks">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="w-4 h-4 mr-2" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="right"
        className="container py-10 space-y-6 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <div className="grid justify-center gap-4 mx-auto md:w-full lg:grid-cols-3">
          {featuredExperiences.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ProjectCard project={exp} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="w-4 h-4 mr-2" /> View All
            </Button>
          </Link>
        </AnimatedText>
        {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant experiences.
                    </p>
                </div> */}
      </AnimatedSection>
      {/* <AnimatedSection
        direction="left"
        className="container py-10 space-y-6 bg-muted my-14"
        id="contributions"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.contributions.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.contributions.description}
          </AnimatedText>
        </div>
        <div className="justify-center gap-4 mx-auto md:w-full lg:grid-cols-3">
          <ContributionCard contributions={featuredContributions} />
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/contributions">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="w-4 h-4 mr-2" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection> */}
    </ClientPageWrapper>
  );
}
