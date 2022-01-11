import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

function App() {
  return (

    <div className="grid-container">
      <div className="header">
<nav className="navbar navbar-light bg-light justify-content-between ">
  <a className="navbar-brand" >Bootstrap</a>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav></div>
      <Container id="main-container">
 
        <form id="sign-in-form" className="text-center p-3 w-100">
          <div className="content-large">
          <img className="mb-4 bootstrap-logo"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt="Bootstrap 5" />
          <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>
          <Form.Group controlId="sign-in-email-address">
            <Form.Control type="email" size="lg" placeholder="Email address" autoComplete="username" className="position-relative" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="sign-in-password">
            <Form.Control type="password" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative" />
          </Form.Group>
         
          <div id="like_button_container"> </div>
          <button type="sgin in" class="btn btn-primary">sgin in</button>
          <div className="_1rf5">
            <span className="_1rf8">
            ou
            </span> 
          </div>
          <div class="_xkt">
        <a role="button" class="_42ft _4jy0 _16jx _4jy6 _4jy2 selected _51sy" href="/r.php?api_key=145044622175352&amp;app_id=145044622175352&amp;cancel_url=https%3A%2F%2Fstackauth.com%2Fauth%2Foauth2%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522sid%2522%253A1%252C%2522st%2522%253A%252259%253A3%253Abbc%252C16%253Ad875fb58ff7d0ba3%252C10%253A1641854377%252C16%253A5a2c37ce51f1e61f%252C38f8863caf94fd5c8004c1a5461f6e3fadf83d6a0ab226029d020dfb2bc23b35%2522%252C%2522cid%2522%253A%2522145044622175352%2522%252C%2522k%2522%253A%2522Facebook%2522%252C%2522ses%2522%253A%25224ee97e6ca0e6477793b1f9b28084287b%2522%257D%23_%3D_&amp;next=https%3A%2F%2Fwww.facebook.com%2Fv2.0%2Fdialog%2Foauth%3Fclient_id%3D145044622175352%26scope%3Demail%26redirect_uri%3Dhttps%253A%252F%252Fstackauth.com%252Fauth%252Foauth2%252Ffacebook%26state%3D%257B%2522sid%2522%253A1%252C%2522st%2522%253A%252259%253A3%253Abbc%252C16%253Ad875fb58ff7d0ba3%252C10%253A1641854377%252C16%253A5a2c37ce51f1e61f%252C38f8863caf94fd5c8004c1a5461f6e3fadf83d6a0ab226029d020dfb2bc23b35%2522%252C%2522cid%2522%253A%2522145044622175352%2522%252C%2522k%2522%253A%2522Facebook%2522%252C%2522ses%2522%253A%25224ee97e6ca0e6477793b1f9b28084287b%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D9b633bc9-c1b5-4eeb-8e2e-90ed7e2fe186%26tp%3Dunspecified&amp;locale=fr_FR&amp;display=page">Creat new account</a></div>


          </div>
          <div className="footer">
          <p className="mt-5 text-muted">&copy; 2021-2022</p></div>
        </form>
</Container>
      
    </div>



  );
}

export default App;
