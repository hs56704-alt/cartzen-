import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { GitBranch } from 'lucide-react';
import { Icons } from './Icons';
import { cn } from '@/lib/utils';

interface Props{
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string; 
}

const SocialLinks = [
    {
        name: "GitHub",
        href: "github.com",
        icon: <Icons.github className="w-6 h-6 text-white hover:text-gray-600 cursor-pointer" />
    },
    {
        name: "YouTube",
        href: "youtube.com",
        icon: <Icons.youtube className="w-6 h-6 text-white hover:text-gray-600 cursor-pointer" />
    },
    {
        name: "Twitter",
        href: "twitter.com",
        icon: <Icons.twitter className="w-6 h-6 text-white hover:text-gray-600 cursor-pointer" />
    },
    {
        name: "LinkedIn",
        href: "linkedin.com",
        icon: <Icons.linkedin className="w-6 h-6 text-white hover:text-gray-600 cursor-pointer" />
    }
];


const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
        <div className={cn("flex items-center gap-3.5", className)}>
            {SocialLinks?.map((link) => (
                <Tooltip key={link?.name}>
                    <TooltipTrigger asChild>
                        <Link href={link?.href} target="_blank" rel="noopener noreferrer" className={cn("p-2 border rounded-full hover:text-white hover:border-white hoverEffect", iconClassName)}>
                            {link?.icon}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn("text-white font-semibold", tooltipClassName)}> 
                        <p>{link?.name}</p>
                    </TooltipContent>
                </Tooltip>
            ))}

        </div>

    </TooltipProvider>
  )
}

export default SocialMedia
