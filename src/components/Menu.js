import React from "react";
import "./Menu.css";
import {Helmet} from "react-helmet";

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  goToNextPage() {
    this.props.history.push('/irregularverbs/memorize');
    return;
  };

  render() {
    return (<div className="whole-container">
          <Helmet>
        <title>List of irregular verbs</title>
        <meta name="description" content="Start memorising the list of irregular verbs with Unregel App" />
    </Helmet>
      <div className="containermenu container-fluid">
          <div className="menu-list-verbs">
            <h4 className="h4bleiben">bleiben</h4>
            <h4>essen</h4>
            <h4>scheiden</h4>
            <h4>fallen</h4>
            <h4>finden</h4>
            <h4>geben</h4>
            <h4>gehen</h4>
            <h4>gewinnen</h4>
            <h4>halten</h4>
            <h4>heißen</h4>
            <h4>helfen</h4>
            <h4>kommen</h4>
            <h4>lassen</h4>
            <h4>laufen</h4>
            <h4>liegen</h4>
            <h4>nehmen</h4>
            <h4>sehen</h4>
            <h4>sitzen</h4>
            <h4>sprechen</h4>
            <h4>stehen</h4>
            <h4>tragen</h4>
            <h4>tun</h4>
            <h4>verlieren</h4>
            <h4>ziehen</h4>      
          </div>
    </div>
    <div className="containerbuttonmenu">
              <button type="submit" onClick={this.goToNextPage} className="btn">Start Playing</button>
          </div>
  </div>);
  }
};
export default Menu;
