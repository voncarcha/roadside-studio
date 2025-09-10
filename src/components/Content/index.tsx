import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <div className="flex-1 ml-[40px]">
      <div className="flex gap-8">
        <section className="flex-1 flex flex-col gap-8">
          <Image
            src="/images/left-thumb-1.png"
            alt="Content 1"
            width={457}
            height={603}
          />
          <Image
            src="/images/left-thumb-2.png"
            alt="Content 2"
            width={457}
            height={603}
          />
          <Image
            src="/images/left-thumb-3.png"
            alt="Content 3"
            width={457}
            height={603}
          />
          <Image
            src="/images/left-thumb-4.png"
            alt="Content 4"
            width={457}
            height={603}
          />
        </section>
        <section className="flex-1 flex flex-col gap-8">
          <Image
            src="/images/right-thumb-1.png"
            alt="Content 1"
            width={457}
            height={603}
          />
          <Image
            src="/images/right-thumb-2.png"
            alt="Content 2"
            width={457}
            height={603}
          />
          <Image
            src="/images/right-thumb-3.png"
            alt="Content 3"
            width={457}
            height={603}
          />
          <Image
            src="/images/right-thumb-4.png"
            alt="Content 4"
            width={457}
            height={603}
          />
        </section>
      </div>
    </div>
  );
};

export default Content;
