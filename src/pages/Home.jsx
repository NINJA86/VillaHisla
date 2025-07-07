import React from 'react';
import Container from '../components/Container/Container';
import LeftContent from '../components/LeftContent/LeftContent';
import RightContent from '../components/RightContent/RightContent';
import Statistics from '../components/Statistics/Statistics';
import PlaceSuggestion from '../components/PlaceSuggestion/PlaceSuggestion';
import PlaceSec from '../components/PlaceSec/PlaceSec';
import CommentSec from '../components/CommentSec/CommentSec';
import SecondPlaceSuggestion from '../components/SecondPlaceSuggestion/SecondPlaceSuggestion';
import Newsletter from '../components/Newsletter/Newsletter';
import SubFooter from '../components/SubFooter/SubFooter';

function Home() {
  return (
    <>
      <section className="relative bg-dark-green text-white font-bold overflow-hidden">
        <RightContent />

        <Container classes="flex items-center h-screen">
          <LeftContent />
        </Container>
      </section>
      <section>
        <Statistics />
      </section>
      <section>
        <Container classes="flex items-center my-[120px] justify-between">
          <PlaceSuggestion />
        </Container>
      </section>
      <section className="bg-gray-100 py-[120px]">
        <Container>
          <PlaceSec />
        </Container>
      </section>
      <section className="bg-dark-green pt-[120px] pb-[100px]">
        <Container>
          <CommentSec />
        </Container>
      </section>
      <section className="my-[120px]">
        <Container>
          <SecondPlaceSuggestion />
        </Container>
      </section>
      <section
        className="bg-[url('img/bgs/bg-cover.jpg')]
      bg-cover bg-center py-44"
      >
        <Container>
          <Newsletter />
        </Container>
      </section>
      <section className="bg-bg-section py-[120px]">
        <Container classes="flex items-center justify-between gap-[4rem]">
          <SubFooter />
        </Container>
      </section>
    </>
  );
}

export default Home;
