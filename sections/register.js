import React from 'react'

var myStyle = {
  fontFamily: "Dosis",
    paddingTop: "50px",
    height: "100%",
    color: "#000",
    backgroundColor: "#00b33c"
}

export default class Register extends React.Component {
  render() {
    return (
      <div id="register" class="container-fluid" style={myStyle}>
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <h1>Register</h1>
              <p>God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.</p>
            </div>
          </div>
        </div>
        <div class="row">
        </div>
      </div>
    );
  }
}
