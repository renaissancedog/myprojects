const info=(
  <div>
    <h1>Hello, React!</h1>
    <p>This page was made with React.</p>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has over 200k stars on GitHub (the 10th most starred repo of all time!)</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise and mobile apps</li>
    </ul>
  </div>
)
const root=ReactDOM.createRoot(q("root"))
root.render(info)
function q(id) {
  return document.getElementById(id)
}