import { BASE_URL } from "../lib/constraints";
export default function debugLogs(){
    return(
        console.log("NEXT_PUBLIC_GITHUB_SECRET", process.env.NEXT_PUBLIC_GITHUB_SECRET),
        console.log("NEXT_PUBLIC_GITHUB_ID", process.env.NEXT_PUBLIC_GITHUB_ID),
        console.log("NEXT_PUBLIC_DATABASE_URL", process.env.NEXT_PUBLIC_DATABASE_URL),
        console.log("NEXT_PUBLIC_API_URL", process.env.NEXT_PUBLIC_API_URL),
        console.log("API_final", BASE_URL)
    )
}