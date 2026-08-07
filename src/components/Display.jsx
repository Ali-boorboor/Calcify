const Display = () => {
  return (
    <output
      className="grid grid-rows-[auto_1fr] items-center text-right max-h-22 w-full bg-mist-800/60 border-2 border-mist-800 shadow-xs shadow-mist-800 rounded-md py-2 px-4 aspect-video"
      aria-live="polite"
    >
      <p className="text-sm line-clamp-1 break-all">1 +</p>

      <p className="text-lg line-clamp-1 break-all">4</p>
    </output>
  );
};

export default Display;
