import { contactChannels, pageMetadata, services, siteName, siteUrl } from '../content/site';
import type { ContactChannel, PageMetadata, PagePath, RoutePath, Service, ServiceRoutePath } from '../types/site';

export function getPageMetadata(pathname: RoutePath): PageMetadata {
  return pageMetadata[pathname];
}

export function getCanonicalUrl(pathname: PagePath): string {
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

export function getServicePath(service: Service): ServiceRoutePath {
  return `/services/${service.id}`;
}

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getServiceMetadata(service: Service): PageMetadata {
  const description =
    service.metaDescription ??
    `${service.summary} ${service.outcome}`.trim();

  return {
    title: service.metaTitle ?? `${service.title} | ${siteName}`,
    description,
  };
}

export function getActiveRoutePath(pathname: PagePath): RoutePath {
  if (pathname.startsWith('/services/')) {
    return '/services';
  }

  return pathname as RoutePath;
}
