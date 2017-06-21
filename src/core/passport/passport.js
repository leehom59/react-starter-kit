import passport from 'passport';
import { graphql } from 'graphql';
import { Strategy as LocalStrategy } from 'passport-local';

/**
 * Sign in with our account
 * 這邊只需要做驗證
 */
passport.use(new LocalStrategy({
  usernameField: 'account',
  passwordField: 'password',
  passReqToCallback: true,
  session: false,
}, (req, account, password, done) => {
  const task = graphql(req.schema, `{ login(account:"${account}",password:"${password}") { id,account,email } }`, { request: req })
  .then((userAccount) => {
    if (userAccount.data.login == null) throw new Error('userAccount not exist');
    const user = {
      id: userAccount.data.login.id,
      account: userAccount.data.login.account,
      email: userAccount.data.login.email,
    };
    done(null, user);
  })
  .catch(err => done(err));

  return task;
}));

export default passport;
