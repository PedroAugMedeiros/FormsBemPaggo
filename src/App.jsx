import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MusicPlay from './Images/playerMusic.png';
import BeethovenFurElise from './Audios/furEliseBeethoven.mp3';
import LoFi from './Audios/loFiRlx.mp3';
import FormsSent from './components/FormsSent';
import CongratulationsImg from './Images/congratulations.gif';

function App() {
  const [contador, setContador] = useState(0);
  const [musicOptions, setMusicOptions] = useState(false);
  const [formsSent, setFormsSent] = useState(false);

  function musicCard() {
    return (
      <div
        data-testid="musicDiv"
        className="music"
      >
        <span className="spanMusic">
          Que tal uma musica
          {' '}
          <br />
          enquanto preenche o formulario?
        </span>
        <button
          data-testid="musicButton"
          type="button"
          className="buttonMusic"
          onClick={() => setMusicOptions(true)}
        >
          <img
            data-testid="imgMusicButton"
            className="musicImg"
            src={MusicPlay}
            alt="musicPlay"
          />
        </button>
      </div>
    );
  }

  function musicChoice() {
    return (
      <section
        data-testid="musicOptions"
        className="musicOptions"
      >
        <button
          data-testid="closeMusicsButton"
          type="button"
          className="closeMusicsButton"
          onClick={() => setMusicOptions(false)}
        >
          Close Musics

        </button>
        <div
          className="muisicAndStyle"
        >
          <span>Classic</span>
          <audio
            max-width="50px"
            className="audios"
            data-testid="audio1"
            src={BeethovenFurElise}
            controls
          >
            <track className="audios " kind="captions" />
            error
            <code className="audios">audio</code>
          </audio>
        </div>
        <div
          className="muisicAndStyle"
        >
          <span>Lo-fi</span>
          <audio
            className="audios"
            data-testid="audio2"
            src={LoFi}
            controls
          >
            <track className="audios" kind="captions" />
            error
            <code className="audios">audio</code>
          </audio>
        </div>
      </section>
    );
  }

  function renderForms() {
    return (
      <section
        className="app"
      >
        <Header />
        <article
          data-testid="forms"
          className="form"
        >
          <section data-testid="checkboxs" className="checkboxAndMusic">
            <div className="checkbox">
              <p>Quais adesivos:</p>
              <div>
                <label htmlFor="chekReact">
                  <input
                    data-testid="reactCheck"
                    type="checkbox"
                    id="cheks"
                    name="chekReact"
                  />
                  React
                </label>
              </div>
              <div>
                <label htmlFor="chekVue">
                  <input
                    data-testid="vueCheck"
                    type="checkbox"
                    id="cheks"
                    name="chekVue"
                  />
                  Vue
                </label>
              </div>

              <div>
                <label htmlFor="chekAng">
                  <input
                    data-testid="angCheck"
                    type="checkbox"
                    id="cheks"
                    name="chekAng"
                  />
                  Angular
                </label>
              </div>
            </div>
            { musicOptions === false ? musicCard() : musicChoice()}
          </section>
          <div className="quantity" data-testid="quantity">
            <div className="textQuantity">
              <p>Quantos adesivos de cada?</p>
            </div>
            <div className="inputsQuantity">
              <button
                type="button"
                onClick={() => {
                  if (contador > 0) {
                    setContador(contador - 1);
                  }
                }}
                className="buttons"
              >
                -
              </button>
              <input type="text" value={contador} data-testid="valueInput" className="textInputQuantity backgroundGray" required />
              <button
                type="button"
                onClick={() => setContador(contador + 1)}
                className="buttons"
              >
                +

              </button>
            </div>
          </div>
          <div
            className="text-area"
            data-testid="observações"
          >
            <p>Observações:</p>
            <textarea
              data-testid="textArea"
              type="text-area"
              placeholder="     Alguma dúvida? Recado?"
              rows="5"
              cols="33"
              className="backgroundGray"
            />
          </div>
        </article>
        <footer className="footer backgroundGray">
          <input
            type="submit"
            value="Enviar"
            className="submit"
            onClick={() => setFormsSent(true)}
          />
        </footer>
      </section>
    );
  }

  function renderFormsSent() {
    return (
      <section
        data-testid="formsSent"
        className="sectionFormsSent"
      >
        <div />
        <FormsSent />
        <div className="imgFormsSent">
          <img className="imgFormsSent" src={CongratulationsImg} alt="congratulationsGif" />
        </div>
        <button
          type="button"
          className="buttonFormsSent"
          onClick={() => setFormsSent(false)}
        >
          Novo Pedido

        </button>
      </section>
    );
  }

  return (

    (formsSent === false ? renderForms() : renderFormsSent())

  );
}

export default App;
