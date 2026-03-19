export type Article = {
  slug: string;
  category: 'politics' | 'crime' | 'sports';
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export const articles: Article[] = [
  {
    slug: 'politics-budget-talks-advance',
    category: 'politics',
    title: 'Budget Talks Advance After Late-Night Session',
    date: 'March 18, 2026',
    excerpt: 'Lawmakers reported progress as negotiations moved toward a compromise framework.',
    content:
      'Negotiators said several major gaps narrowed overnight, with both sides signaling support for phased spending targets. Committee leaders plan to release draft language this week, followed by public hearings.'
  },
  {
    slug: 'crime-city-task-force-expands',
    category: 'crime',
    title: 'City Task Force Expands Community Safety Program',
    date: 'March 17, 2026',
    excerpt: 'Officials announced additional patrols and youth outreach as part of a prevention strategy.',
    content:
      'The expanded program adds neighborhood liaison officers and grants for evening recreation centers. City officials said the goal is to reduce repeat incidents while improving response coordination across agencies.'
  },
  {
    slug: 'sports-underdogs-win-championship',
    category: 'sports',
    title: 'Underdogs Clinch Championship in Overtime Thriller',
    date: 'March 16, 2026',
    excerpt: 'A dramatic late comeback ended with a decisive score in overtime.',
    content:
      'The team erased a double-digit deficit and forced overtime with a final-minute equalizer. Coaches credited disciplined defense and bench depth for the title run, calling it one of the season\'s defining moments.'
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
