import {z} from "zod";
import {useForm} from "@tanstack/react-form";
import Button from "../components/buttons/primary/Root";
import {TextInput} from "../components/inputs/text/root";
import styles from './Register.module.css';

export function Register() {
    return <main className={styles.main}>
        <h1 className={styles.form_title}>
            Register
            <span>.</span>
        </h1>
        <RegisterForm/>
    </main>
}

const userSchema = z.object({
    username: z.string().min(4),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    email: z.string().email(),
});

type User = z.infer<typeof userSchema>

export function RegisterForm() {

    const form = useForm<User>({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: async ({value}) => {
            // Do something with form data
            console.log('success', value);
        },
        validators: {
            onChange: userSchema,
        },
    });

    return (

        <form
            className={styles.form}
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                void form.handleSubmit();
            }}
        >
            <div className={styles.form_container}>
                <form.Field
                    name="username"
                    children={(field) => (
                        <TextInput
                            label={field.name}
                            name={field.name}
                            placeholder={`Enter ${field.name}...`}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={field.handleChange}
                        />
                    )}
                />
                <form.Field
                    name="password"
                    children={(field) => (
                        <TextInput
                            label={field.name}
                            name={field.name}
                            placeholder={`Enter ${field.name}...`}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={field.handleChange}
                        />
                    )}
                />
                <form.Field
                    name="confirmPassword"
                    children={(field) => (
                        <TextInput
                            label={field.name}
                            name={field.name}
                            placeholder={`Confirm password...`}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={field.handleChange}
                        />
                    )}
                />
                <form.Field
                    name="email"
                    children={(field) => (
                        <TextInput
                            label={field.name}
                            name={field.name}
                            placeholder={`Enter ${field.name}...`}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={field.handleChange}
                        />
                    )}
                />
            </div>
            <Button>SUBMIT</Button>
        </form>
    )
}