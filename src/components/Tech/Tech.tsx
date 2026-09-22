import React, { use, useState } from "react";
import { Star } from 'lucide-react';
import type { ITechType } from "../../types/techType";
import EmptyStack from "./EmptyStack";
import YourStack from "./YourStack";

interface TechProps {
    techPromise: Promise<ITechType[]>;
}

const Tech = ({ techPromise }: TechProps) => {

    const techData = use(techPromise);


    const [stack, setStack] = useState<ITechType[]>([]);

    const handleAddToStack = (tech: ITechType) => {
        setStack((prev) => {
        
        if (prev.some((t) => t.id === tech.id)) return prev;
            return [...prev, tech];
        });
    };

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
                        <div className="card bg-base-100 border border-gray-300 rounded-2xl p-6" key={tech.id}>
                            <div className="flex justify-between mb-2">
                                <figure>
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="h-10 w-10 object-contain"
                                    />
                                </figure>
                                <div className="badge rounded-full" 
                                        style={{
                                            backgroundColor: `${tech.iconColor}25`,
                                            color: tech.iconColor
                                        }}>
                                    {tech.badge}
                                </div>
                            </div>

                            <h2 className="card-title text-gray-900 font-bold py-3">{tech.name}</h2>
                            <p className="text-slate-600 text-xs mt-1 mb-3">{tech.description}</p>
                            <div className="flex justify-between items-center mt-2 mb-5">
                                    <div className="badge bg-gray-200">
                                        {tech.category}
                                    </div>
                                    <div className="text-slate-500">
                                        {tech.difficulty}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        {tech.rating}
                                    </div>
                            </div>

                            <button

                                className="bg-linear-to-r from-orange-600 to-purple-600 text-white rounded-lg h-10 hover:cursor-pointer hover:scale-101 transition-transform duration-300"
                                onClick={() => handleAddToStack(tech)}
                            >
                                Add to Stack
                            </button>

                        </div>
                    );
                })}
                </div>
                { stack.length === 0 ? <EmptyStack techData={stack} /> : <YourStack techData={stack} /> }
            </div>
            
        </div>           
    );
};
export default Tech;
