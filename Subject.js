import React from "react";
class Subject extends React.Component {
  render() {
    var c = 100;
    var php = 100;
    var html = 100;
    var css = 10;
    var js = 19;
    var rjs = 60;
    var sum = c + php + html + css + js + rjs;
    var average = sum / 6;
    var msg;

    if (c < 18 || php < 18 || html < 18 || css < 18 || js < 18 || rjs < 18) {
      var colorstyle = "red";
      msg = "Failed 😂"
    } else {
      var colorstyle = "green";
      msg=average;
    }

    return (
      <>
        <h1>c = {c}</h1>
        <h1>php = {php}</h1>
        <h1>html = {html}</h1>
        <h1>css = {css}</h1>
        <h1>js = {js}</h1>
        <h1>rjs = {rjs}</h1>
        <h1 style={{ backgroundColor: colorstyle }}>
           {msg}
        </h1>
        
      </>
    );
  }
}

export default Subject;
