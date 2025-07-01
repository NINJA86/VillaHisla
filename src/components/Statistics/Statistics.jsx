import React from 'react';
import StatsHighlightSection from '../StatsHighlightSection/StatsHighlightSection';
import CounterNum from '../CounterNum/CounterNum';
function Statistics() {
  const title = (
    <h2 className="max-w-[38rem] text-text-green text-3xl leading-12 font-medium">
      Moste provident ipsa iusto qui non neque dolor necessitatibus utoptio
      omnis vitae ducimus quod blanditiis.
    </h2>
  );
  const numbers = (
    <div className="flex gap-28 text-text-green">
      <div className="">
        <CounterNum number={12} initialSpeed={250} />
        <h3 className="text-lg font-semibold max-w-28 ">Years of Experience</h3>
      </div>
      <div className="">
        <CounterNum number={220} initialSpeed={11.5} />
        <h3 className="text-lg font-semibold max-w-28 ">Properties Sold</h3>
      </div>
      <div className="">
        <CounterNum number={500} initialSpeed={5} />
        <h3 className="text-lg font-semibold max-w-28 ">Happy Clients</h3>
      </div>
    </div>
  );

  return <StatsHighlightSection leftContent={title} rightContent={numbers} />;
}

export default Statistics;
