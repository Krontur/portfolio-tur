import { Stack, Typography } from "@mui/material";
import SkillAvatar from "./newavatar"


export default function Skills() {
    return (
    <div id="habilidades-tecnicas" style={{ textAlign: 'center', padding: '30px 20px' }}>
            <Typography variant="h3" component="h1" color="text.primary" sx={{ textAlign: 'center', margin: 3 }}>
                Habilidades técnicas
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ textAlign: 'center', margin: 3 }}>
                Estas son algunas de las tecnologías y herramientas que he utilizado en mis proyectos:
            </Typography>
            <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', rowGap: 2 }}>
                <SkillAvatar alt="Spring Boot" src="/icons/spring.svg" />
                <SkillAvatar alt="Java" src="/icons/java.svg" />
                <SkillAvatar src="/icons/javascript.svg" alt="JavaScript" />
                <SkillAvatar alt="TypeScript" src="/icons/typescript.svg" />
                <SkillAvatar alt="React" src="/icons/react.svg" />
                <SkillAvatar alt="Node.js" src="/icons/nodejs.svg" />
                <SkillAvatar alt="HTML" src="/icons/html.svg" />
                <SkillAvatar alt="CSS" src="/icons/css.svg" />
                <SkillAvatar alt="Git" src="/icons/git.svg" />
                <SkillAvatar alt="Docker" src="/icons/docker.svg" />
                <SkillAvatar alt="PostgreSQL" src="/icons/postgresql.svg" />
                <SkillAvatar alt="MySQL" src="/icons/mysql.svg" />
                <SkillAvatar alt="MongoDB" src="/icons/mongodb.svg" />
                <SkillAvatar alt="RabbitMQ" src="/icons/rabbitmq.svg" />
                <SkillAvatar alt="Firebase" src="/icons/firebase.svg" />
            </Stack>
        </div>
    );
}
