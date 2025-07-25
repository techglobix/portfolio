import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
};

const renderContent = (tabVal: string) => {
  let expArr = Projects;
  if (tabVal === "personal") {
    expArr = expArr.filter((val) => val.type === "Personal Project");
  } else if (tabVal === "professional") {
    expArr = expArr.filter((val) => val.type === "Professional");
  }

  return (
    <div className="static grid justify-center gap-4 mx-auto my-4 sm:grid-cols-2 lg:grid-cols-3">
      {expArr.map((prj) => (
        <ProjectCard project={prj} key={prj.id} />
      ))}
    </div>
  );
};

export default function ProjectPage() {
  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description={pagesConfig.projects.description}
    >
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="conatiner grid max-w-[30rem] grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="w-full">
          {renderContent("all")}
        </TabsContent>
        <TabsContent value="professional">
          {renderContent("professional")}
        </TabsContent>
        <TabsContent value="personal">{renderContent("personal")}</TabsContent>
      </Tabs>
    </PageContainer>
  );
}
