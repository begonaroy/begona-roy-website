import { useLayoutEffect, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MOTION_ALLOWED_QUERY = '(prefers-reduced-motion: no-preference)';
const MOTION_REDUCED_QUERY = '(prefers-reduced-motion: reduce)';
const CLEAR_MOTION_PROPS = 'opacity,transform';

type MotionScope = RefObject<HTMLElement | null>;
type DynamicKey = string | number | boolean | null | undefined;

export const getAccessibleScrollBehavior = (): ScrollBehavior =>
  window.matchMedia(MOTION_REDUCED_QUERY).matches ? 'auto' : 'smooth';

export const scrollToPageTop = () => {
  window.scrollTo({ top: 0, behavior: getAccessibleScrollBehavior() });
};

export const resetPageScroll = () => {
  const root = document.documentElement;
  const body = document.body;
  const previousRootBehavior = root.style.scrollBehavior;
  const previousBodyBehavior = body.style.scrollBehavior;

  root.style.scrollBehavior = 'auto';
  body.style.scrollBehavior = 'auto';
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  root.scrollTop = 0;
  body.scrollTop = 0;

  if (previousRootBehavior) {
    root.style.scrollBehavior = previousRootBehavior;
  } else {
    root.style.removeProperty('scroll-behavior');
  }

  if (previousBodyBehavior) {
    body.style.scrollBehavior = previousBodyBehavior;
  } else {
    body.style.removeProperty('scroll-behavior');
  }
};

export const scrollElementIntoView = (element: Element) => {
  element.scrollIntoView({ behavior: getAccessibleScrollBehavior(), block: 'start' });
};

export function useGsapPageEntrance(scope: MotionScope) {
  useLayoutEffect(() => {
    const root = scope.current;
    if (!root) return;

    const media = gsap.matchMedia();

    media.add(MOTION_ALLOWED_QUERY, () => {
      const context = gsap.context(() => {
        const heroItems = gsap.utils.toArray<HTMLElement>('[data-motion-hero]', root);

        if (heroItems.length > 0) {
          gsap.fromTo(
            heroItems,
            { opacity: 0, y: 18, scale: 1.012 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.78,
              stagger: 0.085,
              ease: 'power2.out',
              clearProps: CLEAR_MOTION_PROPS,
            },
          );
        }

        const revealItems = gsap.utils.toArray<HTMLElement>('[data-motion-reveal]', root);
        revealItems.forEach((element) => {
          const startsEarly = element.dataset.motionStart === 'early';

          gsap.fromTo(
            element,
            { opacity: 0, y: 22 },
            {
              opacity: 1,
              y: 0,
              duration: 0.82,
              ease: 'power2.out',
              clearProps: CLEAR_MOTION_PROPS,
              scrollTrigger: {
                trigger: element,
                start: startsEarly ? 'top 96%' : 'top 86%',
                once: true,
              },
            },
          );
        });

        const groups = gsap.utils.toArray<HTMLElement>('[data-motion-group]', root);
        groups.forEach((group) => {
          const items = Array.from(group.children).filter(
            (child): child is HTMLElement => child instanceof HTMLElement,
          );
          const isFastGroup = group.dataset.motionGroup === 'fast';
          const startsEarly = group.dataset.motionStart === 'early';

          if (items.length === 0) return;

          gsap.fromTo(
            items,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: isFastGroup ? 0.54 : 0.62,
              delay: isFastGroup ? 0.06 : 0.08,
              stagger: { each: isFastGroup ? 0.06 : 0.07, from: 'start' },
              ease: 'power2.out',
              clearProps: CLEAR_MOTION_PROPS,
              scrollTrigger: {
                trigger: group,
                start: startsEarly ? 'top 96%' : 'top 88%',
                once: true,
              },
            },
          );
        });
      }, root);

      const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        window.cancelAnimationFrame(refreshFrame);
        context.revert();
      };
    });

    return () => media.revert();
  }, [scope]);
}

export function useGsapDynamicEntrance(
  scope: MotionScope,
  selector: string,
  changeKey: DynamicKey,
) {
  useLayoutEffect(() => {
    const root = scope.current;
    if (!root) return;

    const media = gsap.matchMedia();

    media.add(MOTION_ALLOWED_QUERY, () => {
      const elements = gsap.utils.toArray<HTMLElement>(selector, root);
      if (elements.length === 0) return;

      const animation = gsap.fromTo(
        elements,
        { opacity: 0, y: 8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.34,
          stagger: 0.045,
          ease: 'power2.out',
          clearProps: CLEAR_MOTION_PROPS,
        },
      );

      return () => animation.revert();
    });

    return () => media.revert();
  }, [scope, selector, changeKey]);
}

export function useGsapDialogEntrance(scope: MotionScope, isOpen: boolean) {
  useLayoutEffect(() => {
    const overlay = scope.current;
    if (!overlay || !isOpen) return;

    const media = gsap.matchMedia();

    media.add(MOTION_ALLOWED_QUERY, () => {
      const panel = overlay.querySelector<HTMLElement>('[data-motion-dialog-panel]');
      const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } });

      timeline.fromTo(
        overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, clearProps: 'opacity' },
      );

      if (panel) {
        timeline.fromTo(
          panel,
          { opacity: 0, y: 12, scale: 0.985 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.36,
            clearProps: CLEAR_MOTION_PROPS,
          },
          0.03,
        );
      }

      return () => timeline.revert();
    });

    return () => media.revert();
  }, [scope, isOpen]);
}
