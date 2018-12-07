import React from 'react'
import { Button, Textfield , Grid, Cell} from 'react-mdl';

const Login = (props) => {

      const handleOnSubmit = () => {}
      const {email, password} = props

        return (
          <div>
            <Grid className="demo-grid-1">
              <Cell col={4}></Cell>
              <Cell col={4}>
              <h2>Login</h2>
            <form onSubmit={event => {this.handleOnSubmit(event)}} >
                <div>
                <label htmlFor="email">Email</label>
                      <Textfield
                          onChange={() => {}}
                          label="................................."
                          name="email"
                          value={email}
                          style={{width: '200px'}}
                      />
                      
                       
                </div>      
                <div>
                <label htmlFor="password">Password</label>
                      <Textfield
                          onChange={() => {}}
                          label=".................................."
                          name="password"
                          value={password}
                          style={{width: '200px'}}
                      />
                     
                </div>
                
              <Button type="submit">Login</Button>
            </form>
              </Cell>
              <Cell col={4}></Cell>
            </Grid>
            
          </div>
    )
  }

export default Login;