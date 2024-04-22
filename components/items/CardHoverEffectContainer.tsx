import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BiMailSend } from "react-icons/bi";
import { FaFacebook, FaMailchimp, FaTiktok } from "react-icons/fa6";

export function CardHoverEffectContainer() {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Facebook",
    icon: <FaFacebook />,
    description:
      "Facebook profile",
    link: "https://www.facebook.com/datdodev43/",
  },
  {
    title: "Tiktok",
    icon: <FaTiktok />,
    description: "Tiktok profile that allows users to share videos.",
    link: "https://www.tiktok.com/@datanh98hp",
  },
  {
    title: "Gmail",
    icon: <BiMailSend />,
    description:
      "Public email service that allows users to send and receive emails.",
    link: "mailto:someone@example.com",
  },
  // {
  //   title: "Meta",
  //   description:
  //     "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  //   link: "https://meta.com",
  // },
  // {
  //   title: "Amazon",
  //   description:
  //     "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  //   link: "https://amazon.com",
  // },
  // {
  //   title: "Microsoft",
  //   description:
  //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  //   link: "https://microsoft.com",
  // },
];
