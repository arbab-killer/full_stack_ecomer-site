import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Button className="pl-5" variant="primary" onClick={handleShow}>
          ---
        </Button>

        <Offcanvas
          className="bg-red-400 h-[80vh] w-[40vw]"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {" "}
              <h2>Hi User</h2>
              <button onClick={handleClose}>X</button>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="text-center w-[30vw]">
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Sidebar;
