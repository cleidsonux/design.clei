import React from 'react';
import { motion } from 'motion/react';

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  /** LinkedIn profile photo URL. If absent, falls back to initials + gradient. */
  image?: string;
  /** Initials shown when no image is available */
  initials: string;
  /** Tailwind gradient classes used as fallback when no image */
  gradient: string;
}

interface Props {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export const TestimonialsColumn = ({ className, testimonials, duration = 10 }: Props) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6 bg-white"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, initials, gradient, name, role }, i) => (
              <div
                key={i}
                className="p-10 rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/10 max-w-xs w-full"
              >
                <div className="text-slate-700 leading-relaxed">{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  {image ? (
                    <img
                      src={image}
                      alt={name}
                      width={40}
                      height={40}
                      referrerPolicy="no-referrer"
                      className="h-10 w-10 rounded-full object-cover bg-slate-100 shrink-0"
                      onError={(e) => {
                        // Fallback to initials when LinkedIn CDN blocks the request
                        const el = e.currentTarget;
                        const parent = el.parentElement;
                        if (parent) {
                          el.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = `h-10 w-10 rounded-full ${gradient} flex items-center justify-center text-xs font-bold text-white shrink-0`;
                          fallback.textContent = initials;
                          parent.insertBefore(fallback, el);
                        }
                      }}
                    />
                  ) : (
                    <div className={`h-10 w-10 rounded-full ${gradient} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                      {initials}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-slate-900">{name}</div>
                    <div className="leading-5 opacity-60 tracking-tight text-slate-600">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
