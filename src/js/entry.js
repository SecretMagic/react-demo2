require("../less/entry.less");
var React = require("react");
var ReactDom = require("react-dom");

var Mask = React.createClass({
    getDefaultProps: function () {
        return {
            style: {
                width: "100%",
                opacity: 0.5,
                background: "#000",
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "none"
            }
        }
    },
    render: function () {
        var style = Object.assign({}, this.props.style);
        if (this.props.openFlag) {
            style.display = "block";
        }
        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
})

var Info = React.createClass({
    getDefaultProps: function () {
        return {
            message: "Hello World",
            style: {
                margin: "100px auto",
                textAlign: "center",
                height: "150px",
                lineHeight: "150px",
                color: "#f00",
                backgroundColor: "#f40"
            }
        }
    },
    render: function () {
        return(
            <div onClick={this.props.onHandleClick} style={this.props.style}>
                {this.props.message}
            </div>
        )
    }
});

var ButtonDialog = React.createClass({
    getInitialState: function () {
        return {
            open: false,
        }
    },
    onChangeState: function () {
        var flag = !this.state.open;
        this.setState({
            open: flag
        })
    },
    render: function () {
        return(
            <div>
                <button onClick={this.onChangeState}>Dialog</button>
                <Mask openFlag={this.state.open}>
                    <Info onHandleClick={this.onChangeState}></Info>
                </Mask>
            </div>
        )
    }
})

ReactDom.render(
    <ButtonDialog></ButtonDialog>,
    document.getElementById("root")
);