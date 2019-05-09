import React from "react"
import PropTypes from "prop-types"
import withStyles from "react-jss"

const styles = {
  myButton: {
    color: "green",
  },
}

const HelloWorld = ({ title, classes }) => (
  <div className={classes.myButton}>{title}</div>
)

HelloWorld.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HelloWorld)
