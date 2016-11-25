import React from 'react'

export default class BuyFruit extends React.Component { 

  render() {
  	const { cname, price } = this.props;
    return (
      <div class="col-xs-4 text-center">
        <h4>{cname}</h4>
        <h5>Price:&nbsp;&nbsp;${price}</h5>
      </div>
    );
  }
}
BuyFruit.propTypes = {
  cname: React.PropTypes.string,
  price: React.PropTypes.number
}
BuyFruit.defaultProps = {
  cname: '',
  price: 0
}