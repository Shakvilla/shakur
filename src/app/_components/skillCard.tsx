import Marquee from "@/components/ui/marquee";
import { cn } from "@/utils/cn";
import { SiDocker, SiElasticsearch, SiExpress, SiKubernetes, SiMongodb, SiMongoose, SiNextdotjs, SiNginx, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "@icons-pack/react-simple-icons";

const reviews = [
  {
    id: 0,
    name: "Javascript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    id: 1,
    name: "Typescript",
    img: <SiTypescript color="#3178C6" size={24} title="Typescript" />,
  },
  {
    id: 2,
    name: "NodeJs",
    img: <SiNodedotjs title="NodeJs" color="#5FA04E" size={24} />,
  },
  {
    id: 3,
    name: "ReactJs",
    img: <SiReact title="ReactJs" color="#61DAFB" size={24} />,
  },
  {
    id: 4,
    name: "NextJs",
    img: <SiNextdotjs title="NextJs" size={24} color="#fff" />,
  },

  {
    id: 5,
    name: "Tailwindcss",
    img: <SiTailwindcss title="Tailwindcss" size={24} color="#06B6D4" />,
  },
  {
    id: 6,
    name: "ExpressJs",
    img: <SiExpress title="ExpressJs" size={24} color="#fff" />,
  },
  {
    id: 7,
    name: "Kubernetes",
    img: <SiKubernetes title="Kubernetes" size={24} color="#326CE5" />,
  },
  {
    id: 8,
    name: "MongoDB",
    img: <SiMongodb title="MongoDB" color="#47A248" size={24} />,
  },
  {
    id: 9,
    name: "Mongoose",
    img: <SiMongoose title="Mongoose" color="#F04D35" size={24} />,
  },
  {
    id: 10,
    name: "NGINX",
    img: <SiNginx title="Nginx" color="#009639" size={24} />,
  },
  {
    id: 10,
    name: "Docker",
    img: <SiDocker title="Nginx" color="#2496ED" size={24} />,
  },
  {
    id: 11,
    name: 'Elasticsearch',
    img: <SiElasticsearch title="Elastic Search" color="#005571" size={24}/>
  }
];

const firstRow = reviews.slice( reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  
}: {
  img: any;
  name: string;
  
}) => {
  return (
    <figure
      className={cn(
        "relative   cursor-pointer overflow-hidden border-gray-600 border-1 rounded-xl border px-4 py-2",
        
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="rounded-full"  >{img}</div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

export function SkillsCard() {
  return (
    <div className="relative flex text-[#607B96]  text-xs 2xl:text-lg flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div> */}
      {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
}
