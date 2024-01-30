import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ol>
        <li><Link className=" hover:text-green-500" href="/week-2">Week 2</Link></li>
        <li><Link className=" hover:text-green-500" href="/week-3">Week 3</Link></li>
        <li><Link className=" hover:text-green-500" href="/week-4">Week 4</Link></li>
      </ol>
    </main>
  );
}