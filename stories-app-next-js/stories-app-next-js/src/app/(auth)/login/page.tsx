import * as actions from '@/actions';

const LoginPage = async () => {
  return (
    <div>
      <form action={actions.githubSignIn}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
