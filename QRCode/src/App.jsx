import './App.css'
import QRCode from 'qrcode'
import { useState } from 'react'
function App() {

  const [url, seturl] = useState('')
  const [qr, setqr] = useState('')
  const GenerateQR = () => {
    // QRCode.toDataURL(url,(err,url)=>{
    //   if(err) console.log(err)
    //   setqr(url)
    // })
    QRCode.toDataURL(url, (err, url) => {
      if (err) {
        console.log(err)
        return
      }
      setqr(url)
    })
  }


  return (
    <div className="container">
      <h1>QR Code Generator 🤩 </h1>
      <div className="inputbox">
      <input type="text"
        placeholder='eg. Hello World! '
        value={url}
        onChange={(e) => seturl(e.target.value)}
      />
      <button onClick={GenerateQR}  >Generate</button>
      </div>
      <div className="gen">
        {qr&&<> <img src={qr}  />
        <a href={qr} download="qr.png"> Download</a>
        </>}
       
      </div>
    </div>
  )
}

export default App
