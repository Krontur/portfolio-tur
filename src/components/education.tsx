import { Timeline } from "@mui/lab"
import TimelineEducationItem from "./newtimelineitem"
import { Typography } from "@mui/material"
import { useTranslation } from "react-i18next";


export default function Education() {
    const { t } = useTranslation();

    return (
    <div id="educacion" style={{ textAlign: 'center', padding: '40px 20px' }}>
            <Typography variant="h3" color="text.primary" sx={{ textAlign: 'center', margin: 3 }}>{t("education")}</Typography>
            <Typography variant="body1" color="text.primary">{t("here-you-can-see-my-educational-trajectory")}</Typography>
            <Timeline position="alternate" sx={{ margin: "12px 0", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
                <TimelineEducationItem
                    year={2014}
                    title={t("german-course")}
                    company="Die Akademie"
                    description={t("from-level-a1-to-level-a2")}
                />
                <TimelineEducationItem
                    year={2014}
                    title={t("german-courses-up-to-level-c1")}
                    company={t("lbw-aus-und-fortbildungsgesellschaft-mbh")}
                    description={t("from-level-a2-to-level-c1")}
                />
                <TimelineEducationItem
                    year={2014}
                    title={t("technician-in-electrotechnics")}
                    company={t("berufsschulzentrum-7-leipzig")}
                    description={t("dual-training-in-electrotechnics")}
                />
                <TimelineEducationItem
                    year={2018}
                    title={t("computer-engineering")}
                    company={t("universitat-oberta-de-catalunya")}
                    description={t("degree-in-computer-engineering")}
                />
                <TimelineEducationItem
                    year={2024}
                    title={t("trainer-course-for-dual-vocational-training")}
                    company={t("zentrum-fur-aus-und-weiterbildung-leipzig")}
                    description={t("trainer-course-description")}
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
