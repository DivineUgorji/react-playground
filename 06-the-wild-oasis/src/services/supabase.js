import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://phgyogsieafrszckykjp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoZ3lvZ3NpZWFmcnN6Y2t5a2pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0ODE1MDYsImV4cCI6MjA3NzA1NzUwNn0.yHkgvZqMj5YCFgNiztbzeppa7MMsaRh6kMHQFnSqaTQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
