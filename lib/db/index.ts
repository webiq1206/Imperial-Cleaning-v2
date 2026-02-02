import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// For serverless environments (Next.js API routes)
// Use neon() HTTP driver instead of Pool for better edge compatibility
const getDatabaseUrl = () => {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.warn('DATABASE_URL not set - database operations will fail');
    return '';
  }
  return url;
};

const sql = neon(getDatabaseUrl());
export const db = drizzle(sql, { schema });

export { schema };
