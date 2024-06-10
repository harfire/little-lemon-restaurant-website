import React from 'react';
import { Button } from 'react-bootstrap';

const Logout = () => {
  const handleLogout = async () => {};

  return (
    <>
      <section id="logout">
        <div className="p-4 box mt-3 text-center">
          <strong>Welcome</strong> <br />
        </div>
        <div className="d-grid gap-2">
          <Button className="btn-out" variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </section>
    </>
  );
};

export default Logout;
