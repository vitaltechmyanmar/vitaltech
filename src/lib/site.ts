import { contactChannels, industries, insights, pageMetadata, services, siteName, siteUrl } from '../content/site';
import type { ContactChannel, Industry, IndustryRoutePath, Insight, InsightRoutePath, PageMetadata, PagePath, RoutePath, Service, ServiceRoutePath } from '../types/site';

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

  if (pathname.startsWith('/industries/')) {
    return '/industries';
  }

  if (pathname.startsWith('/insights/')) {
    return '/insights';
  }

  return pathname as RoutePath;
}

export function getIndustryPath(industry: Industry): IndustryRoutePath {
  return `/industries/${industry.id}`;
}

export function getIndustryById(id: string): Industry | undefined {
  return industries.find((industry) => industry.id === id);
}

export function getIndustryMetadata(industry: Industry): PageMetadata {
  const description = industry.metaDescription ?? industry.summary;
  return {
    title: industry.metaTitle ?? `${industry.title} | ${siteName}`,
    description,
  };
}

export function getInsightPath(insight: Insight): InsightRoutePath {
  return `/insights/${insight.slug}`;
}

export function getInsightMetadata(insight: Insight): PageMetadata {
  const description = insight.metaDescription ?? insight.summary;
  return {
    title: `${insight.title} | ${siteName}`,
    description,
    ogType: 'article',
  };
}
