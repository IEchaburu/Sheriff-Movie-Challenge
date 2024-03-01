const Login = () => {

    return (
        <div class="card-body">

          
          <form action='http://localhost:3001/login' method="POST">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" name="username"/>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" name="password"/>
            </div>
            <button type="submit" class="btn btn-dark">Login</button>
          </form>

        </div>

    )
}

export default Login;