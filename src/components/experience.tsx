import { Timeline } from "@mui/lab";
import TimelineExperienceItem from "./newtimelineitem";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";


export default function Experience() {
    const { t } = useTranslation();

    return (
    <div id="experiencia-laboral" style={{ textAlign: 'center', padding: '40px 20px' }}>
            <Typography variant="h2" color="text.primary" sx={{ textAlign: 'center', margin: 3 }}>{t("experience")}</Typography>
            <Typography variant="body1" color="text.primary">{t("here-you-can-see-my-work-experience")}</Typography>
            <Timeline position="alternate" sx={{ margin: "12px 0", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
                <TimelineExperienceItem
                    year={`${t("january-2026")} - ${t("today")}`}
                    title={t("backend-developer")}
                    company="Seresco"
                    description={t("backend-developer-seresco-description")}
                />
                <TimelineExperienceItem
                    year="2021 - 2025"
                    title={t("project-coordinator-and-technical-manager-in-electricity-supply-and-networks")}
                    company="Flughafen Leipzig/Halle GmbH"
                    description={t("project-coordinator-and-technical-manager-in-electricity-supply-and-networks-description")}
                />
                <TimelineExperienceItem
                    year="2017 - 2021"
                    title={t("technical-supervisor-in-electrotechnics")}
                    company="Elektromontagen Leipzig GmbH"
                    description={t("technical-supervisor-in-electrotechnics-description")}
                />
                <TimelineExperienceItem
                    year="2014 - 2017"
                    title={t("dual-professional-training")}
                    company="Elektromontagen Leipzig GmbH"
                    description={t("dual-professional-training-description")}
                />
                <TimelineExperienceItem
                    year="2013 - 2014"
                    title={t("home-assistance-installation-technician")}
                    company="Cruz Roja"
                    description={t("home-assistance-installation-technician-description")}
                />
                <TimelineExperienceItem
                    year="2008 - 2013"
                    title={t("technician-in-computer-science")}
                    company="Informática Tur"
                    description={t("technician-in-computer-science-description")}
                />
                <TimelineExperienceItem
                    year="2001 - 2008"
                    title = {t("carpenter-official-2nd-class")}
                    company="Maderas Servera"
                    description = {t("carpenter-official-2nd-class-description")}
                    showConnector={false}
                />
            </Timeline>
        </div>
    );
}
