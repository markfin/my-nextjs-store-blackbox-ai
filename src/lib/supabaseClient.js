import { createClient } from '@supabase/supabase-js'

// Ambil variabel lingkungan
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Inisialisasi dan ekspor client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
