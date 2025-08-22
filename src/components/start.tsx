import { Typography } from "@mui/material"
import CodeBoltLogo from "./coder";


export default function Start() {
    return (
        <div id="inicio"
            style={{
                textAlign: 'center',
                padding: '16px',
                paddingLeft: '4vw',
                paddingRight: '4vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography
                variant="h2"
                color="text.primary"
                sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, fontWeight: 700 }}
            >
                Oscar González Tur
            </Typography>
            <Typography
                variant="h3"
                color="text.primary"
                sx={{ fontSize: { xs: '1.2rem', sm: '2rem', md: '2.5rem' }, fontWeight: 500 }}
            >
                Ingeniero Informático y Técnico en Electrotecnia
            </Typography>
            <CodeBoltLogo size={260} glow />
        </div>
    );
}