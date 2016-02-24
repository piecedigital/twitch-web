<html>
  <head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no" />
    <meta property="og:site_name" content="Twitch Web"/>
    <meta property="og:description" content={`${(this.streamer) ? `Profile page of ${this.streamer} | ` : "" }Twitch Web gives every channel on Twitch.tv a customizable profile page to host content in a way that's easier for their viewers to access.`}/>
    <meta name="language" content="en-us" />
    <meta name="creator" content="Darryl Dixon, Piece Digital" />
    <meta name="publisher" content="Piece Digital Studios" />
    <meta name="robots" content="index, follow" />
    <meta name="revisit-after" content="10 days" />
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
  </head>
  <body className="unset">
    <RenderDocument />
  	<script src="https://fb.me/react-0.14.2.js"></script>
    <script src="https://fb.me/react-dom-0.14.2.js"></script>
    <script src="/js/main.js"></script>
    <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
    <script src="https://ttv-api.s3.amazonaws.com/twitch.min.js"></script>
    <script src="/js/client-react-parent.js"></script>
  </body>
</html>