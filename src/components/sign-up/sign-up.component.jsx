import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import '../sign-up/sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        const { signUpStart } = this.props;
        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
        signUpStart({ displayName, email, password });
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-up">
                <h2 className="title"> I do not have an account </h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        label="displayName"
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />

                    <FormInput
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label="confirmPassword"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
