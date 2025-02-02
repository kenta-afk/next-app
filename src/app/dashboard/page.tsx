import Link from 'next/link';

export default function Dashboard() {
    return (
        <>
            <h1>Hello, Dashboard!</h1>

            <button><Link href="/">Go to Home</Link></button>
        </>
        
    )
}