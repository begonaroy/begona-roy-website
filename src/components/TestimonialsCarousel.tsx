import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';
import type { Testimonial } from '../types';

const SECONDS_PER_CARD = 12;
const DESKTOP_QUERY = '(min-width: 48rem)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const controlClass = 'inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-sage-500 px-3 text-sm font-semibold text-sage-700 transition-colors hover:bg-sage-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta-500 dark:border-sage-400 dark:text-sage-200 dark:hover:bg-sage-900 dark:focus-visible:outline-terracotta-200';

interface TestimonialCardProps {
  item: Testimonial;
  expanded: boolean;
  onToggle: () => void;
}

function TestimonialCard({ item, expanded, onToggle }: TestimonialCardProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const [overflows, setOverflows] = useState(false);
  const quoteId = `testimonial-quote-${item.id}`;
  const rating = item.rating ?? 5;

  useEffect(() => {
    if (expanded) return;

    const body = bodyRef.current!;
    const quote = quoteRef.current!;
    const measure = () => setOverflows(quote.getBoundingClientRect().height > body.clientHeight + 1);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(body);
    observer.observe(quote);
    return () => observer.disconnect();
  }, [expanded]);

  return (
    <div className={`flex flex-col gap-4 rounded-3xl border border-[#E8E2D9] bg-[#FBF9F5] p-6 sm:p-8 dark:border-[#2D3930] dark:bg-[#1C2420] ${expanded ? 'min-h-[21.25rem]' : 'h-[21.25rem]'}`}>
      <div className="flex shrink-0 items-center gap-1 text-[#4A5D4E] dark:text-[#B7BEA3]" role="img" aria-label={`Valoración de ${rating} sobre 5 estrellas`}>
        {Array.from({ length: 5 }, (_, starIndex) => (
          <Star key={starIndex} aria-hidden="true" className={`size-4 ${starIndex < rating ? 'fill-current' : ''}`} />
        ))}
      </div>

      <div ref={bodyRef} className="flex min-h-0 flex-1 flex-col justify-center">
        <div
          id={quoteId}
          className={expanded ? undefined : `min-h-0 overflow-clip ${overflows ? '[mask-image:linear-gradient(black_calc(100%-0.75em),transparent)]' : ''}`}
        >
          <blockquote ref={quoteRef} className="space-y-4 font-serif text-sm italic leading-relaxed text-[#222823] sm:text-base dark:text-[#F3EFE7]">
            {item.quote.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </blockquote>
        </div>
        {(overflows || expanded) && (
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={quoteId}
            aria-label={`${expanded ? 'Leer menos' : 'Leer más'} del testimonio de ${item.author}`}
            onClick={onToggle}
            className="inline-flex min-h-11 shrink-0 self-start items-center rounded-sm text-sm font-semibold text-sage-700 underline underline-offset-4 hover:text-terracotta-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta-500 dark:text-sage-200 dark:hover:text-terracotta-200 dark:focus-visible:outline-terracotta-200"
          >
            {expanded ? 'Leer menos' : 'Leer más'}
          </button>
        )}
      </div>

      <div className="shrink-0 border-t border-[#E8E2D9] pt-4 text-xs dark:border-[#2D3930]">
        <span className="block font-semibold text-[#222823] dark:text-[#F3EFE7]">{item.author}</span>
        <span className="text-[#AA4664] dark:text-[#DDB5C1]">
          {item.source === 'Google' ? 'Reseña de Google' : item.occupation}
        </span>
      </div>
    </div>
  );
}

export function TestimonialsCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const manualTween = useRef<gsap.core.Tween | null>(null);
  const progress = useRef({ cards: 0 });
  const cardStep = useRef(0);
  const activeIndex = useRef(0);
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(() => window.matchMedia(DESKTOP_QUERY).matches ? 3 : 1);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia(REDUCED_MOTION_QUERY).matches);
  const [playing, setPlaying] = useState(!reducedMotion);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const total = TESTIMONIALS.length;
  const canNavigate = total > visibleCount;

  function wrap(cardIndex: number) {
    return ((cardIndex % total) + total) % total;
  }

  function paintTrack() {
    const offset = wrap(progress.current.cards);
    const firstCard = Math.floor(offset);
    const fraction = offset - firstCard;
    const cards = trackRef.current!.children;
    // Move each card to the end only once it has fully left the viewport.
    for (let cardIndex = 0; cardIndex < cards.length; cardIndex++) {
      const card = cards[cardIndex] as HTMLElement;
      const slot = wrap(cardIndex - firstCard);
      card.style.transform = `translateX(${(slot - cardIndex - fraction) * cardStep.current}px)`;
    }
    const nearest = wrap(Math.round(offset));
    if (nearest !== activeIndex.current) {
      activeIndex.current = nearest;
      setIndex(nearest);
    }
  }

  function jumpTo(target: number) {
    manualTween.current?.kill();
    progress.current.cards = target;
    paintTrack();
  }

  function pause() {
    setPlaying(false);
  }

  function play() {
    manualTween.current?.kill();
    setExpandedId(null);
    setPlaying(true);
  }

  function navigate(direction: number) {
    pause();
    setExpandedId(null);
    const target = (direction > 0 ? Math.floor(progress.current.cards) : Math.ceil(progress.current.cards)) + direction;
    if (reducedMotion) {
      jumpTo(target);
    } else {
      manualTween.current?.kill();
      manualTween.current = gsap.to(progress.current, {
        cards: target,
        duration: 0.45,
        ease: 'power2.inOut',
        onUpdate: paintTrack,
      });
    }
    const visible = Array.from({ length: visibleCount }, (_, i) => wrap(target + i) + 1);
    setAnnouncement(visible.length === 1
      ? `Testimonio ${visible[0]} de ${total}`
      : `Testimonios ${visible.join(', ')} de ${total}`);
  }

  useLayoutEffect(() => {
    const viewport = viewportRef.current!;
    const track = trackRef.current!;
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const motion = window.matchMedia(REDUCED_MOTION_QUERY);
    const measureCards = () => {
      const width = track.firstElementChild!.getBoundingClientRect().width;
      cardStep.current = width + parseFloat(window.getComputedStyle(track).columnGap);
      setVisibleCount(desktop.matches ? 3 : 1);
      paintTrack();
    };
    const updateMotion = () => {
      setReducedMotion(motion.matches);
      if (motion.matches) {
        setPlaying(false);
        jumpTo(Math.round(progress.current.cards));
      }
    };

    let viewportWidth = viewport.clientWidth;
    const resizeObserver = new ResizeObserver(() => {
      if (viewportWidth === viewport.clientWidth) return;
      viewportWidth = viewport.clientWidth;
      measureCards();
    });
    const intersectionObserver = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    resizeObserver.observe(viewport);
    intersectionObserver.observe(viewport);
    measureCards();
    desktop.addEventListener('change', measureCards);
    motion.addEventListener('change', updateMotion);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      desktop.removeEventListener('change', measureCards);
      motion.removeEventListener('change', updateMotion);
      manualTween.current?.kill();
    };
  }, []);

  useLayoutEffect(() => {
    if (!playing || reducedMotion || hovered || !inView || !canNavigate) return;

    const slide = (_time: number, deltaMs: number) => {
      progress.current.cards = wrap(progress.current.cards + Math.min(deltaMs, 50) / (SECONDS_PER_CARD * 1000));
      paintTrack();
    };
    gsap.ticker.add(slide);
    return () => { gsap.ticker.remove(slide); };
  }, [playing, reducedMotion, hovered, inView, canNavigate]);

  return (
    <div
      role="group"
      aria-roledescription="carrusel"
      aria-labelledby="testimonials-title"
      onFocusCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget) && event.target.matches(':focus-visible')) pause();
      }}
    >
      {canNavigate && (
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:justify-end">
          {!reducedMotion && (
            <button type="button" className={controlClass} onClick={playing ? pause : play}>
              {playing ? 'Pausar' : 'Reproducir'}
            </button>
          )}
          <button type="button" className={controlClass} aria-label="Testimonio anterior" onClick={() => navigate(-1)}>
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button type="button" className={controlClass} aria-label="Testimonio siguiente" onClick={() => navigate(1)}>
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      )}

      <div
        ref={viewportRef}
        tabIndex={-1}
        className="overflow-clip"
        onPointerEnter={(event) => {
          if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
          setHovered(true);
        }}
        onPointerLeave={() => setHovered(false)}
      >
        <div
          ref={trackRef}
          className="relative flex items-start gap-6"
          onFocusCapture={(event) => {
            pause();
            if (event.target.matches(':focus-visible')) jumpTo(index);
          }}
        >
          {TESTIMONIALS.map((item, cardIndex) => {
            const visible = wrap(cardIndex - index) < visibleCount;
            const expanded = visible && item.id === expandedId;
            return (
              <div
                key={item.id}
                role="group"
                aria-roledescription="testimonio"
                aria-label={`${cardIndex + 1} de ${TESTIMONIALS.length}`}
                inert={!visible}
                className="min-w-0 basis-full shrink-0 md:basis-[calc((100%-3rem)/3)]"
              >
                <TestimonialCard
                  item={item}
                  expanded={expanded}
                  onToggle={() => {
                    pause();
                    jumpTo(index);
                    setExpandedId(expanded ? null : item.id);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <p className="sr-only" role="status">{announcement}</p>
    </div>
  );
}
