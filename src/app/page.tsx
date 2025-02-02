import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>

      <button><Link href="/dashboard">Go to Dashboard</Link></button>
    </>
  )
  

}