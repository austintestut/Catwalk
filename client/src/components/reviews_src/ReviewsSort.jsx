import React from 'react';

class ReviewsSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'relevant',
    };
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(e) {
    const { updateReviews } = this.props;
    const { sort } = this.state;
    e.preventDefault();
    this.setState({ sort: e.target.value }, updateReviews(sort));
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
              <option value="relevant">Relevance</option>
              <option value="newest">Newest</option>
              <option value="helpful">Helpfulness</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default ReviewsSort;
