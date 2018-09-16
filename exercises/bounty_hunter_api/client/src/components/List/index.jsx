import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounties: []
    };
  }

  componentDidMount() {
    axios
      .get("/bounties")
      .then(res => this.setState({ bounties: res.data }))
      .catch(err => console.error(err));
  }

  deleteBounty = id => {
    axios
      .delete(`/bounty/${id}`)
      .then(res =>
        this.setState({
          bounties: this.state.bounties.filter(v => v.id !== id)
        })
      )
      .catch(err => console.error(err));
  };

  render() {
    return (
      <ul className="bounties">
        {this.state.bounties.map(bounty => (
          <li key={bounty.id} className={`bounty ${bounty.type}`}>
            <Link to={`/bounty/${bounty.id}`} className="bountylink">
              <span className="bountyname">
                {`${bounty.firstName} ${bounty.lastName}`}
              </span>
              <span className="bountyamount">{bounty.bountyAmount} creds</span>
            </Link>
            <button
              className="bountydelete"
              onClick={() => this.deleteBounty(bounty.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
