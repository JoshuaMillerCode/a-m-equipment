import Link from "next/link"

function LinkButton({ href, bg, color, children, xClass }: { href: string, bg: string, color: string, children: string, xClass?: string}) {
  return (
    <Link className={`${bg} ${color} py-2 px-6 rounded-full font-semibold transition duration-300`} href={href}>{ children }</Link>
  )
}

export default LinkButton