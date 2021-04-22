
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import './Dashboard.css'
import SearchIcon from '@material-ui/icons/Search';
import Keep from '../../../Assets/keep.png';
import RefreshIcon from '@material-ui/icons/Refresh';
import ViewStreamIcon from '@material-ui/icons/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import { BrowserRouter as Router, Route, Link, Navlink, Switch, withRouter } from 'react-router-dom';
import Notes from '../CreateNote/CreateNote'
import GetNote from '../GetNote/GetNote';
import TrashNotes from '../../TrashNotes/Trash'
import ArchiveNotes from '../../ArchieveNotes/Archieve'
import { PinDropSharp } from '@material-ui/icons';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    emoji: {
        fontSize: "200px",
        display: "flex",
        justifyContent: "center",
    },
    appBar: {
        boxShadow: 'none',
        border: '1px solid #dadce0',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    // appBarShift: {
    //     marginLeft: drawerWidth,
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    menuButton: {
        marginRight: 36,
        opacity: '0.7',
    },
    hide: {
        display: '',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        borderRight: 'none',
    },
    drawerOpen: {
        width: drawerWidth,
        border: 'none',
        paddingLeft: '7px',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,

        }),
    },
    drawerClose: {
        paddingLeft: '7px',
        border: 'none',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
         width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        marginLeft: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));
function icon(index) {
    switch (index) {
        case 0:
            return (<ListItemIcon > <EmojiObjectsIcon /> </ListItemIcon>)
        case 1:
            return <ListItemIcon > <NotificationsNoneIcon /> </ListItemIcon>
        case 2:
            return <ListItemIcon > <EditOutlinedIcon /> </ListItemIcon>
        case 3:
            return <ListItemIcon > <ArchiveOutlinedIcon /> </ListItemIcon>
        case 4:
            return <ListItemIcon > <DeleteOutlinedIcon /> </ListItemIcon>

        default:
            return <ListItemIcon > <MailIcon /> </ListItemIcon>
    }
}

function MiniDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [profile, setProfile] = React.useState(false);
   
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const change = () => {
        setOpen(!open)
    }

    const handleProfile = () => {
        setProfile(!profile)
    }
    function changeContent(e, text) {
        e.stopPropagation();
        switch (text) {
            case 'Trash':
                // props.history.push('/dashboard/trashNotes');
                 window.location.href = "http://localhost:4200/dashboard/trashNotes"
                break;
            case 'Notes':
                // props.history.push('/dashboard');
    
                window.location.href = "http://localhost:4200/dashboard"
                break;
            case 'Archive':
                props.history.push('/dashboard/archiveNotes');
    
                // window.location.href = "http://localhost:4200/dashboard/archiveNotes"
                break;
            default:
                break;
        }
    
    }
    


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                color="red"
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={change}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={Keep} alt="" srcset="" />

                    <Typography variant="h6" noWrap>

                        <span id="f">F</span><span id="o1">u</span><span id="o2">n</span>
                        <span id="d">d</span><span id="o3">oo</span>
                    </Typography>
                    <div className="search">
                        < SearchIcon />
                        <input type="text" aria-label="search" placeholder=" search" />
                    </div>
                    <div className="icons">
                    < AccountCircleIcon onClick={handleProfile} ></ AccountCircleIcon>
                        < RefreshIcon />
                        < ViewStreamIcon />
                        < SettingsOutlinedIcon />
                        < AppsIcon />
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >


                <div className={classes.toolbar}>

                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <List onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}  >
                    {['Notes', 'Reminder', 'Edit labels', 'Archive', 'Trash'].map((text, index) => (
                        <ListItem button key={text} onClick={e => changeContent(e, text)}>
                            {icon(index)}
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className="notes">
                {profile ? <div className="profile">
                    <h2>{localStorage.getItem('FirstName')}  {localStorage.getItem('LastName')} </h2>
                    <p>{localStorage.getItem('Email')}</p>
                    <input type="button" value="Sign Out" />
                </div> : null}

               
                <Router>
                    <Switch>
                        <Route exact path="/dashboard" component={GetNote} ></Route>
                        <Route path="/dashboard/trashNotes" component={TrashNotes} ></Route>
                        <Route path="/dashboard/archiveNotes" component={ArchiveNotes} ></Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default withRouter(MiniDrawer);