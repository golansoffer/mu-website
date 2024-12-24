import {z} from "zod";
import {useForm} from "@tanstack/react-form";
import Button from "../components/buttons/primary/Root";
import {TextInput} from "../components/inputs/text/root";
import styles from './Register.module.css';
import {useRef} from "react";
import {getRandomNumberInRange} from "../utils";

const registrationTitles: string[] = [
    "Forge Your Path",
    "Your Legacy",
    "Enter the Realm",
    "Begin Your Chapter",
    "For Glory",
    "The Journey Begins",
];


export function Register() {
    const index = useRef(getRandomNumberInRange(0, registrationTitles.length - 1));
    return <main className={styles.main}>
        <div className={styles.cubes_animation}/>
        <h1 className={styles.form_title}>
            {registrationTitles[index.current]}
            <span>.</span>
        </h1>
        <RegisterForm/>
    </main>
}

const userSchema = z
    .object({
        username: z.string().min(4, "Username must be at least 4 characters long."),
        password: z.string().min(8, "Password must be at least 8 characters long."),
        confirmPassword: z
            .string()
            .min(8, "Confirm Password must be at least 8 characters long."),
        email: z.string().email("Invalid email address."),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"], // Points the error at `confirmPassword`
        message: "Passwords do not match.",
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