import { Checkbox } from "@/components/ui/checkbox";
import { ISidebarProps } from "@/interfaces/sidebar";
import { MdArrowDropDown } from "react-icons/md";


const Sidebar: React.FC<ISidebarProps> = ({
  selectedStacks,
  setSelectedStacks,
}) => {
  const techStacks = [
    "React",
    "HTML",
    "CSS",
    "Javascript",
    "NextJs",
    "Gatsby",
    "TailwindCss",
  ];

  const toggleStack = (stack: string) => {
    setSelectedStacks((prev) =>
      prev.includes(stack) ? prev.filter((s) => s !== stack) : [...prev, stack]
    );
  };

  return (
    <aside className="w-full flex  xl:min-w-[275px] 2xl:max-w-[310px] 2xl:min-w-[310px] xl:max-w-[275px]">
      <div className="hidden xl:block  text-sm text-[#607B96] xl:w-full border-r border-gray-700 h-full">
        <div className=" flex pb-2 pl-2 justify-start items-center text-white border-b border-gray-700">
          <div className="text-2xl">
            <MdArrowDropDown />
          </div>
          <p className="">projects</p>
        </div>
        <div className="mt-4 px-4">
          {techStacks.map((stack) => (
            <div key={stack} className="flex items-center mt-2">
            
              <Checkbox
                checked={selectedStacks.includes(stack)}
                onCheckedChange={() => toggleStack(stack)}
                className="mr-2 h-4 w-4  "
                id={stack}

             
                />            
              <label className="text-[#607B96]" htmlFor={stack}>{stack}</label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
