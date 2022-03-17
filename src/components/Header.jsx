import React from 'react';
import '../App.css';
import boxImg from '../Images/box.png';

function Header() {
  return (
    <header data-testid="header" className="header">
      <div data-testid="textHeader" className="textHeader">
        <p data-testid="p" className="pHeader">Formulário</p>
        <p data-testid="p" className="pHeader">para compra de</p>
        <p data-testid="p" className="fullWhiteP">Pacote de adesivos</p>
      </div>
      <img data-testid="imgHeader" className="ImgHeader" src={boxImg} alt="boxIcon" />
    </header>
  );
}

export default Header;
