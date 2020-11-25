import { createStyles, Grid, Theme, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

import MediaCard from "./MediaCard"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grid: {
            marginTop: 15,
        },
        reptile: {
            margin: "auto",
            width: 400
        },
        p: {
            marginTop: 15,
            marginBottom: 15,
        }
    }),
);

export default function Content () {
    const classes = useStyles();

    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.grid}
            >
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Typography variant="h3">Descriptio huc veniat</Typography>

                        <Typography variant="p" component="p" className={classes.p}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur ipsum urna, eget bibendum tellus scelerisque sit amet. Donec varius cursus placerat. Curabitur a interdum purus. Phasellus neque eros, dignissim sit amet sagittis vel, hendrerit id nulla. Mauris eget sem at ligula maximus interdum. Aenean commodo, sapien sit amet auctor accumsan, turpis quam eleifend odio, a maximus quam massa at justo. Maecenas sollicitudin non turpis et eleifend. Proin nisi lectus, aliquet nec auctor at, consectetur ornare velit. Proin et pellentesque dolor, et fringilla magna. Phasellus pretium ullamcorper nisl non sodales. Nulla porta justo a massa auctor, eu placerat tellus finibus. Vestibulum in tempor enim.
                        </Typography>

                        <Typography variant="p" component="p" className={classes.p}>
                            <div className={classes.reptile}>
                                <MediaCard />
                            </div>
                        </Typography>

                        <Typography variant="p" component="p" className={classes.p}>
                            Integer tincidunt dolor ut rhoncus pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras blandit placerat augue sit amet sagittis. Praesent porta ipsum vitae consectetur maximus. Cras vel lectus purus. Sed ultrices, metus porta blandit blandit, ligula nisi imperdiet velit, vitae consequat nulla lectus eu velit. Phasellus eget sollicitudin nisl. Vivamus imperdiet odio id magna semper, eu sollicitudin diam euismod.
                        </Typography>
                        <Typography variant="p" component="p" className={classes.p}>
                            Maecenas pharetra molestie velit, eu volutpat turpis porttitor id. Integer ut bibendum augue, vel finibus ex. Vestibulum auctor, erat quis tristique commodo, odio leo sollicitudin orci, ac iaculis orci nunc a tortor. Praesent bibendum vel libero nec convallis. Phasellus erat orci, condimentum at ornare ac, fringilla id nunc. Vestibulum ac nisl imperdiet, egestas dolor et, porta elit. Quisque iaculis sodales mi, non porttitor eros. Aliquam facilisis urna id accumsan dignissim. Etiam lacinia hendrerit justo, ut placerat risus dapibus maximus. In vitae velit sit amet ligula eleifend volutpat sit amet nec metus. Quisque sodales nibh a nunc lacinia, dignissim pretium diam tempor.
                        </Typography>
                        <Typography variant="p" component="p" className={classes.p}>
                            Maecenas lacus tortor, rutrum at massa vel, malesuada fermentum orci. Nullam ac fringilla nunc. Integer lorem neque, ullamcorper ac orci eget, lobortis efficitur nunc. Nulla vel purus vestibulum, hendrerit magna non, aliquam dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse iaculis varius ligula, sed facilisis metus varius vel. Nulla in commodo magna. Pellentesque pellentesque velit dui, vel semper velit porttitor ac. Vestibulum commodo sodales magna, nec viverra odio blandit et. Vestibulum tristique suscipit dapibus. Aenean vestibulum eu justo at dapibus.
                        </Typography>
                        <Typography variant="p" component="p" className={classes.p}>
                            Suspendisse a lectus interdum, hendrerit risus pellentesque, rutrum sem. Suspendisse eget rhoncus ante. Nunc ut eleifend eros. Phasellus ultrices augue eget tempus gravida. Sed tincidunt congue turpis, et dapibus nisl auctor ut. Nunc tempus malesuada velit, ut gravida massa. Ut commodo ornare sapien at consequat. Nam commodo egestas quam sed dignissim. Praesent luctus scelerisque lacus, consectetur vestibulum ante tincidunt quis. Duis augue leo, tincidunt nec ex vitae, varius sagittis nibh.
                        </Typography>
                </Grid>
            </Grid>
        </div>
    )
}