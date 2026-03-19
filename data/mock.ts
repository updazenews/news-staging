import type { Article, Job, User } from '@/lib/types';

export const mockUsers: User[] = [
  { id: '1', email: 'admin@updaze.com', role: 'superadmin' },
  { id: '2', email: 'publisher@updaze.com', role: 'publisher' },
  { id: '3', email: 'recruiter@sebenza.com', role: 'recruiter' }
];

export const mockArticles: Article[] = [
  {
    id: 'a1',
    title: 'Election Roadmap Announced',
    content: 'National election commission released updated schedules and transparency guidelines.',
    category: 'Politics',
    createdAt: '2026-03-17'
  },
  {
    id: 'a2',
    title: 'Community Crime Watch Expansion',
    content: 'Local communities rolled out additional night patrol and support programs.',
    category: 'Crime',
    createdAt: '2026-03-16'
  }
];

export const mockJobs: Job[] = [
  {
    id: 'j1',
    title: 'Frontend Engineer',
    company: 'Sebenza Labs',
    description: 'Build high quality recruitment experiences with Next.js and TypeScript.',
    createdAt: '2026-03-18'
  },
  {
    id: 'j2',
    title: 'Content Editor',
    company: 'Updaze News',
    description: 'Review and publish editorial stories with SEO best practices.',
    createdAt: '2026-03-15'
  }
];

export const recentActivity = [
  'Published article: Election Roadmap Announced',
  'Created job: Frontend Engineer',
  'Assigned role recruiter to recruiter@sebenza.com'
];
