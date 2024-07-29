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
    <div className="relative w-full h-full bg-[#011221] border border-[#1E2D3D] rounded-lg p-4 m-2">
      <Image
        src={imageUrl}
     
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg text-[#4D5BCE]">{title}</h3>
        <p className="text-sm text-[#607B96] mt-2">{description}</p>
        <div className="flex gap-1 my-2 text-[#607B96]">
          {techStacks.map((t, index) => (
            <p className="text-sm " key={index}>{`${t},`}</p>
          ))}
        </div>
        <button className="bg-[#FEA55F] px-4 py-1 rounded font-normal text-[#01080E] mt-2">
          view-project
        </button>
      </div>
      <BorderBeam />
    </div>
  );
};

export default ProjectCard;
