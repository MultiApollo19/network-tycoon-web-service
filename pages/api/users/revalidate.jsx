const handler = async (req, res) => {
    await res.revalidate("/users");
    return res.send({ revalidated: true });
  };
  
  export default handler;