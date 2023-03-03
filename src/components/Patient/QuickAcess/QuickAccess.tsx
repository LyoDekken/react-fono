// import { IonCard, IonImg, IonRow } from '@ionic/react';
// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   margin: 0 auto;
//   padding: 0 20px;
//   max-width: 1200px;
// `;

// const Title = styled.h1`
//   font-weight: bold;
//   font-size: 1.5rem;
//   padding-left: 3px;
// `;

// const QuickCard = styled(IonCard)`
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
//   border-radius: 20px;
//   padding: 20px;
//   margin: 10px;
//   text-align: center;
//   text-decoration: none;
// `;

// const ImgCard = styled(IonImg)`
//   width: 60px;
//   height: 60px;
//   margin: 0 auto;
//   margin-bottom: 10px;
// `;

// const QuickAccess: React.FC = () => {
//   return (
//     <Container>
//       <Title>Acesso Rápido</Title>
//       <IonRow className="flex overflow-x-auto flex-nowrap px-0 mb-0">
//         <QuickCard routerLink="/exam-results">
//           <ImgCard src="./assets/icon/microscope.svg" />
//           <p className="text-sm pl-3" style={{ marginBottom: '15px' }}>
//             Resultados de Exames
//           </p>
//         </QuickCard>
//         <QuickCard routerLink="/schedules">
//           <ImgCard src="./assets/icon/appointment.svg" />
//           <p className="text-center" style={{ marginBottom: '15px' }}>
//             Minhas consultas
//           </p>
//         </QuickCard>
//         <QuickCard routerLink="/historical-clinic">
//           <ImgCard src="./assets/icon/historical.svg" />
//           <p className="text-center" style={{ marginBottom: '15px' }}>
//             Histórico Clínico
//           </p>
//         </QuickCard>
//       </IonRow>
//     </Container>
//   );
// };

// export default QuickAccess;

import { IonCard, IonImg } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 90%;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  padding-left: 3px;
`;

const QuickCard = styled(IonCard)`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  -webkit-text-decoration: none;
`;

const ImgCard = styled(IonImg)`
  width: 60px;
  height: 60px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const Info = styled.a`
  text-decoration: none;
  -webkit-text-decoration: none;
  margin-bottom: '15px';
`;

const QuickAccess: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Title>Acesso Rápido</Title>
      <Slider {...settings}>
        <QuickCard routerLink="/step1">
          <ImgCard src="./assets/icon/appointment.svg" />
          <Info>Cadastrar Paciente</Info>
        </QuickCard>
        <QuickCard routerLink="/">
          <ImgCard src="./assets/icon/microscope.svg" />
          <Info>Resultados do Laudo</Info>
        </QuickCard>
        <QuickCard routerLink="/dashboard">
          <ImgCard src="./assets/icon/historical.svg" />
          <Info>Histórico Clínico</Info>
        </QuickCard>
      </Slider>
    </Container>
  );
};

export default QuickAccess;
