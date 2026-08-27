import { contactChannels, pageMetadata, siteUrl } from '../content/site';
import type { ContactChannel, PageMetadata, RoutePath } from '../types/site';

export function getPageMetadata(pathname: RoutePath): PageMetadata {
  return pageMetadata[pathname];
}

export function getCanonicalUrl(pathname: RoutePath): string {
  return new URL(pathname, siteUrl).toString();
}

export function getContactChannel(id: ContactChannel['id']): ContactChannel {
  const channel = contactChannels.find((item) => item.id === id);

  if (!channel) {
    throw new Error(`Unknown contact channel: ${id}`);
  }

  return channel;
}

export function getContactChannels(): ContactChannel[] {
  return contactChannels;
}
