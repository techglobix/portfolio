import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Icons } from "@/components/common/icons";
import ProjectDescription from "@/components/projects/prj-description";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn, formatDateFromObj } from "@/lib/utils";
import logoImg from "@/public/logo.png";

interface ProjectPageProps {
  params: {
    prjId: string;
  };
}

const githubUsername = "techglobix";

export default function ProjectPage({ params }: ProjectPageProps) {
  let prj = Projects.find((val: any) => val.id === params.prjId);
  if (!prj) {
    redirect("/projects");
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="w-4 h-4 mr-2" />
        All Projects
      </Link>
      <div>
        <time
          dateTime={Date.now().toString()}
          className="block text-sm text-muted-foreground"
        >
          {formatDateFromObj(prj.startDate)}
        </time>
        <h1 className="flex items-center justify-between mt-2 text-4xl leading-tight font-heading lg:text-5xl">
          {prj.companyName}
          <div className="flex items-center">
            {/* Github link removed: not present in ProjectInterface */}
            {prj.websiteLink && (
              <CustomTooltip text="Please note that some project links may be temporarily unavailable.">
                <Link href={prj.websiteLink} target="_blank">
                  <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground " />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>
        <ChipContainer textArr={prj.category} />
        <div className="flex mt-4 space-x-4">
          <Link
            href={siteConfig.links.github}
            className="flex items-center space-x-2 text-sm"
          >
            <Image
              src={logoImg}
              alt={"techglobix logo"}
              width={42}
              height={42}
              className="rounded-full bg-background"
            />

            <div className="flex-1 leading-tight text-left">
              <p className="font-medium">{"TechGlobix"}</p>
              <p className="text-[12px] text-muted-foreground">
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
      </div>

      <Image
        src={prj.companyLogoImg}
        alt={prj.companyName}
        width={720}
        height={405}
        className="my-8 transition-colors border rounded-md bg-muted"
        priority
      />

      <div className="mb-7 ">
        <h2 className="inline-block mb-2 text-3xl leading-tight font-heading lg:text-3xl">
          Tech Stack
        </h2>
        <ChipContainer textArr={prj.techStack} />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block mb-2 text-3xl leading-tight font-heading lg:text-3xl">
          Description
        </h2>
        {/* {<prj.descriptionComponent />} */}
        <ProjectDescription
          paragraphs={prj.descriptionDetails.paragraphs}
          bullets={prj.descriptionDetails.bullets}
        />
      </div>

      <div className="mb-7 ">
        {!!prj.pagesInfoArr.length && (
          <h2 className="inline-block mb-5 text-3xl leading-tight font-heading lg:text-3xl">
            Page Info
          </h2>
        )}
        {prj.pagesInfoArr.map((page: any, ind: number) => (
          <div key={ind}>
            <h3 className="flex items-center mt-3 text-xl leading-tight font-heading lg:text-xl">
              <Icons.star className="w-5 h-5 mr-2" /> {page.title}
            </h3>
            <div>
              <p>{page.description}</p>
              {page.imgArr.map((img: string, ind: number) => (
                <Image
                  src={img}
                  key={ind}
                  alt={img}
                  width={720}
                  height={405}
                  className="my-4 transition-colors border rounded-md bg-muted"
                  priority
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="w-4 h-4 mr-2" />
          All Projects
        </Link>
      </div>
    </article>
  );
}
