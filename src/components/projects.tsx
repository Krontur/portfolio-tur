import Grid from "@mui/material/Grid";
import ProjectCard from "./projectcard";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";


export default function Projects() {
    const { t } = useTranslation();

    return (
    <div id="proyectos" style={{ textAlign: 'center', padding: '30px 20px' }}>
            <Box sx={{ p: 2 }}>
                <Typography variant="h2" color="text.primary" sx={{ textAlign: 'center', margin: 3 }}>{t("projects")}</Typography>
                <Typography variant="body1" color="text.primary">
                    {t("here-you-can-see-some-of-my-projects")}
                </Typography>
            </Box>
            <Grid container spacing={2} justifyContent="center" alignItems="stretch">
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key="project1" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ProjectCard
                        title={t("webapp-to-generate-orders")}
                        description={t("webapp-to-generate-orders-description")}
                        imagepath="/images/projectOrders.png"
                        githuburl="https://github.com/Krontur/warehouse.git"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key="project2" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ProjectCard
                        title={t("software-ams-update")}
                        description={t("software-ams-update-description")}
                        imagepath="/images/projectAMS.png"
                        githuburl={null}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key="project3" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ProjectCard
                        title={t("tfg-backend-energy-tracker")}
                        description={t("tfg-backend-energy-tracker-description")}
                        imagepath="/images/projectEnergyTracker.png"
                        githuburl="https://github.com/Krontur/energytracker.git"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key="project4" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ProjectCard
                        title={t("tfg-frontend-energy-tracker")}
                        description={t("tfg-frontend-energy-tracker-description")}
                        imagepath="/images/projectFrontendEnergyTracker.png"
                        githuburl="https://github.com/Krontur/energytracker_frontend.git"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key="project5" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ProjectCard
                        title={t("portfolio-cv-tur")}
                        description={t("portfolio-cv-tur-description")}
                        imagepath="/images/portfoliotur.png"
                        githuburl="https://github.com/Krontur/portfolio-tur.git"
                    />
                </Grid>
            </Grid>
        </div>
    );
}
