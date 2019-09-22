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
        <title>List of irregular verbs</title>
        <meta name="description" content="Start memorising the list of irregular verbs with Unregel App" />
    </Helmet>
      <div className="containermenu container-fluid">
          <div className="menu-list-verbs">
            <h4 className="h4bleiben"><spanh4>1.</spanh4>bleiben</h4>
            <h4><spanh4>2.</spanh4>essen</h4>
            <h4><spanh4>3.</spanh4>scheiden</h4>
            <h4><spanh4>4.</spanh4>fallen</h4>
            <h4><spanh4>5.</spanh4>finden</h4>
            <h4><spanh4>6.</spanh4>geben</h4>
            <h4><spanh4>7.</spanh4>gehen</h4>
            <h4><spanh4>8.</spanh4>gewinnen</h4>
            <h4><spanh4>9.</spanh4>halten</h4>
            <h4><spanh4>10.</spanh4>heißen</h4>
            <h4><spanh4>11.</spanh4>helfen</h4>
            <h4><spanh4>12.</spanh4>kommen</h4>
            <h4><spanh4>13.</spanh4>lassen</h4>
            <h4><spanh4>14.</spanh4>laufen</h4>
            <h4><spanh4>15.</spanh4>liegen</h4>
            <h4><spanh4>16.</spanh4>nehmen</h4>
            <h4><spanh4>17.</spanh4>sehen</h4>
            <h4><spanh4>18.</spanh4>sitzen</h4>
            <h4><spanh4>19.</spanh4>sprechen</h4>
            <h4><spanh4>20.</spanh4>stehen</h4>
            <h4><spanh4>21.</spanh4>tragen</h4>
            <h4><spanh4>22.</spanh4>tun</h4>
            <h4><spanh4>23.</spanh4>verlieren</h4>
            <h4><spanh4>24.</spanh4>ziehen</h4>      
          </div>
    </div>
    <div className="containerbuttonmenu">
              <button type="submit" onClick={this.goToNextPage} className="btn">Start Playing</button>
          </div>
  </div>);
  }
};
export default Menu;
