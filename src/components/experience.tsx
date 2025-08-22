import { Timeline } from "@mui/lab";
import TimelineExperienceItem from "./newtimelineitem";
import { Typography } from "@mui/material";


export default function Experience() {
    return (
        <div id="experiencia-laboral"
            style={{
                textAlign: 'center',
                padding: '16px',
                paddingLeft: '4vw',
                paddingRight: '4vw'
            }}
        >
            <Typography variant="h2" color="text.primary" sx={{ textAlign: 'center', margin: 3 }}>Experiencia laboral</Typography>
            <Typography variant="body1" color="text.primary">Aquí puedes ver mi experiencia laboral:</Typography>
            <Timeline position="alternate" sx={{ margin: "12px 0", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
                <TimelineExperienceItem
                    year={2001}
                    title="Carpintero Oficial de 2ª"
                    company="Maderas Servera"
                    description="Carpintero, dependiente, comercial, gestión de pedidos, recepción de mercancías, introducción de datos al sistema."
                />
                <TimelineExperienceItem
                    year={2008}
                    title="Técnico informático"
                    company="Informática Tur"
                    description="Servicio técnico Informática para particulares y pequeñas empresas.
                                    Asistencia Remota.
                                    Asesoramiento técnico y comercial."
                />
                <TimelineExperienceItem
                    year={2013}
                    title="Técnico Instalación de asistencia domiciliaria."
                    company="Técnico Instalación de asistencia domiciliaria."
                    description="Instalación y programación de dispositivos de teleasistencia domiciliaria."
                />
                <TimelineExperienceItem
                    year={2014}
                    title="Formación profesional Dual"
                    company="Elektromontagen Leipzig GmbH"
                    description="Formación Profesional Dual: Técnico en Electrotecnia, especialidad
                                    en Energía y Tecnología de Edificios"
                />
                <TimelineExperienceItem
                    year={2017}
                    title="Encargado Técnico en electrotecnia"
                    company="Elektromontagen Leipzig GmbH"
                    description="Encargado Técnico en electrotecnia:
                                    Experiencia en: Viviendas, aeropuertos e industria"
                />
                <TimelineExperienceItem
                    year={2021}
                    title="Coordinador de proyectos y gestor técnico en suministro eléctrico
                            y redes"
                    company="Aeropuerto de Leipzig/Halle"
                    description="Gestión de reparaciones y mantenimiento de instalaciones eléctricas y redes, 
                                así como supervisión de equipos de trabajo y coordinación de proyectos técnicos."
                />
                <TimelineExperienceItem
                    year={"hoy"}
                    title=""
                    company=""
                    description=""
                />
            </Timeline>
        </div>
    );
}
