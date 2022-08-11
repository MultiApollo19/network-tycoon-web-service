import {supabase} from "@/lib/supabase"

export default async function (req, res) {
  if(req.method==='GET'){
    try {
      const response = await supabase.from('users').select('*',{ count: 'exact' }).match({nickname: req.query.nickname})
      if(response.data){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end(JSON.stringify(response.data));
      }
      else{
        res.json("User not found");
        res.status(405).end();
      }
      
    }
  
    catch (error) {
      res.json(error);
      res.status(405).end();
    }
  }
  
}