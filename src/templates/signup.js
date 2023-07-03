const generateEmailHtml = (data) => {
    return `<!doctype html>
  <html lang="en">
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet">
      <title>Sub Admin User</title>
      <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
  </head>
  <body style="font-family: 'Poppins', sans-serif;">
      <style>
          @media screen {
              @font-face {
                  font-family: 'Source Sans Pro';
                  font-style: normal;
                  font-weight: 400;
                  src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
              }
  
              @font-face {
                  font-family: 'Source Sans Pro';
                  font-style: normal;
                  font-weight: 600;
                  src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
              }
          }
          a:hover {
              text-decoration: none !important;
          }
      </style>
      <div>
          <div style="width: 95%;
          margin: auto;">
              <div style="background-color: #201F23;
                          border-radius: 10px;
                          color: white;
                          padding: 30px;
                          background-repeat: no-repeat;
                          background-position: right bottom !important;
                          background-image: url('https://aia-images-dev.s3.amazonaws.com/1607068865458vec.png');
                          background-size: 350px;">
                  <div style="    width: 95%;
                  margin: auto;">
                      <div>
                          <h2 class="main_heading" style="font-style: normal;
                          font-weight: 600;
                          font-size: 23px;
                          color: #FFFFFF;">Congrats! Your account is now created.</h2>
                          <h5 class="hello_peroson" style=" font-style: normal;
                          font-weight: 200;
                          font-size: 23px;
                          color: #FFFFFF;
                          margin: 25px 0;">Hi ${data.firstName} ${data.lastName},</h5>
                          <p class="first_discription" style="font-style: normal;
                          font-weight: 400;
                          font-size: 16px;
                          line-height: 24px;
                          color: #FFFFFF;
                          margin-top: 15px;
                          margin-bottom: 25px;">Your Account has been created successfully at 
                          <a href="https://app.example.com">IGAN.</a>
                          </p>
                          <p class="first_discription" style="font-style: normal;
                          font-weight: 400;
                          font-size: 16px;
                          line-height: 24px;
                          color: #FFFFFF;
                          margin-top: 15px;
                          margin-bottom: 25px;">Your Credentials are as follows:</p>
                            <p class="first_discription" style="font-style: normal;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 24px;
                            color: #FFFFFF;
                            margin-top: 15px;
                            margin-bottom: 25px;">Username : ${data.username}</p>
                            <p class="first_discription" style="font-style: normal;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 24px;
                            color: #FFFFFF;
                            margin-top: 15px;
                            margin-bottom: 25px;">Password : ${data.password}</p>
                                <table style="margin-bottom: 18px;">                    
                          
                          <p style=" font-style: normal;
                              font-weight: 300;
                              font-size: 15px;
                              line-height: 24px;
                              color: rgba(255, 255, 255);
                              margin-top: 29px;">Thank you for being an important member of IGAN. If
                              you did
                              not initiate this request,
                              please contact us back immediately at <a href="mailto:info@igan.com" style="font-style: normal;
                              font-weight: 500; 
                              color: #B59B41 !mailto:important;">info@acadify.com</a>.
                          </p>
                          <a type="button" href="https://app.example.com/" style="background: #B59B41;
                              border-radius: 6px;
                              padding: 4px 40px 7px 40px;
                              border: 1px solid #B59B41;
                              color: white;
                              margin-top: 21px;
                              font-size: 14px;
                              text-decoration: none;" href="#">
                              Login
                          </a>
                          <p style="font-style: normal;
                          font-weight: 300;
                          font-size: 15px;
                          line-height: 25px;
                          color: rgba(255, 255, 255, 0.7);
                          margin-top: 34px;
                          margin-bottom: 0px;">
                              Thank you,
                          </p>
                          <p style="font-style: normal;
                          font-weight: 300;
                          font-size: 15px;
                          line-height: 25px;
                          color: rgba(255, 255, 255, 0.7);
                          margin-top: 0px;
                          margin-bottom: 0px;">
                            IGAN
                          </p>
                          <a href="https://app.example.com/" target="_blank"
                              style="display: inline-block; color: #b59b41 !important; margin-top: 15px; text-decoration: none; margin-bottom: 0px;">
                          </a>
                      </div>
                  </div>
  
              </div>
          </div>
      </div>
  
  </body>
  
  </html>`
}

module.exports = { generateEmailHtml }