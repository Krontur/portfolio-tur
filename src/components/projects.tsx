import Grid from "@mui/material/Grid";
import ProjectCard from "./projectcard";
import { Box, Typography } from "@mui/material";


export default function Projects() {
    return (
    <div id="proyectos" style={{ textAlign: 'center', padding: '30px 20px' }}>
            <Box sx={{ p: 2 }}>
                <Typography variant="h3" color="text.primary" sx={{ textAlign: 'center', margin: 3 }}>Proyectos</Typography>
                <Typography variant="body1" color="text.primary">
                    Aquí puedes ver algunos de mis proyectos más destacados:
                </Typography>
            </Box>
            <Grid container spacing={2} justifyContent="center" alignItems="stretch">
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key="project1" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ProjectCard
                        title="Webapp para generar pedidos"
                        description="Una aplicación web para gestionar y hacer el seguimiento de pedidos centralizados del departamento de electrotecnia del aeropuerto de Leipzig/Halle."
                        imagepath="/images/projectOrders.png"
                        githuburl="https://github.com/Krontur/warehouse.git"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key="project2" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ProjectCard
                        title="Actualización de software AMS"
                        description="Proyecto de actualización del sistema de acoplamiento aeroportuario del aeropuerto de Leipzig/Halle."
                        imagepath="/images/projectAMS.png"
                        githuburl={null}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key="project3" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ProjectCard
                        title="TFG Backend Energy Tracker"
                        description="Backend del proyecto para la gestión y recolección de consumos energéticos de la red de contadores eléctricos del aeropuerto de Leipzig/Halle"
                        imagepath="/images/projectEnergyTracker.png"
                        githuburl="https://github.com/Krontur/energytracker.git"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key="project4" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ProjectCard
                        title="TFG Frontend Energy Tracker"
                        description="Frontend del proyecto para la gestión y recolección de consumos energéticos de la red de contadores eléctricos del aeropuerto de Leipzig/Halle"
                        imagepath="/images/projectFrontendEnergyTracker.png"
                        githuburl="https://github.com/Krontur/energytracker_frontend.git"
                    />
                </Grid>
            </Grid>
        </div>
    );
}
