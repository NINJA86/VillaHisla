import React from 'react';
import Container from '../components/Container/Container';
import LeftContent from '../components/LeftContent/LeftContent';
import RightContent from '../components/RightContent/RightContent';
import Statistics from '../components/Statistics/Statistics';
import PlaceSuggestion from '../components/PlaceSuggestion/PlaceSuggestion';
import PlaceSec from '../components/PlaceSec/PlaceSec';

function Home() {
  return (
    <>
      <section className="relative bg-dark-green text-white font-bold overflow-hidden">
        {/* فقط تصویر بک‌گراند absolute باشه */}
        <RightContent />

        {/* محتوا در ساختار نرمال صفحه قرار بگیره */}
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
      <section className="bg-gray-100 h-[100rem] py-[120px]">
        <Container>
          <PlaceSec />
        </Container>
      </section>
    </>
  );
}

export default Home;
