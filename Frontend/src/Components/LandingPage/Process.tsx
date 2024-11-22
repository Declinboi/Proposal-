import Img from "../../assets/phone.avif";

const Process = () => {
  return (
    <div className="lg:px-10 px-5 pt-20">
      <div className="max-w-[1240px]  grid gap-y-7 lg:grid-cols-2 mx-auto">
        <div className="flex flex-col lg:w-[85%] items-start gap-y-4 lg:gap-y-6 justify-center pl-6">
          <h2 className="text-green-500 font-semibold text-2xl lg:text-3xl">
            Why choose Daizey Express?
          </h2>
          {/* <h2 className="lg:text-[45px] text-[28px] leading-[35px] lg:leading-[50px] font-semibold">
						Make money by becoming a process server with Proof
					</h2> */}
          {/* <p>
						With Proof, you’ll get notified of nearby jobs, all managed through
						the highest-rated process serving app in the industry. Our efficient
						platform and operations team empower you to succeed on every job.
					</p>
					<p className="border-b-4 cursor-pointer font-medium hover:border-black duration-500">
						Become a process server with Proof
					</p> */}

          <div className="block ">
            <ol className="space-y-4 ">
              <li><span className="text-green-500 text-2xl mr-2">*</span>Fast turnaround times</li>
              <li><span className="text-green-500 text-2xl mr-2">*</span>High accuracy rates</li>
              <li><span className="text-green-500 text-2xl mr-2">*</span>Secure and confidential processing</li>
              <li><span className="text-green-500 text-2xl mr-2">*</span>Cost-effective solutions</li>
              <li><span className="text-green-500 text-2xl mr-2">*</span>Expert customer support</li>
            </ol>
          </div>
        </div>
        <img src={Img} alt="" />
      </div>
    </div>
  );
};

export default Process;
