import { Avatar, Stack, Tooltip, Typography } from "@mui/material";
import ContactForm from "./contactform";
import { useTranslation } from "react-i18next";


export default function Contact() {
    const { t } = useTranslation();

    return (
    <div id="contacto" style={{ textAlign: 'center', padding: '30px 20px' }}>
            <Typography variant="h2" color="text.primary" sx={{ textAlign: 'center', margin: 3 }}>
                {t("contact")}
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ textAlign: 'center', margin: 3 }}>
                {t("if-you-would-like-to-get-in-touch")}
            </Typography>
            <ContactForm />
            <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', rowGap: 2, margin: 3  }}>
                <Tooltip title="Email: oscar.gtur@gmail.com">
                    <Avatar alt="Email" src="/icons/mail.svg" sx={{ width: 56, height: 56 }} component={'a'} href="mailto:oscar.gtur@gmail.com"/>
                </Tooltip>
                <Tooltip title="LinkedIn: oscargtur">
                    <Avatar alt="LinkedIn" src="/icons/linkedin.svg" sx={{ width: 56, height: 56 }} component={'a'} href="https://www.linkedin.com/in/oscargtur/" target="_blank"/>
                </Tooltip>
                <Tooltip title="GitHub: krontur">
                    <Avatar alt="GitHub" src="/icons/github.svg" sx={{ width: 56, height: 56 }} component={'a'} href="https://github.com/krontur" target="_blank"/>
                </Tooltip>
            </Stack>
        </div>
    );
}
