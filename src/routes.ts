import { NavigationTab } from './types';

export const ROUTES: Record<NavigationTab, string> = {
  inicio: '/',
  psicologia: '/psicologia-zaragoza/',
  pericardio: '/liberacion-del-pericardio-zaragoza/',
  profesionales: '/apoyo-psicologico-profesionales-ongs/',
  contacto: '/contacto-psicologa-zaragoza/',
};

const TAB_BY_PATH: Record<string, NavigationTab> = Object.fromEntries(
  Object.entries(ROUTES).map(([tab, path]) => [path, tab as NavigationTab]),
) as Record<string, NavigationTab>;

export const tabForPath = (pathname: string): NavigationTab => {
  const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return TAB_BY_PATH[normalizedPath] ?? 'inicio';
};
