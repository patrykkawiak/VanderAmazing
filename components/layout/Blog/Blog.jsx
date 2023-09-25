import Heading from '@/components/utils/Heading/Heading';
import classes from './Blog.module.scss';
import PostLists from './Posts-list/PostsList';
import Link from 'next/link';
import Button from '@/components/UI/Button/Button';

const Blog = () => {
	return (
		<section className={`${classes.blog}`} id='blog'>
			<div className='wrapper'>
				<Heading subtitle={'Co nowego?'} title={'Aktualności'} />
				<PostLists />
			</div>
			<p className='flex justify-center mt-[4rem]'>
				<Button variant={'secondary'}>
					<Link href={'/blog'}>Check all Posts here!</Link>
				</Button>
			</p>
		</section>
	);
};

export default Blog;
