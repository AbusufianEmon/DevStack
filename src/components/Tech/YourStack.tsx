import { X } from 'lucide-react';
import type { ITechType } from '../../types/techType';


interface YourStackProps {
    techData: ITechType[];
    onRemove: (tech: ITechType) => void;
    onRemoveAll: () => void;
}

const YourStack = ({ techData, onRemove, onRemoveAll }: YourStackProps) => {
    return (
        <div>
            <div className="card bg-base-100 border border-gray-300 container mx-auto rounded-2xl p-6 self-start sticky top-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Stack</h2>
                <p className="text-slate-600 text-sm">{techData.length} Technologies Selected</p>

                <div className="grid grid-cols-1 gap-4 mt-4">
                    {techData.map((tech: ITechType) => {
                        return (
                            <div className="flex items-center gap-4 p-2 border border-gray-200 rounded-lg" key={tech.id}>
                                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                                <div>
                                    <h3 className="text-gray-900 font-semibold">{tech.name}</h3>
                                    <p className="text-gray-500 text-sm">{tech.category} </p>
                                </div>

                                <div className="ml-auto flex items-center gap-2">
                                    <button 
                                        onClick={() => onRemove(tech)}
                                        className="text-gray-500 hover:text-red-500 hover:cursor-pointer transition-colors duration-200">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={onRemoveAll}
                    className="bg-linear-to-r from-orange-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:cursor-pointer hover:scale-101 transition-transform duration-200 mt-4">
                    Remove All
                </button>
            </div>
            
        </div>
    );
};

export default YourStack;