import { APP_CONFIG } from './constants';

export const SOCIAL_LINKS = {
  linkedin: APP_CONFIG.social.linkedin,
} as const;

export function openSocialLink(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}