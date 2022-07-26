import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="not-found relative bg-blue-800 font-arcade font-normal w-screen h-screen flex flex-col items-center justify-center shadow-md">
      <h1>TORNADO 404</h1>
      <p>Ooops...looks like this page does not exist😢.</p>
      <p>Go back to the homepage</p>
      <Link href="/"><a>CLICK!</a></Link>
    </div>
  );
}
 
export default NotFound;