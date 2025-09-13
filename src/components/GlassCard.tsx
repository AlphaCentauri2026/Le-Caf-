import React from 'react';
import Image from 'next/image';

interface GlassCardProps {
  imageSrc?: string;
  title?: string;
  description?: string;
  className?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  noBlur?: boolean;
  variant?: 'default' | 'clean' | 'minimal';
}

const GlassCard: React.FC<GlassCardProps> = ({
  imageSrc,
  title,
  description,
  className = "",
  imageAlt = "",
  children,
  noBlur = false,
  variant = 'default'
}) => {
  const getCardClasses = () => {
    if (variant === 'clean') {
      return "clean-card card-hover-effect";
    }
    return `group relative overflow-hidden rounded-xl ${noBlur ? 'bg-white/10 border border-white/20' : 'backdrop-blur-md bg-white/10 border border-white/20'} shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105`;
  };

  if (variant === 'clean') {
    return (
      <div className={`${getCardClasses()} ${className}`}>
        {imageSrc && (
          <div className="relative h-56 overflow-hidden rounded-t-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt || title || 'Image'}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="p-8">
          {title && (
            <h3 className="text-2xl font-bold text-gray-900 mb-3 readable-text">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-700 mb-6 readable-text leading-relaxed">
              {description}
            </p>
          )}
          {children && (
            <div>
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`${getCardClasses()} ${className}`}>
      {imageSrc && (
        <div className="relative h-48 md:h-64 overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt || title || 'Image'}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}

      {/* Text Overlay with Better Contrast */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
        <div className={`bg-gradient-to-t from-black/80 via-black/40 to-transparent ${noBlur ? '' : 'backdrop-blur-sm'} rounded-b-xl`}>
          <div className="p-4">
            {title && (
              <h3 className="text-xl font-bold text-white mb-2 text-shadow-strong">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-white/95 mb-4 text-shadow-strong font-medium">
                {description}
              </p>
            )}
            {children && (
              <div className="opacity-90">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
