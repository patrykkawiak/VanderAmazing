import Image from 'next/image';
import classes from './Post.module.scss';
import Link from 'next/link';

const Post = (props) => {
	const { title, img, id, desc } = props.post;
	return (
		<li key={id} className={classes.post}>
			<Image
				src={img}
				height={600}
				width={600}
				loading='lazy'
				className={classes['post-img']}
				alt={title}
			/>
			<div className={classes['post-box']}>
				<h3>{title}</h3>
				<p className='text-gray'>{desc}</p>
				<Link href={`/blog/${id}`} className='highlighted'>
					Read More...
				</Link>
			</div>
		</li>
	);
};
export default Post;
