import React from 'react';

import api from '../../services/api';

import { useQuery, useQueryClient } from 'react-query';

import Loading from '../../assets/loading.gif';
import HeaderMain from '../../components/HeaderMain';
import Footer from '../../components/Footer';
import Pagination from '../../components/Pagination';

import * as S from './styles';

const Home = () => {

  const { data: games, isFetching } = useQuery('games', async () => {
    const response = await api.get('game');

    return response.data;
  });

  const queryClient = useQueryClient();

  const deleteGame = (id) => {
    api.delete(`game/${id}`)
      .then(() => {
        queryClient.invalidateQueries(['games']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <HeaderMain />

      <S.Main>
        {
          isFetching &&
          <S.Loading>
            <S.Image src={Loading} alt="loading" />
          </S.Loading>
        }

        {!isFetching && <Pagination data={games} delete={deleteGame} />}
      </S.Main>

      <Footer />
    </>
  )
}

export default Home;