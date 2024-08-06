import { BorderBeam } from '@/components/ui/border-beam';
import { IProjectCardProps } from '@/interfaces/project-card';
import Image from 'next/image';
import React from 'react'
const ProjectCard: React.FC<IProjectCardProps> = ({
  title,
  description,
  imageUrl,
  techStacks,
}) => {
  return (
    <div className="relative w-full h-full m-2">
      <h3 className="text-sm text-[#4D5BCE]">{title}</h3>

      <div className=" bg-[#011221] border border-[#1E2D3D] rounded-lg mt-2">
        <div className="w-full h-24  rounded-t-md  bg-gray-800">
         <div>
          
         </div>
          <Image
            src={imageUrl}
            alt={title}
            className=" h-full  object-cover rounded-t-md"
          />
        </div>

        <div className="mt-4 p-4">
          <p className="text-xs text-[#607B96] mt-2">{description}</p>
          <div className="flex gap-1 my-2 text-[#607B96]">
            {techStacks.map((t, index) => (
              <p className="text-sm " key={index}>{`${t},`}</p>
            ))}
          </div>
          <button className="bg-[#FEA55F] px-2 py-1 rounded font-normal text-sm text-[#01080E] mt-2">
            view-project
          </button>
        </div>
        {/* <BorderBeam /> */}
      </div>
    </div>
  );
};

export default ProjectCard;
