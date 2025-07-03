import CounterNum from "../CounterNum/CounterNum";
import Container from "../Container/Container";

function Statistics() {
  return (
    <div className="bg-bg-section py-[120px]">
      <Container classes="flex items-center justify-between">
        <h2 className="max-w-[38rem] text-text-green text-3xl leading-12 font-medium">
          Moste provident ipsa iusto qui non neque dolor necessitatibus utoptio
          omnis vitae ducimus quod blanditiis.
        </h2>
        <div className="flex gap-28 text-text-green">
          <div className="">
            <CounterNum number={12} initialSpeed={250} />
            <h3 className="text-lg font-semibold max-w-28 ">
              Years of Experience
            </h3>
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
      </Container>
    </div>
  );
}

export default Statistics;
