"user client";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import Link from "next/link";
import bbfirst from "../../app/courses/bbfirst.png";
import bbsecond from "../../app/courses/bbsecond.png";
import mswasthfirst from "../../app/courses/mswasth1.png";
import mswasthsecond from "../../app/courses/mswasth2.png";


export function TimelineDemo() {
  const data = [
    {
      title: "M-Swasth solutions",
      role: "React Developer Intern",
      date: "July 2025 - August 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
M-SWASTH is a Digital Healthcare Services provider, pioneering virtual OPD care in India. We are bridging the gap in healthcare delivery in India through technology, enhancing the accessibility and affordability of healthcare services.

We operate remote clinics in rural areas through our telehealth and telemedicine platform, connecting India’s emerging middle-class & rural population with doctors and medical specialists.

Our team of trained medical specialists and doctors with extensive experience helps the patients with screening, diagnosis, and treatment, providing quality care, and enhancing their quality of life.          </p>
          <div className="grid grid-cols-2 gap-4">
          <Link href={"https://m-swasth.in/"}>
            <Image
                src={mswasthfirst}
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
            </Link>
            <Link href={"https://m-swasth.in/"}>
              <Image
                src={mswasthsecond}
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
            </Link>

            {/* <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            /> */}
          </div>
        </div>
      ),
    }, 
    {
      title: "Blue Bricks",
      role: "Frontend Developer Intern",
      date: "Sep 2024 - May 2025, 7.5 mos",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Blue Bricks is a cutting-edge technology consulting and software services firm that helps businesses modernize legacy systems and accelerate digital transformation through secure, scalable, and modular solutions. With a strong focus on automation, AI-driven document processing, chatbot workflows, multi-currency payments, and advanced identity management tools like Passwordless4U and Axiom Protect, Blue Bricks also integrates robust cybersecurity measures to protect digital assets. Their low-code/no-code platforms, quick deployment, and enterprise-grade support make them a trusted partner for organizations seeking high-impact, low-risk digital innovation.
          </p>
          <div className="grid grid-cols-2 gap-4">
          <Link href={"https://blue-bricks.com/"}>
            <Image
                src={bbfirst}
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
            </Link>
            <Link href={"https://blue-bricks.com/"}>
              <Image
                src={bbsecond}
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
            </Link>

            {/* <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            /> */}
          </div>
        </div>
      ),
    }

  ];
  return (
    <div id="experience" className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
