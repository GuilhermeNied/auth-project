export function Login() {
  return (
    <div className="login-page-container">
      <form>
        <div>
          <label>Username:</label>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <a href="/register">a</a>
        <button>Login</button>
      </form>
    </div>
  )
}