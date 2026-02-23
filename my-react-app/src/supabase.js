import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://pmhbpklpjntndssiiold.supabase.co"
const supabaseKey = "sb_publishable_k2Hmu0FgwJbPeGc1Pe_yzA_mDqqt6hM"

export const supabase = createClient(supabaseUrl, supabaseKey)