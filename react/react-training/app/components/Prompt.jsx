var transparentBg = require('../styles').transparentBg; 
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;

function Prompt(props) {
    return (
        <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}> 
            <h1>{props.header}</h1>
            <div className='col-sm-12'>
                <form onSubmit={props.handleSubmitUser}>
                    <div className='form-group'>
                        <input className='form-control' 
                            placeholder='Github Username' 
                            type='text'
                            onChange={props.handleUpdateUser}
                            value ={props.username} />
                    </div>
                    <div className='form-group col-sm-4 col-sm-offset-4'>
                        <button className='btn btn-block btn-success' type='submit'>
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

Prompt.propTypes = {
    header: PropTypes.string.isRequired, 
    handleUpdateUser: PropTypes.func.isRequired, 
    handleSubmitUser: PropTypes.func.isRequired, 
    username: PropTypes.string.isRequired
};

module.exports = Prompt;