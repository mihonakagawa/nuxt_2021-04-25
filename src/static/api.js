const adminUser = {
  username: 'admin_user',
  password: 'this_is_super_password',
}

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const login = async (user) => {
  const { username, password } = user;

  return await delay(1000).then(() => {
    // timing attackの可能性があるので実際はbcryptなどで比較する
    return (adminUser.username === username && adminUser.password === password)
      // https://techblog.zozo.com/entry/graphql_error_handling
      ? Promise.resolve({ status: 200 })
      : Promise.resolve(
        {
          status: 200,
          errors: {
            message: 'ユーザーネーム、またはパスワードが間違っています!'
          }
        }
      );
  });
}
