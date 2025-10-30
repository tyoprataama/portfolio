import Aurora from '../css/Props/AuroraProps.jsx';
import HeroProps from '../css/Props/HeroProps.jsx';

export default function Hero() {
  return (
    <section className = "relative w-full h-screen overflow-hidden" >
      <Aurora
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction={false}
        mouseRadius={0.3}
        colorNum={3}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.03}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 flex items-center justify-start z-10 txt-color">
        <HeroProps />
      </div>
    </section>
  )
}