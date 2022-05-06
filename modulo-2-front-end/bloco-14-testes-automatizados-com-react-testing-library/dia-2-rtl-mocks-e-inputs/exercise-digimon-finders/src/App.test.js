import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Teste da aplicação toda', () => {
  it('renders App', () => {
    render(<App />);

    const searchElement = screen.getByText(/search digimon/i);
    const inputDigimon = screen.getByRole('textbox');

    expect(searchElement).toBeInTheDocument();
    expect(inputDigimon).toBeInTheDocument();
  });

  it('verify if itś possible to type', () => {
    render(<App />);

    const inputDigimon = screen.getByRole('textbox');
    expect(inputDigimon).toBeInTheDocument();

    userEvent.type(inputDigimon, 'agumon');
    expect(inputDigimon).toHaveValue('agumon');
  });

  it('verify if screen starts without any digimon', () => {
    render(<App />);

    const digimonName = screen.queryByRole('heading', { level: 2 }); // query não retorna erro caso não enconrte como o getByrole. o level 2 do headin é para pegar h2 na tela.
    expect(digimonName).not.toBeInTheDocument();
  });

  it('search for any digimon', async () => {
    const digimon = [{
      name: 'Agumon',
      level: 'Rookie',
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
    }];

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(digimon),
    }));

    render(<App />);

    // confere se o texto está vazio.
    const inputDigimon = screen.getByRole('textbox', { name: /digimon/i });
    expect(inputDigimon).toHaveValue('');

    // simulando o comportamento do usuário da aplicação... digita, clica, espera a api retornar e testa o retorno simulado.
    userEvent.type(inputDigimon, 'Agumon');
    expect(inputDigimon).toHaveValue('Agumon');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    await screen.findByText('level: Rookie');
    const digimonName = screen.getByText(/agumon/i);
    expect(digimonName).toBeInTheDocument();

    const digimonImage = screen.getByAltText('Agumon');
    expect(digimonImage).toBeInTheDocument();

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/Agumon');
  });

  it('Search for an inexistent digimon', async () => {
    const ErrorMsg = 'A is not a Digimon in our database.';

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ ErrorMsg }),
    }));

    render(<App />);

    // simula a interação do usuário:
    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveValue('');

    userEvent.type(searchInput, 'Teste');
    expect(searchInput).toHaveValue('Teste');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    await screen.findByText('A is not a Digimon in our database.');

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Teste',
    );
  });

  it('test if with an empty searchbox, fetchs is not done', async () => {
    render(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveValue('');

    userEvent.type(searchInput, '');
    expect(searchInput).toHaveValue('');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    expect(global.fetch).toBeCalledTimes(0);
  });
});
