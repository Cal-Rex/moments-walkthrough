import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import { CurrentUserProvider } from "../../contexts/CurrentUserContext"
import NavBar from '../NavBar'

test('renders NavBar', () => {
    render(
        <Router>
            <NavBar />
        </Router>
    )
    // screen.debug();
    const signinLink = screen.getByRole('link', {name: 'Sign In'});
    expect(signinLink).toBeInTheDocument();
})

test('renders link to the user profile for a logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );

    const profileAvatar = await screen.findByText("Profile");
});

