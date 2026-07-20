import { Alert, Box, Button, TextField } from "@mui/material"
import emailjs from '@emailjs/browser';
import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";


export default function ContactForm() {
    const { t } = useTranslation();
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    useEffect(() => {
        emailjs.init({
            publicKey: import.meta.env.VITE_REACT_APP_PUBLIC_KEY,
            blockHeadless: true,
            blockList: {
                list: ['foo@emailjs.com', 'bar@emailjs.com'],
                watchVariable: 'email',
            },
            limitRate: {
                id: 'app',
                throttle: 10000,
            },
        });
    }, []);

    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;

        const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
        const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;

        if (!serviceId || !templateId || !import.meta.env.VITE_REACT_APP_PUBLIC_KEY) {
            setStatus("error");
            return;
        }

        setStatus("sending");
        emailjs.sendForm(
            serviceId,
            templateId,
            form.current
        ).then(
            () => {
                setStatus("success");
                form.current?.reset();
            },
            () => {
                setStatus("error");
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
            {status === "success" && <Alert severity="success">Mensaje enviado correctamente.</Alert>}
            {status === "error" && <Alert severity="error">No se pudo enviar el mensaje. Intentalo de nuevo mas tarde.</Alert>}
            <Button type="submit" variant="contained" color="primary" disabled={status === "sending"}>
                {status === "sending" ? "Enviando..." : t("send")}
            </Button>
        </Box>
    );
}
