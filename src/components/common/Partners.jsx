import { useEffect } from "react";
import Glide from "@glidejs/glide";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiRollupdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiNpm } from "react-icons/di";
import { BsGit, BsGithub, BsBoxSeamFill } from "react-icons/bs";

export default function Partners() {
  return (
    <div className="w-full h-max mt-10 flex flex-col gap-2">
      <CarouselLogo />
    </div>
  );
}

function CarouselLogo() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  const icons = [
    { component: AiFillHtml5, color: "#ff4405", label: "HTML" },
    { component: FaCss3Alt, color: "#4da9ff", label: "CSS" },
    { component: FaBootstrap, color: "#9d4dff", label: "Bootstrap" },
    { component: SiTailwindcss, color: "#4da9ff", label: "Tailwind" },
    { component: IoLogoJavascript, color: "#ffe14d", label: "JavaScript" },
    { component: FaReact, color: "#4da9ff", label: "React" },
    { component: SiRedux, color: "#764abc", label: "Redux" },
    { component: DiNpm, color: "#cb3837", label: "NPM" },
    { component: BsGit, color: "#f05033", label: "Git" },
    { component: BsGithub, color: "#181717", label: "GitHub" },
    { component: BsBoxSeamFill, color: "#ff7429", label: "Parcel" },
    { component: SiRollupdotjs, color: "#ec4a3f", label: "Rollup" },
  ];

  return (
    <div className="glide-09 relative w-full overflow-hidden">
      <div data-glide-el="track">
        <ul className="flex relative w-full overflow-hidden p-0">
          {icons.map((icon, index) => (
            <li
              key={index}
              className="m-auto flex flex-col items-center justify-center"
            >
              <icon.component
                className="m-auto h-20 w-20"
                style={{ color: icon.color }}
              />
              <span className="text-center text-xl text-slate-700 mt-2">
                {icon.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
