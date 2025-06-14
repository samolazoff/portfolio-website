import './Blog.scss'

const Blog = () => {
    return (
        <section className='page-blog container'>
            <h1 className="title-block">My Blog</h1>
            <ul className="page-blog-wrap">
                <li className="page-blog-post">
                    <time dateTime='2025-06-14' className='page-blog-post__txt page-blog-post__date'>14.06.2025</time>
                    <h3 className="page-blog-post__title">Create mini blog</h3>
                    <p className="page-blog-post__txt">Today I started to create a mini-blog for buisenes. 
                        A main target of this mini-blog is to show all steps my professional growing and comercial
                         layout or building diferentes applications.</p>
                    <p className="page-blog-post__txt">This is my the first post and I hope a next 
                        post will be about started my page in the Internet!
                    </p>
                    <span className="page-blog-post__txt page-blog-post__txt_signature">
                        With the best regrades, Raman Samalazau.
                    </span>
                </li>
                 <li className="page-blog-post">
                    <time dateTime='2025-06-14' className='page-blog-post__txt page-blog-post__date'>14.06.2025</time>
                    <h3 className="page-blog-post__title">TEST</h3>
                    <p className="page-blog-post__txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam, dolor cupiditate optio numquam id eius esse recusandae accusantium sapiente. Itaque soluta error quo voluptas, facere sequi iure atque ad!
                    Dolorum inventore quibusdam quam tenetur ad dolorem nisi, voluptatum possimus praesentium. Beatae corrupti sed dicta porro ipsa alias reprehenderit voluptatem atque! Necessitatibus aut amet cum quasi debitis quas eaque recusandae!</p>
                    <p className="page-blog-post__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae perspiciatis dolorum, nihil quaerat, voluptate deserunt iusto omnis ad repellendus magnam iure quo quisquam amet enim eveniet, iste tenetur voluptatibus minus?
                    Dignissimos excepturi officiis dolore atque molestiae quisquam nobis magnam officia voluptatibus molestias quia ipsa quo error quos similique tempora voluptates doloremque veritatis aliquid nisi distinctio, accusamus consequuntur. Sit, quam doloribus.
                    Quo velit praesentium laborum eius animi eligendi numquam quam itaque perferendis optio porro dolor nostrum quidem impedit obcaecati corporis, nulla aut! Ullam labore possimus repudiandae sequi magni necessitatibus facilis tempore.
                    </p>
                    <span className="page-blog-post__txt page-blog-post__txt_signature">
                        With the best regrades, Raman Samalazau.
                    </span>
                </li>
            </ul>
        </section>
    );
};

export default Blog;