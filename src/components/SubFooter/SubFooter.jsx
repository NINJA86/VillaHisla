import React from 'react';
import IconButton from '../IconButton/IconButton';

function SubFooter() {
  return (
    <>
      <h3 className="font-black text-[40px] max-w-[44rem]">
        Mauris imperdiet orci dapibus, commodo libero nec interdum tortor morbi
        in nibh faucibus iaculis lorem vitae cursus velit
      </h3>
      <div className="text-lg">
        <h5 className="font-bold">Phasellus finibus enim nulla quis ornare</h5>
        <p className="my-8 max-w-[83rem]">
          Dicta illum fugiat quaerat enim ratione quibusdam eius. Voluptates
          amet fugiat consectetur rerum magnam veritatis. Accusantium ut hic
          quidem voluptas. Ut itaque dolores amet et velit maiores odit ea non
          odio rerum voluptas velit.
        </p>
        <IconButton
          classes={'text-[17px] gap-[1.2rem] font-normal'}
          text={'Learn more'}
        />
      </div>
    </>
  );
}

export default SubFooter;
