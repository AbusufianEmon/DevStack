
const EmptyStack = () => {
    return (
        <div className="card bg-base-100 border border-gray-300 container mx-auto rounded-2xl p-6 self-start sticky top-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Stack</h2>
            <p className="text-slate-600 text-sm">No technologies selected yet.</p>
            <div className="border border-dotted border-gray-300 p-6 rounded-lg mt-4 text-center text-gray-500">
                Your stack is empty.
            </div>
        </div>
    );
};

export default EmptyStack;