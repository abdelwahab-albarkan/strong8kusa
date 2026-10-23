import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import DeviceGrid from "@/components/DeviceGrid";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { DEVICE_LIST } from "@/lib/devices";

export const metadata = buildMetadata({
  title: "IPTV Supported Devices: Firestick, Apple TV, Smart TVs & PC (2026)",
  description:
    "Which device is best for Strong 8K USA? Complete step-by-step installation guides for Amazon Firestick 4K, Apple TV 4K, Android TV, Nvidia Shield, Samsung, LG & PC.",
  path: "/appareils",
  keywords: [
    "iptv devices",
    "best iptv box",
    "firestick iptv",
    "apple tv iptv",
    "android tv box iptv",
    "samsung smart tv iptv",
    "nvidia shield iptv",
    "superbox alternative",
  ],
});

export default function AppareilsHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Device Compatibility"
        title={<>Stream 8K &amp; 4K Live TV on <span className="accent">All Your Screens</span></>}
        lead="Amazon Firestick, Apple TV 4K, Smart TVs, Android boxes, gaming consoles, PCs, and tablets: select your device for a detailed step-by-step setup walkthrough."
        breadcrumb={[{ label: "Devices" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section>
        <SectionHeading eyebrow="Select Your Hardware" title="Step-by-Step Installation Guides by Device" />
        <DeviceGrid items={DEVICE_LIST} />
      </Section>

      <Section variant="secondary" narrow>
        <div className="prose">
          <h2>Do You Need a Dedicated Streaming Box?</h2>
          <p>
            If your television is already a modern Smart TV (Samsung, LG, Google TV, or Android TV), no additional hardware
            is needed: you can install your preferred player app directly. If not, a compact HDMI streaming stick—such as an
            Amazon Fire TV Stick 4K Max, Walmart onn. 4K Pro, Apple TV 4K, or Nvidia Shield—transforms any TV into a blazing-fast
            8K/4K streaming hub.
          </p>
          <p>
            Unlike expensive $350 proprietary boxes like Superbox that become obsolete, standard streaming devices give you complete
            freedom to run Strong 8K USA with zero hardware lock-in.
          </p>
        </div>
      </Section>

      <CTA />
    </>
  );
}
