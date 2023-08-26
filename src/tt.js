const http = require("http")

http
  .request(
    {
      hostname: "postman-echo.com",
      path: "/status/200"
    },
    res => {
      let data = ""

      res.on("data", d => {
        data += d
      })
      res.on("end", () => {
        console.log(data)
      })
    }
  )
  .end()

const http = require("http")

let options = new URL("https://postman-echo.com/status/200")

let myRequest = http.request(options, res => {
  // Same as previos example
  res.on('data' d=> {
    //...
  })
  //... etc
})

myRequest.on("error", console.error)
myRequest.end()

const http = require("http")

http.get("https://postman-echo.com/status/200", res => {
  let data = ""

  res.on("data", d => {
    data += d
  })
  res.on("end", () => {
    console.log(data)
  })
})

const http = require("http")

let body = JSON.stringify({
  title: "Make a request with Node's http module"
})

let options = {
  hostname: "postman-echo.com",
  path: "/post",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body)
  }
}

http
  .request(options, res => {
    let data = ""
    res.on("data", d => {
      data += d
    })
    res.on("end", () => {
      console.log(data)
    })
  })
  .on("error", console.error)
  .end(body)

let server = http.createServer()

server.listen(3000, error => {
  http.request({
    port: 3000,
    path: "/endpoint"
  }, res => {
    // handle the response
  })
})

let call = http.request(options, handleResponse)

bcall.on("error", handleError)
call.end()
This is also a good use case for building a custom error type to handle specific responses.

const http = require("http")

http
  .request(
    {
      hostname: "postman-echo.com",
      path: "/status/200"
    },
    res => {
      let data = ""

      res.on("data", d => {
        data += d
      })
      res.on("end", () => {
        console.log(data)
      })
    }
  )
  .end()

