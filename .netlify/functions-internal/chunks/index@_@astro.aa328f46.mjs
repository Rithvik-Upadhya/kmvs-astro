export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import './astro.5f1cc39f.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const page = () => import('./prerender.5d380f6e.mjs').then(n => n.i);

export { page };
