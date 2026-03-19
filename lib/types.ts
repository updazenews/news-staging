export type Role = 'superadmin' | 'publisher' | 'recruiter';

export type User = {
  id: string;
  email: string;
  role: Role;
};

export type Article = {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
};

export type Job = {
  id: string;
  title: string;
  company: string;
  description: string;
  createdAt: string;
};
