import React from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

function NavigationLinks() {
    return (
        <Grid container className="navigation-links" item xs={12}>
            <Link
                className="nav-link w-nav-link"
                href="#home"
                color="inherit"
                underline="none"
            >
                Home
            </Link>
            <Link
                className="nav-link w-nav-link"
                href="#about"
                color="inherit"
                underline="none"
            >
                About
            </Link>
            <Link
                className="nav-link w-nav-link"
                href="#service"
                color="inherit"
                underline="none"
            >
                Services
            </Link>
            <Link
                className="nav-link w-nav-link"
                href="https://app.interviewvector.com/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="none"
            >
                Log In
            </Link>
            <Link
                className="nav-link button w-nav-link"
                href="#form"
                color="inherit"
                underline="none"
            >
                Get In Touch
            </Link>
        </Grid>
    );
}

function NavigationDrawer({open, toggleDrawer}) {
    return (
        <Drawer
            anchor="top"
            open={open}
            onClose={toggleDrawer(false)}
            BackdropProps={{ invisible: true }}
        >
            <Grid container item className="navigation-links-mobile">
                <IconButton
                    className="navigation-toggle close"
                    edge="end"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer(false)}
                >
                    <CloseOutlinedIcon />
                </IconButton>

                <NavigationLinks />
            </Grid>
        </Drawer>
    );
};

export default () => {
    const [state, setState] = React.useState({ open: false });
    const toggleDrawer = (open) => () => {
        setState({ ...state, open });
    };

    return (
        <AppBar position="fixed" color="inherit" elevation={0}>
            <Toolbar>
                <Container className="navbar-container">
                    <Grid container className="navbar-menu">
                        <Link className="navbar-brand" href="#">
                            <img
                                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6073439ed222cb39f8564bf9_brand.svg"
                                loading="lazy"
                                alt="InterviewVector Logo"
                            />
                        </Link>

                        <Grid item xs={8} className="navigation-links-desktop">
                            <NavigationLinks />
                        </Grid>

                        <div className="navigation-toggle">
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <NavigationDrawer open={state.open} toggleDrawer={toggleDrawer} />
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    )
};
