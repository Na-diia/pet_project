import { redirect } from "next/navigation"


export default function DestinationRedirect () {

    redirect('/destination/moon');
    
    return (
        <main >
        </main>
    )
}