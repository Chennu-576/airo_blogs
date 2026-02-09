import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  author: string;
  published_at: string;
  is_featured: boolean;
  is_popular: boolean;
  category: {
    name: string;
    slug: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export async function getPosts(categorySlug?: string) {
  let query = supabase
    .from('posts')
    .select(`
      *,
      category:categories(name, slug)
    `)
    .order('published_at', { ascending: false });

  if (categorySlug) {
    const { data: category } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', categorySlug)
      .single();

    if (category) {
      query = query.eq('category_id', category.id);
    }
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return data as Post[];
}

export async function getPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      category:categories(name, slug)
    `)
    .eq('slug', slug)
    .maybeSingle();

  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }

  return data as Post | null;
}

export async function getFeaturedPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      category:categories(name, slug)
    `)
    .eq('is_featured', true)
    .order('published_at', { ascending: false })
    .limit(3);

  if (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }

  return data as Post[];
}

export async function getPopularPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      category:categories(name, slug)
    `)
    .eq('is_popular', true)
    .order('published_at', { ascending: false })
    .limit(6);

  if (error) {
    console.error('Error fetching popular posts:', error);
    return [];
  }

  return data as Post[];
}

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data as Category[];
}
