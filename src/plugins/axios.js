export default ({ $axios }) => {
  $axios.onRequest((config) => {
    console.log('request: ', config)
  })
  // レスポンスログ
  $axios.onResponse((config) => {
    console.log('response: ', config)
  })
  // エラーログ
  $axios.onError((e) => {
    console.log('axiosError: ', e.response)
  })
}
