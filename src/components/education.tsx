import { Timeline } from "@mui/lab"
import TimelineEducationItem from "./newtimelineitem"
import { Typography } from "@mui/material"


export default function Education() {
    return (
        <div id="educacion" style={{ textAlign: 'center', padding: '50px' }}>
            <Typography variant="h2" color="text.primary" sx={{ textAlign: 'center', margin: 3 }}>Educación</Typography>
            <Typography variant="body1" color="text.primary">Aquí puedes ver mi trayectoria educativa:</Typography>
            <Timeline position="alternate" sx={{ margin: "12px 0", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
                <TimelineEducationItem
                    year={2014}
                    title="Curso de alemán"
                    company="Die Akademie"
                    description="Desde nivel A1 hasta nivel A2"
                />
                <TimelineEducationItem
                    year={2014}
                    title="Cursos de alemán hasta nivel C1"
                    company="LBW Aus- und Fortbildungsgesellschaft mbH"
                    description="Desde nivel A2 hasta nivel C1"
                />
                <TimelineEducationItem
                    year={2014}
                    title="Técnico en Electrotecnia"
                    company="Berufsschulzentrum 7 Leipzig"
                    description="Formación profesional dual en técnico en Electrotecnia, especialidad en Energía y Tecnología de
                                    Edificios"
                />
                <TimelineEducationItem
                    year={2018}
                    title="Ingeniería en Informática"
                    company="Universitat Oberta de Catalunya"
                    description="Grado en Ingeniería Informática, especialidad en Computación"
                />
                <TimelineEducationItem
                    year={2024}
                    title="Curso de Formador para Formación Profesional Dual"
                    company="Zentrum für Aus- und Weiterbildung Leipzig"
                    description="Capacitación para formadores en el ámbito de la formación profesional dual"
                />
                <TimelineEducationItem
                    year={2025}
                    title=""
                    company=""
                    description=""
                />
            </Timeline>
        </div>
    );
}
