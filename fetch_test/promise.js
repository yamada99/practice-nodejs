// 参考： https://kde.hateblo.jp/entry/2018/10/22/010811

async function promise(){
  fetch('https://holidays-jp.github.io/api/v1/date.json')
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      return Promise.reject(new Error('エラー'));
    }
  })
  .then(text => {
    console.log(text);
  })
  .catch(e => {
    console.log(e.message);
  });
}