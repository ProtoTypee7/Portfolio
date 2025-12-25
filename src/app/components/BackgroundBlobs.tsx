export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      
     
      <div
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px]
                   bg-purple-500/20 rounded-full blur-[140px]"
        style={{
          animation: "floatSlow 28s ease-in-out infinite",
        }}
      />

      
      <div
        className="absolute bottom-[-15%] right-[-10%] w-[650px] h-[650px]
                   bg-cyan-400/20 rounded-full blur-[160px]"
        style={{
          animation: "floatSlower 32s ease-in-out infinite",
        }}
      />

      
      <div
        className="absolute top-[40%] left-[60%] w-[500px] h-[500px]
                   bg-purple-400/10 rounded-full blur-[160px]"
        style={{
          animation: "floatSlow 40s ease-in-out infinite",
        }}
      />
    </div>
  );
}
