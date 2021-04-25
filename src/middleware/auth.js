export default function ({ redirect, store, route }) {
  const user = store.getters['user/user'];

  if (!user) {
    // 無限ループ対策
    if (route.name === 'login') return;

    // 未ログインの場合
    redirect('/login');
  }
}
