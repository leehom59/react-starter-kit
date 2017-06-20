import passport from 'passport';
import { graphql } from 'graphql';
import { Strategy as LocalStrategy } from 'passport-local';

/**
 * Sign in with our account
 */
passport.use(new LocalStrategy({
  usernameField: 'account',
  passwordField: 'password',
  passReqToCallback: true,
  session: false,
}, (req, account, password, done) => {
  const task = graphql(req.schema, `{ login(account:"${account}",password:"${password}") { id,account,email } }`, { request: req })
  .then(userAccount => done(null, userAccount.data.login))
  .catch(err => done(err));

  return task;
}));

export default passport;
