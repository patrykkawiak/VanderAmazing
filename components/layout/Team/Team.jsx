import Heading from '@/components/utils/Heading/Heading';
import classes from './Team.module.scss';
import Button from '@/components/UI/Button/Button';
import Image from 'next/image';

const Team = () => {
	return (
		<section className={`${classes.team}`}>
			<div className='wrapper'>
				<div className={classes['team-box']}>
					<article className={classes['team-content']}>
                    <Heading title={'Nasz zespół'} subtitle={'Kim jesteśmy?'} />
						<h3>
							Vander<span className='highlighted'>Amazing</span>Team
						</h3>
						<p>
							Jestesmy Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Veritatis nobis adipisci necessitatibus perferendis, at impedit
							vel, explicabo, maxime deserunt quo ad dolorem perspiciatis
							ducimus nulla! Ut esse consequuntur asperiores maxime? vel, explicabo, maxime deserunt quo ad dolorem perspiciatis
							ducimus nulla! Ut esse consequuntur asperiores maxime?
						</p>
						<div>
							<Button variant={'primary'}>Zobacz się z nami</Button>
						</div>
					</article>
					<Image
						src={'/images/team.png'}
						height={750}
						width={750}
						alt='team photo'
					/>
				</div>
			</div>
		</section>
	);
};

export default Team;
