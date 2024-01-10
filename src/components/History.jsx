export default function History({moves}){
    return (
        <ol className="border border-slate-400 p-1 text-lg">
            {moves}
        </ol>
    );
}