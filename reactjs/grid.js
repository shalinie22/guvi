<!DOCTYPE html>
<html>
  <head>
    <title>React Session</title>
    <meta charset="UTF-8" />

    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
    />

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>

    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
  </head>
  
  <body>
    <div id="body"></div>

    <script>
      const rootelement = document.getElementById("body");
      const element=React.createElement(
          "div",
          {className:"grid-item",style:{border:"2px solid black",backgroundColor: "white",border: "black",height:"100px",width:"200px"}}     );
      const divelement=React.createElement(
          "div",
        {className:"grid-container",style:{display:"grid",height:"100px",width:"100px",gridGap:"4px",gridTemplateColumns: "auto auto auto auto",backgroundColor: "gray"}},
          
          element,
          element,
          element,
          element,
          element,
          element,
          element,

      
      );
      ReactDOM.render(divelement,rootelement);
      

    </script>
  </body>
</html>

