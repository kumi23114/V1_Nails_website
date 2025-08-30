import { AnimatedTitle, AnimatedSubtitle } from "./AnimatedText";

export default function SectionHeader({ title, subtitle, titleClassName = "", subtitleClassName = "", noShadow = false }) {
  return (
    <div className="text-center mb-8">
      <AnimatedTitle className={`text-3xl font-bold tracking-tight font-display ${titleClassName}`} noShadow={noShadow}>{title}</AnimatedTitle>
      {subtitle && (
        <AnimatedSubtitle className={`mt-2 text-lg font-medium font-body ${subtitleClassName}`} noShadow={noShadow}>{subtitle}</AnimatedSubtitle>
      )}
    </div>
  );
}




