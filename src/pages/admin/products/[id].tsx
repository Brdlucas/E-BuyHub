
export default function UpdateProducts({ props }: any) {
    return (
        <div>
            <p>ss</p>
        </div>
    )

}


// export async function getStaticProps({ params }: any) {
//     const post = await fetch(`http://localhost:3000/api/products/${params._id}`).then(r => r.json())
//     return { props: post.data }
// }


// export async function getStaticPaths() {
//     const posts = await fetch('http://localhost:3000/api/products').then(r => r.json())
//     return {
//         paths: posts.data.map((props: any) => ({
//             params: { id: props._id.toString() }
//         })),
//         fallback: false,
//     }
// }