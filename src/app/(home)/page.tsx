export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-4rem)] px-4 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10" />
      
      <div className="max-w-3xl mx-auto text-center space-y-6 relative">
        <h1 className="text-5xl p-2 md:text-6xl font-bold tracking-tight bg-gradient-to-r from-sky-500 to-blue-950 dark:from-sky-300 dark:to-blue-700 bg-clip-text text-transparent">
          Hytale Modding
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
          Welcome to the Hytale Modding!
          This is an unofficial community for modding Hytale, providing guides, documentation, and resources.
        </p>
      </div>
    </div>
  );
}
