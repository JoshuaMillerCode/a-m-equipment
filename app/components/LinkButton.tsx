import Link from "next/link"

function LinkButton({ href, bg, color, children, target }: { href: string, bg: string, color: string, children: string, target?: string}) {
  return (
    <Link className={`${bg} ${color} py-2 px-6 rounded-full font-semibold transition duration-300`} href={href} target={target}>{ children }</Link>
  )
}

export default LinkButton