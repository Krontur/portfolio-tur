import React, { useState } from "react";
import { MenuItem, Menu } from "@mui/material";
import Button from '@mui/material/Button';
import DehazeIcon from '@mui/icons-material/Dehaze';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

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
                <MenuItem onClick={handleClose} component="a" href="#inicio">Inicio</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="#sobre-mi">Sobre mi</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="#habilidades-tecnicas">Habilidades técnicas</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="#proyectos">Proyectos</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="#educacion">Educación</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="#experiencia-laboral">Experiencia laboral</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="#contacto">Contacto</MenuItem>
            </Menu>
        </div>
    );
}