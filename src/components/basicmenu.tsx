import React, { useState } from "react";
import { MenuItem, Menu } from "@mui/material";
import Button from '@mui/material/Button';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useTranslation } from "react-i18next";

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { t } = useTranslation();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={ open ? "basic-menu" : undefined }
                aria-haspopup="true"
                aria-expanded={ open ? "true" : undefined }
                onClick={handleClick}
            >
                <DehazeIcon 
                    sx={{ color: 'white' }}
                />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} component="a" href="#inicio">{t("start")}</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="#sobre-mi">{t("aboutme")}</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="#habilidades-tecnicas">{t("technicalskills")}</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="#proyectos">{t("projects")}</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="#educacion">{t("education")}</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="#experiencia-laboral">{t("experience")}</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="#contacto">{t("contact")}</MenuItem>
            </Menu>
        </div>
    );
}