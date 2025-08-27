import { Typography } from "@mui/material"
import { useTranslation } from "react-i18next";


export default function About() {
    const { t } = useTranslation();
    
    return (
    <div id="sobre-mi" style={{ textAlign: 'center', padding: '40px 20px' }}>
            <Typography variant="h3" sx={{ textAlign: 'center', margin: 3 }}>{t("about-me")}</Typography>
            <Typography variant="body1" color="text.primary">
                {t("i-am-oscar-gonzalez-tur")}
            </Typography>
        </div>
    );
}
 