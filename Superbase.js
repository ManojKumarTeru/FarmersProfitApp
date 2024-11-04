import { createClient } from "@supabase/supabase-js";

import "react-native-url-polyfill/auto"

const supabaseUrl="https://oxvrpfjhaygduadigukl.supabase.co"
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dnJwZmpoYXlnZHVhZGlndWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2MjY0MjEsImV4cCI6MjA0NjIwMjQyMX0.0JOKfe7x-nDLRGnGPEb0j4yxrG7rZmVVlPz84TuSzag"

export const supabase = createClient(supabaseUrl, supabaseKey);