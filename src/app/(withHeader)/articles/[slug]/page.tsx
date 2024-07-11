export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params
    return <>{slug}</>
}
