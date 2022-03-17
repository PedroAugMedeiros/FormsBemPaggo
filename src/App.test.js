import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
// import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import App from './App';
import Header from './components/Header';

describe('Testa Component Header', () => {
  it('testa se existe um header', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('testa se o header contem um o texto esperado', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    const p = screen.getByText(/Formulário/i);
    const p2 = screen.getByText(/para compra de/i);
    const p3 = screen.getByText(/Pacote de adesivos/i);
    expect(header).toContainElement(p, p2, p3);
  });

  it('testa se contem a imagem correta', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    const imgHeader = screen.getByAltText(/boxIcon/i);
    expect(imgHeader.src).toEqual('http://localhost/box.png');
    expect(header).toContainElement(imgHeader);
  });
});

describe('Testa Checkbox', () => {
  it('testa se contem um p com o texto esperado', () => {
    render(<App />);
    const checkbox = screen.getByTestId('checkboxs');
    const p = screen.getByText(/Quais adesivos:/i);
    expect(checkbox).toContainElement(p);
  });

  it('testa se contem o texto esperado nas opções', () => {
    render(<App />);
    const checkbox = screen.getByTestId('checkboxs');
    const reactOption = screen.getByText(/React/i);
    const vueOption = screen.getByText(/Vue/i);
    const angOption = screen.getByText(/Angular/i);
    expect(checkbox).toContainElement(reactOption, vueOption, angOption);
  });

  it('testa funcionamento do checkbox', () => {
    render(<App />);
    const reactCheck = screen.getByTestId('reactCheck');

    userEvent.click(reactCheck);
    expect(reactCheck).toBeChecked();
    userEvent.click(reactCheck);
    expect(reactCheck).not.toBeChecked();

    const vueCheck = screen.getByTestId('vueCheck');

    userEvent.click(vueCheck);
    expect(vueCheck).toBeChecked();
    userEvent.click(vueCheck);
    expect(vueCheck).not.toBeChecked();

    const angCheck = screen.getByTestId('angCheck');

    userEvent.click(angCheck);
    expect(angCheck).toBeChecked();
    userEvent.click(angCheck);
    expect(angCheck).not.toBeChecked();
  });
});

describe('Testa MusicCard e MusicChoice', () => {
  it('testa se existe a divMusic e o musicButton', () => {
    render(<App />);
    const musicDiv = screen.getByTestId('musicDiv');
    const musicButton = screen.getByTestId('musicButton');
    
    expect(musicDiv).toBeDefined();
    expect(musicButton).toBeDefined();
  });

  it('testa se musicDiv contem o texto esperado', () => {
    render(<App />);
    const musicDiv = screen.getByTestId('musicDiv');
    const spanMusicDiv = screen.getByText(/Que tal uma musica enquanto preenche o formulario?/i)
   
    expect(musicDiv).toContainElement(spanMusicDiv);
  });

  it('testa se o musicButton contem a imagem esperada', () => {
    render(<App />);
    const musicButton = screen.getByTestId('musicButton');
    const imgMusicButton = screen.getByTestId('imgMusicButton');
    expect(imgMusicButton.src).toEqual('http://localhost/playerMusic.png');
    expect(musicButton).toContainElement(imgMusicButton)
  });


  it('testa se ao clicar no musicButton a musicDiv e o musicButton não são renderizados', () => {
    render(<App />);
    const musicDiv = screen.getByTestId('musicDiv');
    const musicButton = screen.getByTestId('musicButton');
    
    userEvent.click(musicButton);

    expect(musicDiv).not.toBeInTheDocument();
    expect(musicButton).not.toBeInTheDocument();
  });

  it('testa se ao clicar no musicButton a musicOptions e o closeMusicsButton são renderizados e o musicButton não é', () => {
    render(<App />);
    
    const musicButton = screen.getByTestId
    ('musicButton');

    userEvent.click(musicButton);

    const musicOptions = screen.getByTestId('musicOptions');
    const closeMusicsButton = screen.getByTestId('closeMusicsButton');
    
   

    expect(musicOptions).toBeInTheDocument();
    expect(closeMusicsButton).toBeInTheDocument();
    expect(musicButton).not.toBeInTheDocument();
  });

  it('testa se há dois audios dentro do musicOptions', () => {
    render(<App />);
    
    const musicButton = screen.getByTestId
    ('musicButton');

    userEvent.click(musicButton);

    const musicOptions = screen.getByTestId('musicOptions');

    const audio1 = screen.getByTestId('audio1');
    const audio2 = screen.getByTestId('audio2');

    expect(musicOptions).toContainElement(audio1);
    expect(musicOptions).toContainElement(audio2);
  });

  it('testa se ao clicar no closeMusicsButton a musicDiv e o musicButton são renderizados e o closeMusicsButton e a musicOpitons  não são', () => {
    render(<App />);
    
    const musicButton = screen.getByTestId
    ('musicButton');

    userEvent.click(musicButton);
    const closeMusicsButton = screen.getByTestId('closeMusicsButton');
    const musicOptions = screen.getByTestId('musicOptions');
    userEvent.click(closeMusicsButton);
    const musicDiv = screen.getByTestId('musicDiv');
    const musicButtonVerify = screen.getByTestId
    ('musicButton');

    expect(musicDiv).toBeInTheDocument();
    expect(musicButtonVerify).toBeInTheDocument();
    expect(musicOptions).not.toBeInTheDocument();
    expect(closeMusicsButton).not.toBeInTheDocument();
  });


});

describe('Testa Div de Escolha de Quantidade de adesivos', () => {
  it('testa se contem um p com o texto esperado', () => {
    render(<App />);
    const quantity = screen.getByTestId('quantity');
    const p = screen.getByText(/Quantos adesivos de cada/i);
    expect(quantity).toContainElement(p);
  });

  it('testa se existe um botão de soma', () => {
    render(<App />);
    const sumButton = screen.getByRole('button', {
      name: '+',
    });
    expect(sumButton).toBeDefined();
  });

  it('testa se existe um botão de subtração', () => {
    render(<App />);
    const subButton = screen.getByRole('button', {
      name: '-',
    });
    expect(subButton).toBeDefined();
  });

  it('testa se existe um input de texto que começa com o valor 0', () => {
    render(<App />);
    const valueInput = screen.getByTestId('valueInput');
    expect(valueInput.value).toEqual('0');
  });

  it('testa se ao clicar no botão + acrescenta 1 no input de valor', () => {
    render(<App />);
    const valueInput = screen.getByTestId('valueInput');
    expect(valueInput.value).toEqual('0');
    const sumButton = screen.getByRole('button', {
      name: '+',
    });
    userEvent.click(sumButton);
    expect(valueInput.value).toEqual('1');
  });

  it('testa se ao clicar no botão - subtrai 1 no input de valor', () => {
    render(<App />);
    const valueInput = screen.getByTestId('valueInput');

    expect(valueInput.value).toEqual('0');
    const sumButton = screen.getByRole('button', {
      name: '+',
    });

    userEvent.click(sumButton);
    expect(valueInput.value).toEqual('1');

    const subButton = screen.getByRole('button', {
      name: '-',
    });

    userEvent.click(subButton);
    expect(valueInput.value).toEqual('0');
  });

  it('testa se quando o valor é 0 o input não subtrai', () => {
    render(<App />);
    const valueInput = screen.getByTestId('valueInput');

    expect(valueInput.value).toEqual('0');

    const subButton = screen.getByRole('button', {
      name: '-',
    });

    userEvent.click(subButton);
    expect(valueInput.value).toEqual('0');
  });
});

describe('Testa Div de Observações', () => {
  it('testa se contem um p com o texto esperado', () => {
    render(<App />);
    const observacões = screen.getByTestId('observações');
    const p = screen.getByText(/Observações/i);
    expect(observacões).toContainElement(p);
  });

  it('testa se contem um textArea com o placeholder esperado', () => {
    render(<App />);
    const textArea = screen.getByTestId('textArea');
    expect(textArea.placeholder).toEqual('     Alguma dúvida? Recado?');
  });

  it('testa se o textArea tem as colunas e linhas esperadas', () => {
    render(<App />);
    const textArea = screen.getByTestId('textArea');
    expect(textArea.rows).toEqual(5);
    expect(textArea.cols).toEqual(33);
  });
});

describe('Testa submitButton e component FormsSent', () => {
  it('testa se existe i submitButton', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', {
      name: 'Enviar'
    });
  
    expect(submitButton).toBeInTheDocument();
  });

  it('testa se ao clicar no submitButton FormsSent é renderizado ', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', {
      name: 'Enviar'
    });
   
    userEvent.click(submitButton);

    const formsSent = screen.getByTestId('formsSent')
    expect(formsSent).toBeInTheDocument();
  });

  it('testa se o FormsSent contem uma imagem, um texto e um botão', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', {
      name: 'Enviar'
    });
   
    userEvent.click(submitButton);

    const formsSent = screen.getByTestId('formsSent')

    const formsSentImg = screen.getByAltText('congratulationsGif');
    const formsSentH1 = screen.getAllByText(/Parabéns, seu pedido foi computado!/i)
    const formsSentButton = screen.getByRole('button', {
      name: 'Novo Pedido'
    });

    expect(formsSent).toContainElement(formsSentImg, formsSentH1, formsSentButton)
  });

  it('testa se ao clicar no formsSentButton o Forms é renderizado ', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', {
      name: 'Enviar'
    });
   
    userEvent.click(submitButton);
    
    const formsSentButton = screen.getByRole('button', {
      name: 'Novo Pedido'
    });

    userEvent.click(formsSentButton);
    
    const forms = screen.getByTestId('forms')
    expect(forms).toBeInTheDocument();
  });

});