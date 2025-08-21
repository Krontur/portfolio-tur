import { Typography } from "@mui/material"


export default function About() {
    return (
        <div id="sobre-mi" style={{ textAlign: 'center', padding: '50px' }}>
            <Typography variant="h2" sx={{ textAlign: 'center', margin: 3 }}>Sobre mí</Typography>
            <Typography variant="body1" color="text.primary">
                Soy ingeniero informático con base en electrotecnia y he vivido 11 años en Alemania. Soy todavía encargado del 
                departamento de Electrotecnia del Aeropuerto de Leipzig y formador (Ausbilder) de estudiantes de formación 
                profesional dual. He finalizado recientemente la ingeniería informática y he aplicado esa combinación físico-digital
                en proyectos como Energy Tracker (TFG de monitorización y análisis), Warehouse (gestión de pedidos para electrotecnia en LEJ),
                automatización de contadores eléctricos a gran escala y modernización de middleware ActiveMQ↔FTP (Java 3 → Java 11). 
                Busco roles de backend/full-stack o docencia técnica donde aportar software robusto, documentación clara y transferencia de conocimiento.
            </Typography>
        </div>
    );
}
