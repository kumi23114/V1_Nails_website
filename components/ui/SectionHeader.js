import { AnimatedTitle, AnimatedSubtitle } from "./AnimatedText";
import { useLanguage } from "../../contexts/LanguageContext";

export default function SectionHeader({ title, subtitle, titleClassName = "", subtitleClassName = "", noShadow = false }) {
  const { language } = useLanguage();

  return (
    <div className="text-center mb-8">
      <AnimatedTitle
        className={`text-3xl font-bold tracking-tight ${
          language === 'zh' ? 'font-chinese' : 'font-display'
        } ${titleClassName}`}
        noShadow={noShadow}
      >
        {title}
      </AnimatedTitle>
      {subtitle && (
        <AnimatedSubtitle
          className={`mt-2 text-lg font-medium ${
            language === 'zh' ? 'font-chinese' : 'font-body'
          } ${subtitleClassName}`}
          noShadow={noShadow}
        >
          {subtitle}
        </AnimatedSubtitle>
      )}
    </div>
  );
}




