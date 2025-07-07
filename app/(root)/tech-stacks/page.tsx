import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";

import TechStacksCard from "@/components/tech-stacks/tech-stacks-card";
import { pagesConfig } from "@/config/pages";
import { techStacks } from "@/config/tech-stacks";

export const metadata: Metadata = {
  title: pagesConfig.techStacks?.metadata?.title || "Tech Stacks",
  description:
    pagesConfig.techStacks?.metadata?.description ||
    "Key tech stacks that define our professional identity.",
};

export default function TechStacksPage() {
  return (
    <PageContainer
      title={pagesConfig.techStacks?.title || "Tech Stacks"}
      description={
        pagesConfig.techStacks?.description ||
        "Key tech stacks that define our professional identity."
      }
    >
      <TechStacksCard techStacks={techStacks} />
    </PageContainer>
  );
}
