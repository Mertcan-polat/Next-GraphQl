import React from "react";

function Header() {
  return (
    <header className="bg-gray-300 flex text-white">
      <div className="p-5 flex items-center justify-center w-full">
        <img
          className="w-1/12"
          src="https://i5.walmartimages.com/asr/bcc4085e-c311-4886-a7a4-aa58127883d7.5958f8a36f96aa4c08dbc4a8a580e57c.png"
        />
      </div>
    </header>
  );
}

export default Header = React.memo(Header);
