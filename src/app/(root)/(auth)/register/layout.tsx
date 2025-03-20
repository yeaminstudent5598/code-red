export default function layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* <p className="text-black">Hi</p> */}
            {children}
        </section>
    )
} 