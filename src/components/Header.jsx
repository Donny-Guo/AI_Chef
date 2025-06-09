import chef_claude_icon from "/Chef_Claude_Icon.png"

export default function Header() {
  return (
    <h1 className="Header">
      <img src={chef_claude_icon} className="chef-icon" />
      Chef Claude
    </h1>
  )
}