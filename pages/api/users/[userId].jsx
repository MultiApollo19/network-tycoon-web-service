import {supabase} from "@/lib/supabase"

export default async function handler (req, res) {
    const {userId} = req.query

  try {
    
    const response = await supabase.from('users').select('*',{ count: 'exact' }).match({nickname: userId})
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