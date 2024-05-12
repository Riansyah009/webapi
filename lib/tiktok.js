module.exports = async (url) => {
    return new Promise((resolve, reject) => {
 fetch("https://tikwm.com/api/", {
            body: `url=${encodeURIComponent(url)}&web=1&hd=1&count=0`,
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
        })
 .then((data) => {
     const response = data.json()
     resolve(response)
 })
 .catch((error) => {
     resolve(error.data)
 });
    })
  }
}
