import { Box, Button, TextField } from "@mui/material"
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useRef } from "react";
import { useTranslation } from "react-i18next";


export default function ContactForm() {
    const { t } = useTranslation();

    emailjs.init({
        publicKey: import.meta.env.VITE_REACT_APP_PUBLIC_KEY,
        // Do not allow headless browsers
        blockHeadless: true,
        blockList: {
            // Block the suspended emails
            list: ['foo@emailjs.com', 'bar@emailjs.com'],
            // The variable contains the email address
            watchVariable: 'userEmail',
        },
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 10s
            throttle: 10000,
        },
        });

    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        emailjs.sendForm(
            import.meta.env.VITE_REACT_APP_SERVICE_ID,
            import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
            form.current
        ).then(
            (result: EmailJSResponseStatus) => {
                alert('message sent successfully...');
                console.log(result.text); 
                form.current?.reset();
            },
            (error: EmailJSResponseStatus) => {
                console.log(error.text);
            }
        );
    };

    return (
        <Box 
            component="form"
            ref={form}
            onSubmit={sendEmail}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '400px', margin: '0 auto', justifyContent: 'center' }}
        >
            <TextField name="name" label={t("name")} variant="outlined" required />
            <TextField name="email" label={t("email")} variant="outlined" type="email" required />
            <TextField name="message" label={t("message")} variant="outlined" multiline rows={4} required />
            <Button type="submit" variant="contained" color="primary">
                {t("send")}
            </Button>
        </Box>
    );
}