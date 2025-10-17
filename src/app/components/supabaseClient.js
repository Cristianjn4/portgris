//      .js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qlqckloyrhpktawxgomm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFscWNrbG95cmhwa3Rhd3hnb21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2NTE2MDcsImV4cCI6MjA3NjIyNzYwN30.EtWwUATxPSdgTUO6y3pnzAYvpvDIwdDC5kLXSwTe1IE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
