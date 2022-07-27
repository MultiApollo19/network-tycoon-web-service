import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {

  const router = useRouter();


  useEffect(() =>{
    setTimeout(()=>{
      router.push("/")
    },3000)
  }, [])


  return (
    <div className="not-found bg-blue-800 font-arcade font-normal w-screen h-screen flex flex-col items-center justify-center shadow-md z-50">
      <h1>TORNADO 404</h1>
      <p>Ooops...looks like this page does not exist😢.</p>
      <p>Redirecting to homepage...</p>
    </div>
  );
}
 
export default NotFound;