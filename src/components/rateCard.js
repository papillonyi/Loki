import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function RateCard({classes, rate, tscur}) {
    // const { classes } = props;
    // const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {rate}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {tscur}
                </Typography>
            </CardContent>
        </Card>
    );
}

RateCard.propTypes = {
    classes: PropTypes.object.isRequired,
    tscur: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
};

export default withStyles(styles)(RateCard);