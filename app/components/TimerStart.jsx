var React = require('react');

var TimerStart = React.createClass({
    onStatusChange: function (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render: function () {
        return (
            <div>
                <button className="button expanded" onClick={this.onStatusChange('started')}>Start</button>
            </div>
        );
    }
});
module.exports = TimerStart;