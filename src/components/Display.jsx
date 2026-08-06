const Display = () => {
  return (
    <output
      className="block max-h-22 w-full bg-mist-800/60 border-2 border-mist-800 shadow-xs shadow-mist-800 rounded-md py-2 px-4 aspect-video text-right"
      aria-live="polite"
    >
      1 + 4 = 5
    </output>
  );
};

export default Display;
