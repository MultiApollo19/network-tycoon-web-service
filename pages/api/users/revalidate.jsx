import { supabase } from "@/lib/supabase";

const handler = async (req, res) => {

    await res.revalidate("/users");
    const response = await supabase.from('users').select();
    const body = response.body;
    if(body){
      for (let i = 0; i < body.length; i++) {
        await res.revalidate(`/users/${body[i].nickname}`);
        
      }
    }

    
    
    


    res.status(200).json({ revalidated: true });
  };
  
  export default handler;