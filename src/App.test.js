import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Login System', () => {
  it('renders the login form', () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('logs in a user with correct email and password', () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'user1@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password1' } });
    fireEvent.click(loginButton);

    const welcomeMessage = getByText('Welcome, John Doe!');
    const logoutButton = getByText('Logout');

    expect(welcomeMessage).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

  it('displays an error message with invalid email', () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'invalid@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password1' } });
    fireEvent.click(loginButton);

    const errorMessage = getByText('Invalid email');

    expect(errorMessage).toBeInTheDocument();
  });

  it('displays an error message with invalid password', () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'user1@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });
    fireEvent.click(loginButton);

    const errorMessage = getByText('Invalid password');

    expect(errorMessage).toBeInTheDocument();
  });

  it('logs out a user after clicking the logout button', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<App />);

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'user1@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password1' } });
    fireEvent.click(loginButton);

    const logoutButton = getByText('Logout');
    fireEvent.click(logoutButton);

    const loginForm = getByText('Login');
    const welcomeMessage = queryByText('Welcome, John Doe!');

    expect(loginForm).toBeInTheDocument();
    expect(welcomeMessage).toBeNull();
  });
});
