import Link from 'next/link';

export default function Dashboard() {
    return (
        <>
            <h1>Hello, Dashboard!</h1>

            <Link href="/">
                <button>Go to Home</button>
            </Link>
        </>
        
    )
}