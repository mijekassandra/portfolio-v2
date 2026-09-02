export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badgeUrl: string;
  description?: string;
}

export const certifications: Certification[] = [
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    badgeUrl:
      "https://www.credly.com/badges/ae95ca26-dcc2-4aad-8abe-cfcf50b79b6c",
    description:
      "Foundational cloud fluency across AWS services, security, architecture, pricing, and support.",
  },
];
