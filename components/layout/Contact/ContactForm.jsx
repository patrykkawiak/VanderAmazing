import Button from '@/components/UI/Button/Button';
import classes from './ContactForm.module.scss';

const ContactForm = () => {
	return (
		<form className={classes.form}>
			<div className={classes['form-items']}>
				<div className={classes['form-item']}>
					<label htmlFor='name'>Imię</label>
					<input id='name' type='text' placeholder='Wpisz imię' />
				</div>
				<div className={classes['form-item']}>
					<label htmlFor='surname'>Nazwisko</label>
					<input id='surname' type='text' placeholder='Wpisz nazwisko' />
				</div>
			</div>
			<div className={classes['form-items']}>
				<div className={classes['form-item']}>
					<label htmlFor='email'>Email</label>
					<input id='email' type='email' placeholder='Wpisz email' />
				</div>
				<div className={classes['form-item']}>
					<label htmlFor='phone'>Telefon</label>
					<input id='phone' type='tel' placeholder='Wpisz telefon' />
				</div>
			</div>
			<label htmlFor='message'>Wiadomość</label>
			<textarea id='message' placeholder='Wpisz wiadomość'></textarea>
			<div>
				<Button variant={'primary'}>Wyślij</Button>
			</div>
		</form>
	);
};
export default ContactForm;
