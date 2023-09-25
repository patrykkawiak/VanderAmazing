import Post from '../Post/Post';
import classes from './PostLists.module.scss';

const dummy = [
	{
		id: 'p1',
		img: '/posts/post1.jpg',
		title: 'Diablo Gaming Set',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
	},
	{
		id: 'p2',
		img: '/posts/post1.jpg',
		title: 'Diablo Gaming Set',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
	},
];

const PostLists = () => {
	return (
		<ul className={classes.postlist}>
			{dummy.map((post) => {
				return <Post key={post.id} post={post} />;
			})}
		</ul>
	);
};
export default PostLists;
