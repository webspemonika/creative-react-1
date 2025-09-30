import { BorderBeam } from 'lightswind';  // অথবা যদি নির্দিষ্ট পাথ দিয়ে থাকে

export default function BorderBeamDemo() {
  return (
    <div className="relative p-1 rounded-lg overflow-hidden">
      <BorderBeam 
        colorFrom="#7400ff"
        colorTo="#9b41ff"
        size={50}
        duration={6}
        borderThickness={2}
        glowIntensity={3}
      />
      <div className="relative bg-card p-4 rounded-md z-10">
        Content with animated border
      </div>
    </div>
  );
}
