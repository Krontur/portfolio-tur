import { Typography } from "@mui/material"
import CodeBoltLogo from "./coder";


export default function Start() {
    return (
        <div id="inicio" style={{ textAlign: 'center', padding: '10px 20px',  height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h2" color="text.primary">Oscar González Tur</Typography>
                <Typography variant="h4" color="text.primary">Ingeniero Informático y Técnico en Electrotecnia</Typography>
                <CodeBoltLogo size={260} glow />
        </div>
    );
}