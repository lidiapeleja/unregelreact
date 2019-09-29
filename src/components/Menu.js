import React from "react";
import "./Menu.css";
import {Helmet} from "react-helmet";

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  goToNextPage() {
    this.props.history.push('/loading');
    return;
  };

  render() {
    return (<div className="whole-container">
          <Helmet>
        <meta name="description" content="Start memorising the list of irregular verbs with Unregel App" />
    </Helmet>
      <div className="containermenu container-fluid">
          <div className="menu-list-verbs">
            <h4 className="h4bleiben"><span className="spanh4">1.</span>bleiben</h4>
            <h4><span className="spanh4">2.</span>essen</h4>
            <h4><span className="spanh4">3.</span>scheiden</h4>
            <h4><span className="spanh4">4.</span>fallen</h4>
            <h4><span className="spanh4">5.</span>finden</h4>
            <h4><span className="spanh4">6.</span>geben</h4>
            <h4><span className="spanh4">7.</span>gehen</h4>
            <h4><span className="spanh4">8.</span>gewinnen</h4>
            <h4><span className="spanh4">9.</span>halten</h4>
            <h4><span className="spanh4">10.</span>heißen</h4>
            <h4><span className="spanh4">11.</span>helfen</h4>
            <h4><span className="spanh4">12.</span>kommen</h4>
            <h4><span className="spanh4">13.</span>lassen</h4>
            <h4><span className="spanh4">14.</span>laufen</h4>
            <h4><span className="spanh4">15.</span>liegen</h4>
            <h4><span className="spanh4">16.</span>nehmen</h4>
            <h4><span className="spanh4">17.</span>sehen</h4>
            <h4><span className="spanh4">18.</span>sitzen</h4>
            <h4><span className="spanh4">19.</span>sprechen</h4>
            <h4><span className="spanh4">20.</span>stehen</h4>
            <h4><span className="spanh4">21.</span>tragen</h4>
            <h4><span className="spanh4">22.</span>tun</h4>
            <h4><span className="spanh4">23.</span>verlieren</h4>
            <h4><span className="spanh4">24.</span>ziehen</h4>      
          </div>
    </div>
    <div className="containerbuttonmenu">
              <button type="submit" onClick={this.goToNextPage} className="btn">Start Playing</button>
          </div>
  </div>);
  }
};
export default Menu;
