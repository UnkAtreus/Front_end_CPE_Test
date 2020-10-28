import React from 'react'
import {
  Route
} from 'react-router-dom'
import {
  connect,
} from 'react-redux'
import {
  setRouteHistory,
} from 'actions'
import {
  MainLayoutContainer,
} from '../../containers'
import HomeContainer from "../HomeContainer"
import PostContainer from "../PostContainer"
import {
  ROUTE_PATH,
} from 'helpers'

export class RouteApp extends React.Component {

  constructor (props) {
    super(props)
    props.setRouteHistory(props.history)
    this.state = {}
  }

  render() {
    return (
      <MainLayoutContainer>
        {/* Use props 'exact' for match single container(not share container) */}
        <Route exact path={ROUTE_PATH.HOME.LINK} component={HomeContainer} />
        <Route exact path={ROUTE_PATH.POSTS.LINK} component={HomeContainer} />
        <Route exact path={ROUTE_PATH.POSTS_ID.LINK} component={PostContainer} />
      </MainLayoutContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRouteHistory: (data) => dispatch(setRouteHistory(data))
  }
}

export const RouteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteApp)