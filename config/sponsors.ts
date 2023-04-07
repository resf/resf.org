import type { SponsorsConfig } from "@/types/sponsors/SponsorsConfig";

export const sponsors: SponsorsConfig = {
  tiers: [
    {
      name: "Tier 1 - Principal Sponsor",
      order: 0,
      hasLogo: true,
      hasDescription: true,
      sponsors: [
        {
          name: "CIQ",
          founding: true,
          description:
            "We believe in helping people do great things. This is why CIQ is a founding sponsor of the RESF. We provide commercial support and services for Rocky Linux to customers in research, academia, government, enterprise, partners, and everyone in between.",
          href: "https://ciq.co/products/rocky-linux/",
          logoUrl: "/images/sponsors/ciq.png",
        },
        {
          name: "45Drives",
          description:
            "45Drives offers enterprise storage solutions built on powerful and robust open-source software that allows customers to benefit from the cost savings & flexibility of off-the-shelf hardware. Check them out for a fully supported data storage solution at the best cost per terabyte!",
          href: "https://45drives.com",
          logoUrl: "/images/sponsors/45drives.png",
        },
        {
          name: "Amazon Web Services",
          description:
            "The RESF utilizes AWS to run much of the underlying infrastructure critical to the development and deployment of the services supporting Rocky Linux. From Koji builders for x86_64 and aarch64 running in EC2 to SRPM blob storage in S3, AWS is foundational to much of what we do.",
          href: "https://aws.com/",
          logoUrl: "/images/sponsors/aws.png",
        },
        {
          name: "Google Cloud",
          description:
            "A a principal sponsor of the RESF, Google understands the importance of Rocky Linux as a free, open, community enterprise operating system. Providing resources for testing and validation, we've partnered with the RESF to ensure Rocky's status as a first-class citizen on the Google Cloud Platform from day one.",
          href: "https://cloud.google.com/",
          logoUrl: "/images/sponsors/gcp.png",
        },
        {
          name: "OpenDrives",
          description:
            "OpenDrives is a global provider of enterprise-scale, software-defined data storage solutions. Our technology is designed to power the most demanding workflows—on premises and in the cloud. Our commitment to open standards and protocols facilitates ease of integrations, making it simpler for customers to access, use, move, and protect their data. We are headquartered in Culver City, CA.",
          href: "https://opendrives.com/",
          logoUrl: "/images/sponsors/opendrives.png",
        },
        {
          name: "Rakuten Symphony",
          description:
            "Rakuten Symphony is a strong believer that open source communities encourage innovation through collaboration. Deployment of Rocky Linux represents a return to true open-source principles, powered by open communities. Rakuten Symphony is working closely with a broad spectrum of third-party vendors and technology partners within the telecom industry to make Rocky Linux the standard operating system for running large networks.",
          href: "https://symphony.rakuten.com/",
          logoUrl: "/images/sponsors/rakutan-symphony.png",
        },
        {
          name: "VMware",
          description:
            "VMware is a leading provider of multi-cloud services for all apps, enabling digital innovation with enterprise control.",
          href: "https://vmware.com/",
          logoUrl: "/images/sponsors/vmware.png",
        },
      ],
    },
    {
      name: "Tier 4",
      order: 3,
      hasLogo: false,
      hasDescription: false,
      sponsors: [
        {
          name: "OpenLogic",
          href: "https://www.openlogic.com/",
          logoUrl: "/images/sponsors/openlogic.svg",
        },
        {
          name: "ProComputers.com",
          href: "https://www.procomputers.com/",
          logoUrl: "/images/sponsors/procomputers.png",
        },
        {
          name: "Stromasys",
          href: "https://stromasys.com/",
          logoUrl: "/images/sponsors/stromasys.png",
        },
      ],
    },
  ],
};
