import Heading from '@/components/utils/Heading/Heading';
import classes from './Contact.module.scss';
import ContactForm from './ContactForm';
import Image from 'next/image';
const Contact = () => {
	return (
		<section className={`${classes.contact} wrapper section-padding`}>
			<Heading title={'Napisz do nas'} subtitle={'Q&A'} />
			<div className={classes['contact-content']}>
				<ContactForm />
				<Image
					src={'/images/contact.png'}
					width={550}
					height={650}
					alt='contact img'
				/>
			</div>
		</section>
	);
};
export default Contact;
