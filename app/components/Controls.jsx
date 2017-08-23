var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render: function () {
        var that = this;
        var {countdownStatus} = this.props;
        var renderStartStopButton = function () {
            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={that.onStatusChange('paused')}>Pause</button>;
            } else if (countdownStatus === 'paused') {
                return <button className="button primary" onClick={that.onStatusChange('started')}>Start</button>;
            }
        }
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
});
module.exports = Controls;