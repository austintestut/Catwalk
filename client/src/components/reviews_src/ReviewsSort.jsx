import React from 'react';

class ReviewsSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'relevance',
    };
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(e) {
    e.preventDefault();
    this.setState({ sort: e.target.value });
  }

  render() {
    const { total } = this.props;
    const { sort } = this.state;
    const selectorStyle = {
      border: 'none',
      textDecoration: 'underline',
      fontWeight: 'bold',
    };
    const labelStyle = {
      fontWeight: 'bold',
    };
    return (
      <div>
        <form>
          <label style={{ ...labelStyle }}>{total} reviews sorted by:
            <select value={sort} style={{ ...selectorStyle }} onChange={this.handleSort}>
              <option value="relevance">Relevance</option>
              <option value="newewst">Newest</option>
              <option value="helpfulness">Helpfulness</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default ReviewsSort;
