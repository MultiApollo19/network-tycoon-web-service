import {supabase} from "@/lib/supabase"

export default async function handler (req, res) {
  try {
    const response = await supabase.from('users').select();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'max-age=180000');
    res.end(JSON.stringify(response.data));
  }

  catch (error) {
    res.json(error);
    res.status(405).end();
  }
}