import { Typography } from "@mui/material"
import CodeBoltLogo from "./coder";
import { useTranslation } from "react-i18next";


export default function Start() {
    const { t } = useTranslation();

    return (
        <div id="inicio" style={{ textAlign: 'center', padding: '20px 20px',  height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h2" color="text.primary">Oscar González Tur</Typography>
                <Typography variant="h4" color="text.primary">{t("computer-engineer-and-electrotechnical-technician")}</Typography>
                <CodeBoltLogo size={260} glow />
        </div>
    );
}