import React, { use } from "react";
import type { ITechType } from "../../types/techType";

interface TechProps {
    techPromise: Promise<ITechType[]>;
}

const Tech = ({ techPromise }: TechProps) => {
    const techData = use(techPromise);

    return (
        <div className="container mx-auto">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">
                    Explore The
                    <span className="text-pink-500">Technologies</span>
                </h2>
                <p className="text-gray-500">
                    Pick technologies to build your ideal development stack.
                </p>
            </div>
            <div className="grid grid-cols-[3fr_1fr] gap-4 mt-6">
                <div className="grid grid-cols-3 gap-4">
                    {techData.map((tech: ITechType) => {
                    return (
                        <div className="card bg-base-100 border-2">
                            <div className="flex justify-between">
                                <figure>
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="h-10 w-10 object-contain"
                                    />
                                </figure>
                                <div className="badge badge-primary rounded">
                                    {tech.badge}
                                </div>
                            </div>
                        </div>
                    );
                })}
                </div>
                <div>

                </div>
            </div>
            
        </div>           
    );
};
export default Tech;
