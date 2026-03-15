import Logo from "../assets/chef-claude-icon.png"

export default function Header() {
    return (
        <header className="PageHeader">
            <img src={Logo} alt="app logo"/>
            <div>Chef <span className="AppName">Claude</span></div>
        </header>
    )
}