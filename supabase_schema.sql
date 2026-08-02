-- ==============================================================================
-- PlacementPro Supabase Database Schema (Handles 100,000+ Scaled Students)
-- Run this in your Supabase SQL Editor (Dashboard -> SQL Editor -> New Query)
-- ==============================================================================

-- 1. Profiles Table (Auto-synced with Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    role TEXT DEFAULT 'student' CHECK (role IN ('student', 'mentor', 'admin')),
    college TEXT DEFAULT 'Engineering College',
    branch TEXT DEFAULT 'Computer Science',
    target_company TEXT DEFAULT 'TCS / Infosys',
    streak_days INT DEFAULT 1,
    last_active_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. User Progress Table (Stores solved DSA problems & Quiz scores)
CREATE TABLE IF NOT EXISTS public.user_progress (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    category TEXT NOT NULL, -- 'dsa', 'aptitude', 'reasoning', 'mcq', 'projects'
    item_id TEXT NOT NULL,   -- problem id or topic id
    completed BOOLEAN DEFAULT TRUE,
    score INT DEFAULT 0,
    solved_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id, category, item_id)
);

-- 3. Bookmarks & Notes Table
CREATE TABLE IF NOT EXISTS public.user_bookmarks (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    category TEXT NOT NULL,
    item_id TEXT NOT NULL,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id, category, item_id)
);

-- ==============================================================================
-- Enable Row Level Security (RLS) for 100% Data Safety
-- ==============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_bookmarks ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Public profiles are viewable by everyone" 
    ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile" 
    ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Progress Policies
CREATE POLICY "Users can view only their own progress" 
    ON public.user_progress FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert/update their own progress" 
    ON public.user_progress FOR ALL USING (auth.uid() = user_id);

-- Bookmarks Policies
CREATE POLICY "Users can view only their own bookmarks" 
    ON public.user_bookmarks FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own bookmarks" 
    ON public.user_bookmarks FOR ALL USING (auth.uid() = user_id);

-- ==============================================================================
-- Automatic Trigger: When a new user signs up in auth.users, auto-create profile
-- ==============================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, role)
    VALUES (
        new.id,
        new.email,
        COALESCE(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
        COALESCE(new.raw_user_meta_data->>'role', 'student')
    )
    ON CONFLICT (id) DO NOTHING;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Performance Indexes (Optimized for 100k+ Users)
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON public.user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_category ON public.user_progress(category);
CREATE INDEX IF NOT EXISTS idx_user_bookmarks_user_id ON public.user_bookmarks(user_id);
