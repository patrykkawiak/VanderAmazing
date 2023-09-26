import Heading from '@/components/utils/Heading/Heading';
import classes from './Members.module.scss';
import Member from './Member';

const dummy = [
	{
		id: 'm1',
		name: 'Mario Rogerson',
		vacancy: 'game tester',
		desc: 'To jest Mario, w naszej firmie to właśnie on sprawdza czy każda gra spełnia oczekiwania',
		img: '/images/member.jpg',
	},
	{
		id: 'm2',
		name: 'Mario Rogerson',
		vacancy: 'game tester',
		desc: 'To jest Mario, w naszej firmie to właśnie on sprawdza czy każda gra spełnia oczekiwania',
		img: '/images/member.jpg',
	},
	{
		id: 'm3',
		name: 'Mario Rogerson',
		vacancy: 'game tester',
		desc: 'To jest Mario, w naszej firmie to właśnie on sprawdza czy każda gra spełnia oczekiwania',
		img: '/images/member.jpg',
	},
	{
		id: 'm4',
		name: 'Mario Rogerson',
		vacancy: 'game tester',
		desc: 'To jest Mario, w naszej firmie to właśnie on sprawdza czy każda gra spełnia oczekiwania',
		img: '/images/member.jpg',
	},
];

const Members = () => {
	return (
		<section className={`wrapper section-padding ${classes.members}`}>
			<Heading title={'Personel'} subtitle={'Kim jesteśmy?'} />
			<ul className={classes['members-list']}>
				{dummy.map((member) => {
					return <Member key={member.id} member={member} />;
				})}
			</ul>
		</section>
	);
};

export default Members;
